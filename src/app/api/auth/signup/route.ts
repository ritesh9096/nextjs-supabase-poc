import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { generateJWT } from '@/lib/auth'
import { signUpSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = signUpSchema.parse(body)
    const { name, email, password } = validatedData

    // Sign up with Supabase (this creates the user)
    const { data: supabaseData, error: supabaseError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name, // This adds the name to user metadata
        }
      }
    })

    if (supabaseError) {
      console.error('Supabase signup error:', supabaseError)
      return NextResponse.json(
        { error: supabaseError.message },
        { status: 400 }
      )
    }

    if (!supabaseData.user) {
      return NextResponse.json(
        { error: 'Failed to create user' },
        { status: 400 }
      )
    }

    // Generate JWT token using Supabase user ID
    const token = generateJWT(supabaseData.user.id)

    // Log tokens to console as requested
    console.log('Signup Success - JWT Token:', token)
    if (supabaseData.session) {
      console.log('Supabase Access Token:', supabaseData.session.access_token)
      console.log('Supabase Refresh Token:', supabaseData.session.refresh_token)
    }

    return NextResponse.json({
      message: 'User created successfully',
      user: {
        id: supabaseData.user.id,
        name: name,
        email: supabaseData.user.email
      },
      token,
      supabaseSession: supabaseData.session,
      supabaseUser: supabaseData.user
    })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 
