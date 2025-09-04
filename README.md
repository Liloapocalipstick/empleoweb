# Portal de Empleos

Portal integral de empleos construido con React, Express.js y PostgreSQL.

## Overview

This is a comprehensive job portal web application built with React, Express.js, and PostgreSQL. The platform serves two distinct user types: job seekers who can browse and apply for positions, and employers who can post job listings and manage applications. The application features a modern, responsive design with real-time filtering, secure authentication, and a robust database schema supporting complex job matching workflows.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing with dedicated pages for home, authentication, dashboard, and job details
- **UI Components**: Shadcn/ui component library built on Radix UI primitives providing accessibility-first components with consistent design patterns
- **Styling**: Tailwind CSS with custom CSS variables enabling theming, dark mode support, and responsive design across all breakpoints
- **State Management**: TanStack Query (React Query) for sophisticated server state management, intelligent caching, and automatic background refetching
- **Forms**: React Hook Form integrated with Zod for type-safe form validation, error handling, and seamless user experience
- **Path Aliases**: Configured TypeScript path mapping for clean imports (@/, @shared/, @assets/) improving code organization

### Backend Architecture
- **Framework**: Express.js with TypeScript running in modern ESM mode for latest JavaScript features and improved performance
- **Database ORM**: Drizzle ORM providing compile-time type safety, automatic migrations, and intuitive schema management
- **Authentication**: JWT-based stateless authentication with bcryptjs for secure password hashing and token-based session management
- **API Design**: RESTful API architecture with comprehensive middleware stack for authentication, request logging, and centralized error handling
- **Storage Strategy**: Abstracted storage interface with in-memory implementation for development and PostgreSQL for production environments
- **Error Handling**: Centralized error handling middleware providing structured error responses and consistent API behavior

### Database Design
- **Users Table**: Comprehensive user management with credentials, profile information, and user type differentiation supporting both job seekers and employers
- **Companies Table**: Company profiles linked to employer users enabling branded job postings and employer identification
- **Jobs Table**: Detailed job postings with salary ranges, required skills, experience levels, and comprehensive metadata for effective matching
- **Applications Table**: Job application tracking with status management, cover letters, and relationship mapping between users and positions
- **Relationships**: Properly defined foreign key relationships ensuring referential integrity and supporting complex queries across entities

### Authentication & Authorization
- **Registration/Login**: Separate authentication endpoints with comprehensive validation, email uniqueness checking, and secure credential handling
- **JWT Tokens**: Stateless authentication using JSON Web Tokens with automatic token management and localStorage persistence
- **Role-based Access**: User type differentiation enabling distinct feature sets for job seekers versus employers with appropriate access controls
- **Protected Routes**: Middleware-based route protection for authenticated endpoints with proper error responses and security validation

### Data Validation & Type Safety
- **Schema Validation**: Comprehensive Zod schemas for runtime type checking, API request validation, and form data validation
- **Shared Types**: TypeScript interfaces shared between frontend and backend ensuring consistency and reducing development errors
- **Database Schema**: Drizzle schema definitions with proper column types, constraints, and relationship mappings
- **Form Validation**: Multi-layer validation with client-side validation for user experience and server-side validation for security

## External Dependencies

### Database & Storage
- **PostgreSQL**: Primary database using Neon Database serverless PostgreSQL for scalable, managed database infrastructure
- **Drizzle ORM**: Type-safe database operations with automatic schema migrations and query optimization

### Authentication & Security
- **bcryptjs**: Secure password hashing with salt rounds for user credential protection
- **jsonwebtoken**: JWT token generation and verification for stateless authentication

### UI & Frontend Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives including dialogs, dropdowns, and form components
- **TanStack Query**: Advanced server state management with caching, synchronization, and background updates
- **React Hook Form**: Performant form library with minimal re-renders and comprehensive validation support
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for theming and responsive design
- **Wouter**: Minimalist router for React applications with hook-based navigation

### Development & Build Tools
- **Vite**: Fast build tool with hot module replacement and optimized production builds
- **TypeScript**: Static type checking across the entire application stack
- **Zod**: Runtime type validation and schema definition for API contracts
- **ESBuild**: Fast JavaScript bundler for production builds

### Date & Utility Libraries
- **date-fns**: Modern date utility library with internationalization support (Spanish locale)
- **clsx & tailwind-merge**: Utility functions for conditional CSS class management