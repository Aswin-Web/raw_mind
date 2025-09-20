export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
export const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "supersecret");
export const VERIFYER = process.env.VERIFYER;
