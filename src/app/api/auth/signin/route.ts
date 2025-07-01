import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateJWT } from '@/lib/auth'
import { signInSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = signInSchema.parse(body)
    const { email, password } = validatedData

    // Sign in with Supabase
    const { data: supabaseData, error: supabaseError } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (supabaseError) {
      console.error('Supabase signin error:', supabaseError)
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    if (!supabaseData.user) {
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      )
    }

    // Generate JWT token using Supabase user ID
    const token = generateJWT(supabaseData.user.id)

    // Log tokens to console as requested
    console.log('Signin Success - JWT Token:', token)
    if (supabaseData.session) {
      console.log('Supabase Access Token:', supabaseData.session.access_token)
      console.log('Supabase Refresh Token:', supabaseData.session.refresh_token)
    }

    return NextResponse.json({
      message: 'Signin successful',
      user: {
        id: supabaseData.user.id,
        name: supabaseData.user.user_metadata?.name || supabaseData.user.email,
        email: supabaseData.user.email
      },
      token,
      supabaseSession: supabaseData.session,
      supabaseUser: supabaseData.user
    })

  } catch (error) {
    console.error('Signin error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 