# Matchkro Admin Panel

A React admin dashboard UI for the MatchKro dating app.

This project is a frontend admin panel built with React and Material UI. It includes a dashboard with charts and widgets, user management, product management, blog management, and profile edit pages. The current implementation uses mock data for UI demonstration and admin workflows.

## Features

- Dashboard overview with widgets and analytics
- Website visits, traffic, conversion, and task charts
- User management table with sorting, filtering, pagination, and selection
- Product catalog UI with filter sidebar and sort controls
- Blog management page with search and post cards
- Edit profile screen for account details
- Login screen with social login button UI and form input
- Responsive layout powered by Material UI
- Mock data support for quick demos and prototyping

## Technology Stack

- React
- React Router
- Material UI (MUI)
- React Helmet Async
- ApexCharts
- Faker for mock data
- ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js (recommended 16+)
- npm or Yarn

### Install dependencies

```bash
npm install
# or
npm install
```

### Run locally

```bash
npm start
# or
yarn start
```

Open http://localhost:3000 in your browser. The app will start at the login screen, then navigate to `/dashboard` after sign in.

### Build for production

```bash
npm run build
# or
yarn build
```

### Linting

```bash
npm run lint
npm run lint:fix
```

## Project Structure

- `src/pages` — main page routes: dashboard, users, products, blog, edit profile, login
- `src/layouts` — dashboard and simple layout containers
- `src/sections` — reusable dashboard sections and page components
- `src/_mock` — mock data used by the UI
- `src/components` — shared UI components
- `src/routes.js` — route definitions

## Notes

- The current app is a frontend UI prototype and does not include backend integration.
- Login is handled client-side and routes to the dashboard with mock navigation.
