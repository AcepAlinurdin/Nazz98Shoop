import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    try {
        let settings = await prisma.siteSettings.findUnique({
            where: { id: 1 }
        })

        if (!settings) {
            settings = await prisma.siteSettings.create({
                data: { id: 1, instagram: '', facebook: '', tiktok: '', youtubeMusic: 'jfKfPfyJRdk' }
            })
        }

        return NextResponse.json(settings)
    } catch (error) {
        console.error('Failed to fetch settings:', error)
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 })
    }
}

export async function PATCH(req: Request) {
    try {
        const body = await req.json()
        const { instagram, facebook, tiktok, youtubeMusic } = body

        const settings = await prisma.siteSettings.upsert({
            where: { id: 1 },
            update: { instagram, facebook, tiktok, youtubeMusic },
            create: { id: 1, instagram, facebook, tiktok, youtubeMusic }
        })

        return NextResponse.json({ success: true, settings })
    } catch (error) {
        console.error('Failed to update settings:', error)
        return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 })
    }
}
