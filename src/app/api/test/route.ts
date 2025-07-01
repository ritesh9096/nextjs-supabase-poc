import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Check environment variables
    const envCheck = {
      DATABASE_URL: !!process.env.DATABASE_URL,
      JWT_SECRET: !!process.env.JWT_SECRET,
      SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    }

    console.log('Environment variables check:', envCheck)

    // Test database connection
    await prisma.$connect()
    console.log('Database connection test: SUCCESS')

    // Test a simple query
    const userCount = await prisma.user.count()
    console.log('User count:', userCount)

    return NextResponse.json({
      message: 'All systems working',
      environment: envCheck,
      database: {
        connected: true,
        userCount
      }
    })
  } catch (error) {
    console.error('Test route error:', error)
    return NextResponse.json(
      { 
        error: 'System check failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 