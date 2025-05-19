const baseUrl = process.env.NEXT_PUBLIC_ASGARDEO_BASE_URL!;

const authConfig = {
  signInRedirectURL: process.env.NEXT_PUBLIC_ASGARDEO_REDIRECT_URI!,
  signOutRedirectURL: process.env.NEXT_PUBLIC_ASGARDEO_LOGOUT_REDIRECT_URI!,
  clientID: process.env.NEXT_PUBLIC_ASGARDEO_CLIENT_ID!,
  baseUrl: process.env.NEXT_PUBLIC_ASGARDEO_BASE_URL!,

  endpoints: {
    authorizationEndpoint: "/oauth2/authorize",
    tokenEndpoint: "/oauth2/token",
    userinfoEndpoint: "/oauth2/userinfo",
    jwksUri: "/oauth2/jwks",
    logoutEndpoint: "/oidc/logout",
    revocationEndpoint: "/oauth2/revoke",
    wellKnownEndpoint: "/oauth2/oidcdiscovery",
    checkSessionIframe: "/oidc/checksession",
    endSessionEndpoint: "/oidc/logout",
    issuer: baseUrl,
  }
};

export default authConfig;