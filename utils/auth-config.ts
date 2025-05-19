console.log("🔍 ASGARDEO CONFIG VALIDATION:");
console.log("✅ Client ID:", process.env.NEXT_PUBLIC_ASGARDEO_CLIENT_ID);
console.log("✅ Base URL:", process.env.NEXT_PUBLIC_ASGARDEO_BASE_URL);
console.log("✅ Redirect URI:", process.env.NEXT_PUBLIC_ASGARDEO_REDIRECT_URI);
console.log("✅ Logout Redirect URI:", process.env.NEXT_PUBLIC_ASGARDEO_LOGOUT_REDIRECT_URI);

const authConfig = {
  signInRedirectURL: process.env.NEXT_PUBLIC_ASGARDEO_REDIRECT_URI!,
  signOutRedirectURL: process.env.NEXT_PUBLIC_ASGARDEO_LOGOUT_REDIRECT_URI!,
  clientID: process.env.NEXT_PUBLIC_ASGARDEO_CLIENT_ID!,
  baseUrl: process.env.NEXT_PUBLIC_ASGARDEO_BASE_URL!
};

export default authConfig;