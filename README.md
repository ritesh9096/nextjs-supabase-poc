# Authentication POC

A simple proof of concept for email signup and login using Next.js with TypeScript, Supabase, and Prisma.

## Features

- ✅ Next.js 14 with TypeScript and App Router
- ✅ Supabase Authentication
- ✅ Prisma ORM with PostgreSQL
- ✅ Form validation with React Hook Form and Zod
- ✅ Tailwind CSS for styling
- ✅ JWT token generation and logging
- ✅ Email/password authentication
- ✅ Responsive design

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/nextauth_poc?schema=public"

# JWT Secret (generate a random string)
JWT_SECRET=your_jwt_secret_here
```

### 2. Supabase Setup

1. Create a free account at [Supabase](https://supabase.com)
2. Create a new project
3. Go to Settings > API to get your URL and keys
4. Add the Supabase URL and keys to your `.env.local` file

### 3. Database Setup

Run the following commands to set up your database:

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view your database
npx prisma studio
```

### 4. Install Dependencies and Run

```bash
# Install dependencies (already done if you followed the setup)
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/
│   ├── api/auth/
│   │   ├── signin/route.ts     # Sign-in API endpoint
│   │   └── signup/route.ts     # Sign-up API endpoint
│   ├── home/page.tsx           # Protected home page
│   ├── signin/page.tsx         # Sign-in page
│   ├── signup/page.tsx         # Sign-up page
│   └── page.tsx                # Landing page
├── components/
│   ├── SigninForm.tsx          # Sign-in form component
│   └── SignupForm.tsx          # Sign-up form component
└── lib/
    ├── auth.ts                 # Authentication utilities
    ├── prisma.ts               # Prisma client
    ├── supabase.ts             # Supabase client
    └── validations.ts          # Zod schemas
```

## How It Works

1. **Sign Up**: Users can create an account with email, name, and password
2. **Sign In**: Users can log in with email and password
3. **Authentication**: Uses both Supabase Auth and custom JWT tokens
4. **Database**: User data is stored in PostgreSQL via Prisma
5. **Token Logging**: JWT and Supabase tokens are logged to the console
6. **Navigation**: Successful auth redirects to the home page

## Token Logging

After successful authentication, you'll see tokens logged in the browser console:

- **JWT Token**: Custom generated token for your app
- **Supabase Access Token**: For Supabase API calls
- **Supabase Refresh Token**: For token renewal

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better developer experience
- **Supabase**: Backend-as-a-Service for authentication
- **Prisma**: Type-safe database ORM
- **PostgreSQL**: Database (via Supabase or local)
- **React Hook Form**: Form handling and validation
- **Zod**: Schema validation
- **Tailwind CSS**: Utility-first CSS framework
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT token generation

## API Endpoints

- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/signin` - Authenticate existing user

## Development Notes

- Passwords are hashed using bcryptjs before storage
- JWT tokens are valid for 7 days
- Form validation happens on both client and server
- Error handling is implemented for all authentication flows
- The app uses both Supabase Auth and custom database storage for demonstration

## Next Steps

To extend this POC, you could add:

- Password reset functionality
- Email verification
- Social authentication (Google, GitHub, etc.)
- Protected routes middleware
- User profile management
- Token refresh logic
- Logout functionality with token invalidation
