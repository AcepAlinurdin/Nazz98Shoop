import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from './lib/auth'

// Add paths that require authentication here
const protectedRoutes = ['/admin']
const protectedApiRoutes = ['/api/products', '/api/settings', '/api/scrape']

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isProtectedApiRoute = protectedApiRoutes.some(route => path.startsWith(route))

    // For public GET products and settings, we don't need protection
    if ((path === '/api/products' || path === '/api/settings') && request.method === 'GET') {
        return NextResponse.next()
    }

    if (isProtectedRoute || isProtectedApiRoute) {
        const session = request.cookies.get('session')?.value

        if (!session) {
            if (isProtectedApiRoute) {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
            }
            // For /admin page, we show the login form (handled by the component), 
            // so we don't necessarily redirect if the user is on /admin.
            // But for other protected pages, we might.
            return NextResponse.next()
        }

        try {
            await decrypt(session)
            return NextResponse.next()
        } catch (error) {
            if (isProtectedApiRoute) {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
            }
            return NextResponse.next()
        }
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api/admin/login|_next/static|_next/image|.*\\.png$).*)'],
}
