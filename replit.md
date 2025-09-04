# replit.md

## Overview

This is a job portal web application built with React, Express.js, and PostgreSQL. The platform serves two types of users: job seekers who can browse and apply for jobs, and employers who can post job listings and manage applications. The application features a modern tech stack with TypeScript throughout, comprehensive UI components, and a well-structured database schema for managing users, companies, jobs, and applications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing with pages for home, login, register, dashboard, and job details
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility and consistent design
- **Styling**: Tailwind CSS with CSS variables for theming, responsive design, and custom color schemes
- **State Management**: TanStack Query (React Query) for server state management, caching, and data synchronization
- **Forms**: React Hook Form with Zod for validation, type safety, and seamless form handling
- **Path Aliases**: Configured aliases for clean imports (@/components, @/lib, @/hooks, etc.)

### Backend Architecture
- **Framework**: Express.js with TypeScript running in ESM mode for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations, migrations, and schema management
- **Authentication**: JWT-based stateless authentication with bcryptjs for secure password hashing
- **API Design**: RESTful API structure with proper HTTP methods and status codes
- **Middleware**: Custom authentication middleware and request logging for debugging and security
- **Error Handling**: Centralized error handling with structured error responses

### Database Design
- **Users Table**: Stores user credentials, profile information, and user type differentiation (job_seeker vs employer)
- **Companies Table**: Company information linked to employer users with industry and contact details
- **Jobs Table**: Job postings with comprehensive details including salary ranges, skills, and employment types
- **Applications Table**: Job applications linking users to jobs with status tracking and cover letters
- **Foreign Key Relationships**: Proper referential integrity between all entities for data consistency

### Authentication & Authorization
- **Registration/Login**: Separate endpoints for user registration and authentication with proper validation
- **JWT Tokens**: Stateless authentication using JSON Web Tokens for scalability
- **Role-based Access**: User type differentiation for feature access control (employers can post jobs, job seekers can apply)
- **Protected Routes**: Middleware-based route protection for authenticated endpoints
- **Client-side Auth**: AuthService class for managing authentication state on the frontend

### Development Strategy
- **In-memory Storage**: MemStorage class for rapid development and testing without database dependencies
- **Production Database**: Configured for PostgreSQL with Drizzle ORM for production deployment
- **Schema Validation**: Shared Zod schemas between frontend and backend for runtime type checking
- **Type Safety**: Comprehensive TypeScript usage with shared types and interfaces

## External Dependencies

### Database
- **PostgreSQL**: Primary database configured for production use with Neon Database serverless PostgreSQL
- **Drizzle Kit**: Database migration and schema management tools

### UI and Styling
- **Shadcn/ui**: Comprehensive component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS for processing
- **Lucide React**: Icon library for consistent iconography
- **Date-fns**: Date manipulation and formatting with internationalization support

### Development Tools
- **Vite**: Fast build tool with hot module replacement and optimized production builds
- **ESBuild**: Fast JavaScript bundler for server-side code
- **TSX**: TypeScript execution for development server
- **Replit Integration**: Vite plugins for Replit development environment support