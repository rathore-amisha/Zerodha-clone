# Zerodha Project Structure

This repository contains three separate apps:

- `Backend/`: Node.js + Express API with MongoDB/Mongoose models.
- `dashboard/`: React trading dashboard for portfolio and order management.
- `frontend/`: React public-facing landing site and marketing pages.

The sections below describe the folder layout and the role of each file or group of files.

## Top-Level Layout

```text
zerodha/
├── Backend/
├── dashboard/
└── frontend/
```

## Backend

Path: `Backend/`

Purpose: API server for holdings, positions, and orders. It connects to MongoDB, exposes JSON endpoints, and stores data through Mongoose models.

### Files

- `Backend/index.js` - Express app entry point. Loads environment variables, connects to MongoDB, enables CORS and JSON parsing, and serves the API endpoints.
- `Backend/package.json` - Backend dependencies and start script.

### API behavior

- `GET /allHoldings` - Returns every holding from MongoDB.
- `GET /allPositions` - Returns every position from MongoDB.
- `POST /newOrder` - Saves a new order document with `name`, `qty`, `price`, and `mode`.

### Models

- `Backend/models/HoldingsModel.js` - Mongoose model for holdings documents.
- `Backend/models/OrdersModel.js` - Mongoose model for order documents.
- `Backend/models/PositionsModel.js` - Mongoose model for position documents.

### Schemas

- `Backend/schemas/HoldingsSchema.js` - Defines holding fields: `name`, `qty`, `avg`, `price`, `net`, `day`.
- `Backend/schemas/OrdersSchem.js` - Defines order fields: `name`, `qty`, `price`, `mode`.
- `Backend/schemas/PositionsSchema.js` - Defines position fields: `product`, `name`, `qty`, `avg`, `price`, `net`, `day`, `isLoss`.

### Runtime dependencies

- `express` - HTTP server framework.
- `mongoose` - MongoDB object modeling.
- `cors` - Cross-origin requests.
- `body-parser` - JSON request parsing.
- `dotenv` - Environment variable loading.
- `passport`, `passport-local`, `passport-local-mongoose` - Authentication-related packages present in the backend dependencies.
- `nodemon` - Development server restart tool.

## Dashboard

Path: `dashboard/`

Purpose: Logged-in trading dashboard UI. This app appears to render the account-side experience: portfolio summary, holdings, positions, orders, funds, watchlist, charts, and action windows.

### Files

- `dashboard/src/index.js` - React entry point. Mounts the dashboard app and routes all paths into `Home`.
- `dashboard/src/index.css` - Global dashboard styles.
- `dashboard/package.json` - Dashboard dependencies and React scripts.
- `dashboard/README.md` - Default Create React App documentation, currently generic boilerplate.

### Component folder

Path: `dashboard/src/component/`

- `Apps.js` - Main dashboard shell or app composition layer.
- `Dashboard.js` - Main dashboard page/container.
- `Home.js` - Home view for the dashboard experience.
- `TopBar.js` - Top navigation/header bar.
- `Menu.js` - Menu or sidebar navigation.
- `WatchList.js` - Watchlist UI for tracked instruments.
- `Holdings.js` - Holdings table or holdings summary view.
- `Positions.js` - Open positions view.
- `Orders.js` - Order history or active orders view.
- `Summary.js` - Account summary cards/overview.
- `Funds.js` - Funds and margin-related UI.
- `BuyActionWindow.js` - Buy order action modal/window.
- `BuyActionWindow.css` - Styles for the buy action window.
- `DoughnoutChart.js` - Doughnut chart visualization component.
- `VerticalGraph.js` - Vertical bar/graph visualization component.
- `GeneralContext.js` - Shared React context used across dashboard components.

### Local data

- `dashboard/src/data/data.js` - Local data source, seed values, or mock UI data used by the dashboard.

### Runtime dependencies

- `react`, `react-dom` - UI runtime.
- `react-router-dom` - Client-side routing.
- `axios` - API requests.
- `chart.js`, `react-chartjs-2` - Graph and chart rendering.
- `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled` - Material UI and styling packages.
- `@testing-library/*`, `web-vitals` - Testing and performance tooling.

## Frontend

Path: `frontend/`

Purpose: Public landing site for the Zerodha experience. This app handles the marketing pages such as home, about, pricing, products, support, and signup.

### Files

- `frontend/src/index.js` - React entry point. Mounts the landing site and routes all paths to the main `Home` component.
- `frontend/src/index.css` - Global landing-page styles.
- `frontend/package.json` - Frontend dependencies and React scripts.

### Landing page structure

Path: `frontend/src/landing_page/`

- `Navbar.js` - Shared top navigation.
- `Footer.js` - Shared page footer.
- `NotFound.js` - 404 fallback page.
- `OpenAcount.js` - Account-opening page or call-to-action flow.

#### Home pages

- `home/Homepages.js` - Home landing-page composition.
- `home/Hero.js` - Home hero section.
- `home/Education.js` - Education or learn-more section.
- `home/awards.js` - Awards or recognition section.
- `home/pricing.js` - Pricing teaser or pricing summary section.
- `home/stats.js` - Statistics or metrics section.

#### About pages

- `about/Aboutpages.js` - About page composition.
- `about/Hero.js` - About page hero section.
- `about/Team.js` - Team or people section.

#### Pricing pages

- `pricing/PricingPage.js` - Pricing page composition.
- `pricing/Hero.js` - Pricing hero section.
- `pricing/Brokerage.js` - Brokerage pricing details.

#### Product pages

- `products/Productpages.js` - Product page composition.
- `products/Hero.js` - Product hero section.
- `products/Leftsection.js` - Left-side content section.
- `products/Rightsection.js` - Right-side content section.
- `products/Universe.js` - Universe or ecosystem section.

#### Support pages

- `support/Supportpages.js` - Support page composition.
- `support/Hero.js` - Support hero section.
- `support/Createticket.js` - Support ticket creation form or flow.

#### Signup pages

- `signup/Signup.js` - Signup page or onboarding form.

### Runtime dependencies

- `react`, `react-dom` - UI runtime.
- `react-router-dom` - Client-side routing.
- `@testing-library/*`, `web-vitals` - Testing and performance tooling.

## Generated Output

The `frontend/build/` directory is generated production output. It includes the compiled app bundle, manifests, and static assets. It should be treated as build output rather than hand-edited source.

## Overall Flow

1. The `frontend/` app serves the public website and routes users through the marketing and signup experience.
2. The `dashboard/` app serves the internal trading dashboard experience.
3. The `Backend/` API serves MongoDB-backed holdings, positions, and order data to the React apps.

## Useful Start Points

- Backend API entry: `Backend/index.js`
- Dashboard app entry: `dashboard/src/index.js`
- Landing page app entry: `frontend/src/index.js`
