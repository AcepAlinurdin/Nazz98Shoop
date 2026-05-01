import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { login } from '@/lib/auth'
import { checkRateLimit, recordAttempt } from '@/lib/rate-limit'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    // Get IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown'

    try {
        // Check rate limit
        const { allowed, remainingTime } = checkRateLimit(ip)
        if (!allowed) {
            return NextResponse.json({ 
                error: `Terlalu banyak percobaan. Silakan coba lagi dalam ${remainingTime} menit.` 
            }, { status: 429 })
        }

        const body = await req.json()
        const { email, password } = body

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
        }

        const admin = await prisma.admin.findUnique({
            where: { email }
        })

        if (!admin) {
            recordAttempt(ip, false)
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password)

        if (!isPasswordValid) {
            recordAttempt(ip, false)
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
        }

        // Success: Reset rate limit and set session
        recordAttempt(ip, true)
        await login(admin.id)

        return NextResponse.json({ success: true, message: 'Logged in successfully' })
    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}


