const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT || "";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";
const appMode = process.env.NEXT_PUBLIC_APP_MODE || 'dev'

export { baseURL, backendUrl,appMode };
