# replit.md

## Overview

This is a job portal web application built with React, Express.js, and PostgreSQL. The platform serves two types of users: job seekers who can browse and apply for jobs, and employers who can post job listings. The application features a modern UI with comprehensive job search and filtering capabilities, user authentication, and role-based functionality for both job seekers and employers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing with pages for home, login, register, dashboard, and job details
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility and consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming, responsive design, and dark mode support
- **State Management**: TanStack Query (React Query) for server state management, caching, and API synchronization
- **Forms**: React Hook Form with Zod for type-safe form validation and error handling
- **Path Aliases**: Configured TypeScript path mapping for clean imports (@/, @shared/, @assets/)

### Backend Architecture
- **Framework**: Express.js with TypeScript running in ESM mode for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations, migrations, and schema management
- **Authentication**: JWT-based stateless authentication with bcryptjs for secure password hashing
- **API Design**: RESTful API structure with middleware for authentication, logging, and error handling
- **Storage Strategy**: Modular storage interface with in-memory implementation for development and PostgreSQL for production
- **Error Handling**: Centralized error handling middleware with structured error responses

### Database Design
- **Users Table**: Stores user credentials and profile information with user type differentiation (job_seeker vs employer)
- **Companies Table**: Company information linked to employer users for job posting attribution
- **Jobs Table**: Comprehensive job postings with detailed information including salary ranges, skills, and status tracking
- **Applications Table**: Job applications linking users to jobs with status tracking and cover letter support
- **Relationships**: Proper foreign key relationships between all entities ensuring data integrity and referential constraints

### Authentication & Authorization
- **Registration/Login**: Separate endpoints for user registration and authentication with email uniqueness validation
- **JWT Tokens**: Stateless authentication using JSON Web Tokens stored in localStorage with automatic token management
- **Role-based Access**: User type differentiation enabling different feature access for job seekers vs employers
- **Protected Routes**: Middleware-based route protection for authenticated endpoints with proper error responses

### Data Validation & Type Safety
- **Schema Validation**: Zod schemas for runtime type checking, API validation, and form validation
- **Shared Types**: TypeScript interfaces shared between frontend and backend for consistency
- **Database Schema**: Drizzle schema definitions with proper column types, constraints, and relationships
- **Form Validation**: Client-side validation with server-side validation as backup for security

## External Dependencies

### Database
- **PostgreSQL**: Primary database using Neon Database serverless PostgreSQL with connection pooling
- **Drizzle ORM**: Type-safe database operations with migration support and schema management

### UI & Styling
- **Radix UI**: Accessible component primitives for building the UI component library
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **Lucide React**: Icon library for consistent iconography throughout the application

### Development Tools
- **Vite**: Fast build tool with hot module replacement for development and optimized production builds
- **TypeScript**: Static type checking for better developer experience and code quality
- **ESLint & Prettier**: Code linting and formatting for consistent code style

### Authentication & Security
- **bcryptjs**: Password hashing library for secure password storage
- **jsonwebtoken**: JWT implementation for stateless authentication
- **Zod**: Schema validation library for runtime type checking and data validation