import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const all = searchParams.get('all') === 'true'

        const products = await prisma.product.findMany({
            where: all ? {} : { isVisible: true },
            orderBy: [
                { isPinned: 'desc' },
                { order: 'asc' }
            ]
        })
        return NextResponse.json(products)
    } catch (error) {
        console.error('Failed to fetch products:', error)
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { title, image, url, category, aspectRatio } = body

        if (!title || !url || !category) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        // Get the current max order
        const lastProduct = await prisma.product.findFirst({
            orderBy: { order: 'desc' }
        })
        const nextOrder = (lastProduct?.order ?? -1) + 1

        const product = await prisma.product.create({
            data: {
                title,
                image,
                url,
                category,
                aspectRatio: aspectRatio || '1:1',
                isVisible: true,
                order: nextOrder
            }
        })

        return NextResponse.json({ success: true, product })
    } catch (error) {
        console.error('Failed to create product:', error)
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 })
        }

        await prisma.product.delete({
            where: { id }
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Failed to delete product:', error)
        return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 })
    }
}

export async function PATCH(req: Request) {
    try {
        const body = await req.json()
        const { id, title, url, category, aspectRatio, isVisible, order, isPinned, customLabel } = body

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 })
        }

        const data: any = {}
        if (title !== undefined) data.title = title
        if (url !== undefined) data.url = url
        if (category !== undefined) data.category = category
        if (aspectRatio !== undefined) data.aspectRatio = aspectRatio
        if (isVisible !== undefined) data.isVisible = isVisible
        if (order !== undefined) data.order = order
        if (isPinned !== undefined) data.isPinned = isPinned
        if (customLabel !== undefined) data.customLabel = customLabel

        const updated = await prisma.product.update({
            where: { id },
            data
        })

        return NextResponse.json({ success: true, product: updated })
    } catch (error) {
        console.error('Failed to update product:', error)
        return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
    }
}
