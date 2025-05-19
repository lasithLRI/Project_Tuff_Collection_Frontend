'use client';


import authConfig from "@/utils/auth-config";
import dynamic from "next/dynamic";

const AuthProvider = dynamic(
  () => import('@asgardeo/auth-react').then(mod => mod.AuthProvider),
  { ssr: false }
);

export default function ClientAuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {

  console.log("🔐 AuthProvider Config:", authConfig);

  return (
    <AuthProvider config={authConfig}>
      {children}
    </AuthProvider>
  );
}