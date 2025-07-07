# Project Conventions (GEMINI.md)

This document outlines the coding conventions and best practices for this project to ensure consistency, readability, and maintainability across the team.

## 1. Naming Conventions

- **Variables & Functions:** `snake_case` (e.g., `user_name`, `get_user_data`).
- **Constants:** `SCREAMING_SNAKE_CASE` for global constants (e.g., `PORT`, `MONGO_URI`).
- **Types & Interfaces:** `Pascal_Case_With_Underscores` (e.g., `User_Type`, `User_Interface`).
- **Models:** `Pascal_Case_With_Underscores_And_Model_Suffix` (e.g., `User_Model`).
- **Services:** `Pascal_Case_With_Underscores_And_Service_Suffix` (e.g., `User_Service`).
- **Routes:** `Pascal_Case_With_Underscores_And_Routes_Suffix` (e.g., `User_Routes`).
- **Controllers:** `Pascal_Case_With_Underscores_And_Controller_Suffix` (e.g., `User_Controller`).
- **Middleware:** `Pascal_Case_With_Underscores_And_Middleware_Suffix` (e.g., `Auth_Middleware`).
- **Files:** `kebab-case` with `[module].[type].ts` format (e.g., `user.service.ts`, `db.config.ts`).
- **Folders:** `kebab-case` (e.g., `src/config`, `src/routes`).

## 2. Code Style

- **Indentation:** 4 spaces (hard tabs).
- **Semicolons:** Always use semicolons at the end of statements.
- **Quotes:** Prefer single quotes (`'`) for strings, unless escaping is necessary.
- **Braces:** K&R style (opening brace on the same line as the statement).
- **Line Length:** Aim for a maximum of 100-120 characters per line for readability.
- **Imports:** Group imports, with external modules first, then internal modules, separated by a blank line. Use `@app/` alias for internal modules.

  ```typescript
  import express from 'express';
  import { connect } from 'mongoose';

  import { User } from '@app/models/User';
  import { errorHandler } from '@app/middleware/errorHandler';
  ```

## 3. Programming Paradigm

- **TypeScript First:** Leverage TypeScript's features (interfaces, types, enums) for strong typing and better code predictability.
- **Functional Programming First:** The entire codebase should adhere to functional programming principles.
  - **Purity:** Functions should be pure, meaning they have no side effects (e.g., no network or database calls, no logging, no file system changes). For a given input, a pure function must always return the same output.
  - **Immutability:** Data structures should be immutable. Avoid in-place modification of objects and arrays. Use techniques like object spreading (`{...obj}`) or array spreading (`[...arr]`) to create new data structures instead of mutating existing ones.
  - **Composition:** Build complex functionality by composing smaller, reusable pure functions.
  - **Side Effects:** Isolate side effects (like database interactions, API calls, etc.) from the core application logic. They should be handled at the boundaries of the application (e.g., in the main `index.ts` file or dedicated middleware).
- **Function Declarations:** Prefer using arrow functions (`=>`) for their conciseness and lexical `this` binding, which aligns well with functional programming practices.
- **Asynchronous Operations:** Use `async/await` for handling promises. Avoid callback hell.

## 4. Error Handling

- **Centralized Error Handling:** Implement a global error handling middleware for Express to catch unhandled errors and send consistent responses.
- **Custom Errors:** Define custom error classes for specific application errors (e.g., `NotFoundError`, `ValidationError`).
- **Try-Catch:** Use `try-catch` blocks for asynchronous operations that might throw errors.

## 5. Module Aliases

- Use the `@app/` alias for imports within the `src` directory to avoid long relative paths. (e.g., `import { connectDB } from '@app/config/db';`)

## 6. Environment Variables

- Manage sensitive information and configuration using environment variables (e.g., `.env` file in development).
- Access them via `process.env.VARIABLE_NAME`.
- Ensure a `.env.example` file is provided (without sensitive values) for team members.

## 7. Database Interaction (Mongoose)

- **Models:** Define Mongoose schemas and models in `src/models`.
- **Connection:** Centralize the database connection logic (e.g., `src/config/db.ts`).
- **Error Handling:** Handle Mongoose connection errors gracefully.

---

*This document is a living guide and may be updated as the project evolves.*