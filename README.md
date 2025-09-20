# RawMind

**RawMind** is a module application that allows users to upload a `.txt` file (less than 4KB) and generate meaningful insights from it. The application is powered by **Gemini AI**, **Next.js**, and **Prisma**.

## Features

- Upload `.txt` files under 4KB
- Generate meaningful data automatically
- Powered by Gemini AI for intelligent processing
- Built with Next.js for a modern frontend experience
- Prisma for database management

## Tech Stack

- **Frontend & Backend:** Next.js
- **Database:** Prisma
- **AI Integration:** Gemini AI

## Authentication

Access to **RawMind** is secured via a developer-provided auth URL. The flow works as follows:

1. The developer provides an auth URL like: https://app/api/v1/auth/iL6zVwow3a5QZ5DKhwy

2. When you visit this URL, the secret provided is verified against the `VERIFYER` key in your `.env` file.

3. If the secret matches, a **JWT token** is issued.

4. Users can then use the app normally with this JWT token.

> ⚠️ Note: You **cannot access the app** without visiting the developer-provided auth URL first. This ensures that the **Gemini AI API key** in the app remains secure.

## Setup & Installation

1. Clone the Repo

2. npm install

3. Setup environment variables at root

DATABASE_URL=<Your Database URL>
GOOGLE_API_KEY=<Your Google AI Developers Key>
JWT_SECRET=<Your JWT Secret Key>
VERIFYER=<Your Verifier Key>

4. npm run dev

## Usage

1. Navigate to the app in your browser.

2. Visit the developer-provided auth URL to obtain a JWT token.

3. After you visit the URL it will be redirected into the homepage

4. You can click -> Get Started -> and click -> Version-Standard

5. There you can upload the file NOTE The file needs to be less than 4kb and it should be a .txt file

6. if you click Save then it will upload and process it with gemini ai and will be redirected to the Standard fomatted page

7. Below the upload section you can see the history of the uploaded docs. By clicking view you can get the Formatted text of the doc

## Design Architecture

The architecture of **RawMind** follows a simple yet secure flow:

1. **JWT Security**:

   - Users are authenticated using JWT tokens.
   - Only authenticated users can access file upload and data endpoints.

2. **File Upload Endpoint (POST)**:

   - Users upload `.txt` files via a POST endpoint.
   - The file is processed by **Gemini AI** to extract meaningful data.
   - Processed data is then stored in the database via Prisma.

3. **Data Display Endpoint (GET)**:
   - The Formatter page requests the processed data from a GET endpoint.
   - The page displays the structured and meaningful data to the user.

**Flow Diagram (simplified)**:
User
│
│ 1. Auth URL → JWT Token
▼
RawMind App
│
│ 2. POST /upload → Gemini AI → Store in DB
▼
Database (Prisma)
│
│ 3. GET /data → Formatter Page
▼
User Interface (Next.js)

## Limitations

- Users can only upload `.txt` files of **less than 4KB**.
- This limitation is intentional to use the **Gemini AI key wisely**, especially under the **free plan**.
