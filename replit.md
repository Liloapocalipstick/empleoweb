# replit.md

## Overview

This is a comprehensive job portal web application built with React, Express.js, and PostgreSQL. The platform serves two distinct user types: job seekers who can browse and apply for positions, and employers who can post jobs and manage applications. The application features a modern tech stack with TypeScript throughout, comprehensive authentication, and a responsive design optimized for both desktop and mobile experiences.

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
- **Path Aliases**: Configured TypeScript path mapping for clean imports (@/, @shared/) improving code organization

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

### Core Database & ORM
- **PostgreSQL**: Primary database for production environments with Neon Database serverless integration
- **Drizzle ORM**: Type-safe database ORM with automatic migration generation and PostgreSQL dialect support
- **Drizzle Kit**: Database migration tooling and schema management

### Frontend UI & Interaction
- **Radix UI Primitives**: Complete set of accessible, unstyled UI components including dialogs, dropdowns, forms, and navigation
- **Tailwind CSS**: Utility-first CSS framework with custom design system and responsive breakpoints
- **Lucide React**: Comprehensive icon library with consistent styling and accessibility features
- **TanStack Query**: Advanced server state management with caching, synchronization, and background updates
- **React Hook Form**: Performant form library with minimal re-renders and comprehensive validation support
- **Wouter**: Minimalist client-side routing library optimized for modern React applications

### Authentication & Security
- **JSON Web Tokens (jsonwebtoken)**: Industry-standard token-based authentication for stateless sessions
- **bcryptjs**: Secure password hashing with configurable salt rounds and timing attack protection
- **Zod**: Runtime type validation and parsing for API endpoints and form data

### Development & Build Tools
- **Vite**: Next-generation frontend build tool with hot module replacement and optimized production builds
- **TypeScript**: Static type checking across the entire codebase with shared types between frontend and backend
- **ESBuild**: Fast JavaScript bundler for server-side code compilation and optimization
- **PostCSS & Autoprefixer**: CSS processing pipeline for vendor prefixes and modern CSS features

### Utility Libraries
- **Class Variance Authority**: Type-safe component variant generation for consistent UI patterns
- **clsx & tailwind-merge**: Conditional CSS class composition with Tailwind CSS optimization
- **date-fns**: Modern date utility library with internationalization support and tree-shaking optimization
- **nanoid**: Secure URL-safe unique ID generation for database records and session management