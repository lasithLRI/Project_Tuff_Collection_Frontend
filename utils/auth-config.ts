import { AuthReactConfig } from "@asgardeo/auth-react";
const baseUrl = "https://api.asgardeo.io/t/tuff";

export const authConfig:AuthReactConfig = {
  signInRedirectURL: "http://localhost:3000",
  signOutRedirectURL: "http://localhost:3000/logout",
  clientID: "YOUR_CLIENT_ID",
  baseUrl: baseUrl,
  storage: "webWorker", 

  endpoints: {
    authorizationEndpoint: "/oauth2/authorize",
    tokenEndpoint: "/oauth2/token",
    userinfoEndpoint: "/oauth2/userinfo",
    jwksUri: "/oauth2/jwks",

    revocationEndpoint: "/oauth2/revoke",

    checkSessionIframe: "/oidc/checksession",
    endSessionEndpoint: "/oidc/logout",
    issuer: baseUrl,
  }
};

export default authConfig;