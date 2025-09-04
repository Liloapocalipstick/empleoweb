# replit.md

## Overview

This is a full-stack job portal web application that connects job seekers with employers. Built with modern web technologies, the platform allows job seekers to browse and apply for positions while enabling employers to post jobs and manage applications. The application features user authentication, role-based access control, advanced job filtering, and a comprehensive dashboard system for both user types.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing with pages for home, login, register, dashboard, and job details
- **UI Components**: Shadcn/ui component library built on Radix UI primitives, providing accessible and customizable components
- **Styling**: Tailwind CSS with CSS variables for consistent theming, responsive design, and dark/light mode support
- **State Management**: TanStack Query (React Query) for efficient server state management, caching, and background updates
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing and runtime validation
- **Design System**: Consistent component variants using class-variance-authority and centralized utility functions

### Backend Architecture
- **Framework**: Express.js with TypeScript running in ESM mode for modern JavaScript features
- **Database ORM**: Drizzle ORM providing type-safe database operations, automatic migrations, and PostgreSQL integration
- **Authentication**: JWT-based stateless authentication with bcryptjs for secure password hashing
- **API Design**: RESTful API structure with middleware for authentication, logging, and error handling
- **Error Handling**: Centralized error handling middleware with structured error responses and proper HTTP status codes
- **Development Tools**: Custom Vite integration for hot module replacement and development server proxy

### Database Design
- **Users Table**: Stores authentication credentials and profile information with role differentiation (job_seeker vs employer)
- **Companies Table**: Company profiles linked to employer users with industry and contact information
- **Jobs Table**: Detailed job postings with location, salary ranges, required skills, and employment types
- **Applications Table**: Job applications linking users to jobs with status tracking and cover letters
- **Relationships**: Proper foreign key constraints maintaining data integrity across all entities
- **Schema Validation**: Shared Zod schemas between frontend and backend ensuring consistent data validation

### Authentication & Authorization
- **Registration System**: Separate workflows for job seekers and employers with role-based registration
- **JWT Implementation**: Stateless authentication using JSON Web Tokens with configurable secret keys
- **Route Protection**: Middleware-based authentication for protected API endpoints
- **Role-Based Access**: User type differentiation controlling feature access and UI components
- **Session Management**: Client-side token storage with automatic logout on token expiration

### Data Storage Strategy
- **Development Mode**: In-memory storage implementation for rapid development and testing without database dependencies
- **Production Database**: PostgreSQL with Neon Database serverless configuration for scalable cloud deployment
- **Migration System**: Drizzle Kit for database schema migrations and version control
- **Type Safety**: End-to-end TypeScript types shared between client, server, and database layers

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL database with connection pooling and automatic scaling
- **Drizzle ORM**: Modern TypeScript ORM with automatic type generation and migration support

### UI & Styling
- **Radix UI**: Accessible component primitives for complex UI interactions
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens and responsive utilities
- **Lucide Icons**: Consistent iconography throughout the application

### Development Tools
- **Vite**: Fast build tool with hot module replacement and optimized production bundles
- **TypeScript**: Full type safety across the entire stack with strict compiler options
- **Replit Integration**: Custom development environment setup with error overlays and debugging tools

### Authentication & Security
- **bcryptjs**: Secure password hashing with configurable salt rounds
- **jsonwebtoken**: JWT token generation and verification for stateless authentication