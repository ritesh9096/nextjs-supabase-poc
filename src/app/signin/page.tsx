import SigninForm from '@/components/SigninForm'

export default function SigninPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
            Sign in to your account
          </h1>
        </div>
        <SigninForm />
      </div>
    </div>
  )
} 