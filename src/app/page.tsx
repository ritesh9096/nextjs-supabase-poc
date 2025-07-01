'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Hero Section */}
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Authentication POC
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A simple proof of concept for email signup and login using Next.js with TypeScript, 
            Supabase, and Prisma.
          </p>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Next.js
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    React framework with TypeScript and App Router
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Supabase
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Authentication and real-time database backend
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-purple-500 rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Prisma
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Type-safe database ORM with PostgreSQL
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Form Validation
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    React Hook Form with Zod schema validation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex justify-center space-x-6">
            <button
              onClick={() => router.push('/signup')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg"
            >
              Sign Up
            </button>
            <button
              onClick={() => router.push('/signin')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg"
            >
              Sign In
            </button>
          </div>

          {/* Instructions */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Setup Instructions
            </h3>
            <div className="text-left space-y-2 text-sm text-gray-600">
              <p>1. Create a Supabase account and project</p>
              <p>2. Set up environment variables in <code className="bg-gray-100 px-1 rounded">.env.local</code>:</p>
              <ul className="ml-4 mt-2 space-y-1">
                <li>• <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code></li>
                <li>• <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_SUPABASE_ANON_KEY</code></li>
                <li>• <code className="bg-gray-100 px-1 rounded">DATABASE_URL</code></li>
                <li>• <code className="bg-gray-100 px-1 rounded">JWT_SECRET</code></li>
              </ul>
              <p>3. Run <code className="bg-gray-100 px-1 rounded">npx prisma migrate dev</code> to set up the database</p>
              <p>4. Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to start the application</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
