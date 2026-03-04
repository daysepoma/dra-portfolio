# Dra. Ariana Portfolio

A modern, full-stack portfolio website built with React, TypeScript, and Express.

## Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Wouter** - Lightweight client-side routing
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **shadcn/ui** - Component collection

### Backend
- **Express** - Node.js web framework
- **TypeScript** - Type safety

### Development Tools
- **pnpm** - Fast, disk space efficient package manager
- **Prettier** - Code formatter
- **ESBuild** - Fast JavaScript bundler

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **pnpm** (v10.4.1 or higher)

## Installation

**Important:** This project uses **pnpm**, not npm.

```bash
# Install dependencies
pnpm install
```

## Available Scripts

```bash
# Start development server (with hot reload)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Preview production build locally
pnpm preview

# Type check without emitting files
pnpm check

# Format code with Prettier
pnpm format
```

## Project Structure

```
dra-portfolio/
├── client/               # Frontend React application
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # React components
│   │   │   └── ui/       # shadcn/ui components
│   │   ├── contexts/     # React contexts (Theme, etc.)
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility libraries
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Main App component
│   │   ├── main.tsx      # Application entry point
│   │   └── index.css     # Global styles
│   └── index.html        # HTML template
├── server/               # Backend Express server
│   └── index.ts          # Express server setup
├── shared/               # Code shared between client & server
│   └── const.ts          # Shared constants
├── patches/              # pnpm patches for dependencies
├── components.json       # shadcn/ui configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Development

### Starting the Development Server

```bash
pnpm dev
```

This will start the Vite dev server on `http://localhost:3000` (or the next available port).

### Theme Configuration

The app uses a custom theme provider. To enable theme switching:

1. Open `client/src/App.tsx`
2. Uncomment the `switchable` prop in `ThemeProvider`:

```tsx
<ThemeProvider
  defaultTheme="light"
  switchable  // Uncomment this line
>
```

### Adding Components

This project uses shadcn/ui components. The configuration is in `components.json`.

## Build & Deployment

### Production Build

```bash
pnpm build
```

This creates:
- Frontend bundle in `dist/public/`
- Backend bundle in `dist/index.js`

### Starting Production Server

```bash
pnpm start
```

The server runs on port 3000 by default (configurable via `PORT` environment variable).

## Features

- Modern React 19 with TypeScript
- Server-side rendering ready
- Dark/Light theme support
- Responsive design with Tailwind CSS
- Accessible UI components (Radix UI)
- Client-side routing
- Production-ready Express backend
- Development debug logging (Manus)

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

## Notes

- This project uses **pnpm** exclusively. Do not use npm or yarn as they may cause dependency resolution issues.
- The project includes custom patches for some dependencies (see `patches/` folder).
- Tailwind CSS v4 is used with the new Vite plugin architecture.

## License

MIT
