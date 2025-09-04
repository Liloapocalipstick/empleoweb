# replit.md

## Overview

This is a job portal web application built with React, Express.js, and PostgreSQL. The platform serves two types of users: job seekers who can browse and apply for jobs, and employers who can post job listings. The application features a modern UI built with shadcn/ui components, comprehensive authentication, and full-stack TypeScript implementation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing with pages for home, login, register, dashboard, and job details
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility and consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming, responsive design, and dark mode support
- **State Management**: TanStack Query (React Query) for server state management, caching, and optimistic updates
- **Forms**: React Hook Form with Zod for validation, type safety, and enhanced user experience

### Backend Architecture
- **Framework**: Express.js with TypeScript running in ESM mode for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations, migrations, and schema management
- **Authentication**: JWT-based authentication with bcryptjs for secure password hashing
- **API Design**: RESTful API structure with middleware for authentication, logging, and error handling
- **Error Handling**: Centralized error handling middleware with structured error responses

### Database Design
- **Users Table**: Stores user credentials and profile information with user type differentiation (job_seeker vs employer)
- **Companies Table**: Company information linked to employer users for job posting management
- **Jobs Table**: Job postings with detailed information including salary ranges, skills, and employment types
- **Applications Table**: Job applications linking users to jobs with status tracking and cover letters
- **Relationships**: Proper foreign key relationships between all entities ensuring data integrity

### Authentication & Authorization
- **Registration/Login**: Separate endpoints for user registration and authentication with form validation
- **JWT Tokens**: Stateless authentication using JSON Web Tokens stored in localStorage
- **Role-based Access**: User type differentiation for feature access (employers can post jobs, job seekers can apply)
- **Protected Routes**: Middleware-based route protection for authenticated endpoints

### Data Storage Strategy
- **Development Storage**: In-memory storage implementation for rapid development and testing
- **Production Ready**: Drizzle ORM configuration with PostgreSQL support and proper migration system
- **Schema Validation**: Zod schemas for runtime type checking and API validation
- **Type Safety**: Shared TypeScript types between frontend and backend for consistency

## External Dependencies

### Database
- **PostgreSQL**: Primary database using Neon Database serverless PostgreSQL for production
- **Drizzle Kit**: Database migration and schema management tool

### UI and Styling
- **Shadcn/ui**: Pre-built component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Icon library for consistent iconography

### Authentication
- **bcryptjs**: Password hashing library for secure user authentication
- **jsonwebtoken**: JWT implementation for stateless authentication

### Development Tools
- **Vite**: Modern build tool with hot module replacement
- **TypeScript**: Type safety across the entire application
- **ESLint**: Code linting for consistent code quality