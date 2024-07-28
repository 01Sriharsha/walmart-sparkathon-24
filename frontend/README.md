# Setting Up a React.js Frontend Application with pnpm

This guide will walk you through the steps to install pnpm and run the server in your existing React.js repository.

## Prerequisites

Ensure you have the following installed on your machine:
1. **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
2. **pnpm**: Install pnpm globally by running:
   <Code>npm install -g pnpm</Code>

## Steps to Set Up the Application

### 1. Install pnpm

If pnpm is not already installed globally, install it by running:

<Code>npm install -g pnpm</Code>

### 2. Install Project Dependencies

Navigate to your project directory and install the project dependencies using pnpm:

<Code>cd your-project-name</Code>
<Code>pnpm install</Code>

### 3. Start the Development Server

Run the following command to start the development server:

<Code>pnpm dev</Code>

This will start the React.js development server on `http://localhost:3000`.

## Additional Commands

- **Linting**: To run ESLint, use:
  <Code>pnpm lint</Code>

- **Formatting**: To run Prettier (if configured), use:
  <Code>pnpm format</Code>

- **Testing**: To run tests (if configured), use:
  <Code>pnpm test</Code>


## Git Commit Message Guidelines

Follow these guidelines for writing clear and consistent Git commit messages using specific keywords.

### Commit Message Structure

A commit message consists of two parts:

1. **Header**: A single line that summarizes the changes.
2. **Body**: A short explanation of the changes.

### Header Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (e.g., white-space, formatting, missing semi-colons)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Examples

- **feat**: A new feature


## Conclusion

You have successfully set up and run your React.js application using pnpm and learned how to write clear and consistent Git commit messages using specific keywords. This setup and these guidelines provide a robust foundation for building modern web applications with a streamlined workflow.