# The Elden Heights School · Towards Eternal Glory

This repository contains the full-stack web application for **The Elden Heights School**, designed with a heritage-inspired yet
modern aesthetic. The project is structured for AWS Amplify hosting with separate frontend and backend apps.

## Project Structure

```
EldenHeights/
├── frontend/        # React + Vite + Tailwind CSS single-page application
└── backend/         # Node.js + Express API server with MongoDB integration
```

## Brand System

- **Primary Colour:** Cardinal Red `#7B1113`
- **Secondary Colour:** White `#FFFFFF`
- **Typography:** Playfair Display (Google Fonts)
- **Motto:** Towards Eternal Glory
- **Crest:** Eagle / griffin emblem used in navigation and hero sections

## Frontend (React + Vite)

- Responsive pages: Home, About, Academics, Admissions, Campus, Contact, Login
- Tailwind CSS with custom palette and reusable components (navbar, footer, cards)
- Axios-powered forms for admissions, contact, and login API integrations
- Animated counters, virtual tour highlights, gallery placeholders, and CTA buttons
- SEO friendly metadata, default assets (crest, gallery SVGs, map placeholder, curriculum PDF)

### Frontend Setup

```bash
cd EldenHeights/frontend
npm install
npm run dev     # start local development server
npm run build   # generate production build in dist/
```

Set `VITE_API_URL` in `.env` to point to the hosted backend API when deploying.

## Backend (Node.js + Express)

- REST endpoints:
  - `POST /api/admissions` – store admission enquiries in MongoDB (`applications` collection)
  - `POST /api/contact` – relay messages to the school inbox via Nodemailer
  - `GET /api/events` – serve curated list of upcoming school events
  - `POST /api/login` – issue dummy JWT token for EL-NODE integration
- Middleware: body-parser, cors, dotenv, mongoose
- Configurable environment variables for MongoDB and SMTP credentials

### Backend Setup

```bash
cd EldenHeights/backend
npm install
npm run dev     # start with nodemon (requires local MongoDB or Atlas URI)
# or
npm start       # run server.js directly
```

Create a `.env` file with:

```
PORT=4000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secure-jwt-secret
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SCHOOL_INBOX=info@eldenheights.edu
```

## AWS Amplify Deployment

The `amplify.yml` file defines build steps for both the frontend and backend. Configure two Amplify apps or a single multi-app
pipeline pointing to the respective directories. Ensure environment variables are set within Amplify for the backend and
frontend (e.g., `VITE_API_URL`).

## Testing API Endpoints

Use your preferred API client or curl while the backend server is running locally:

```bash
curl -X GET http://localhost:4000/api/events
curl -X POST http://localhost:4000/api/admissions -H "Content-Type: application/json" -d '{"fullName":"Test","email":"test@example.com","phone":"9999999999","gradeApplyingFor":"primary"}'
```

## Ready for AWS Amplify

1. Zip the `EldenHeights/frontend` folder for the Amplify hosting frontend application (output directory: `dist/`).
2. Zip the `EldenHeights/backend` folder for the Amplify backend (Node.js) app.
3. Provide required environment variables in Amplify console for both apps.

Enjoy showcasing the legacy and future of **The Elden Heights School**!
