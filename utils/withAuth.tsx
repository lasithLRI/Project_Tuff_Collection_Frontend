'use client';

import { useAuthContext } from "@asgardeo/auth-react";
import { Component, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const withAuth = (Component:React.ComponentType)=>{
    return function ProtectedComponent(props:any){

        const { state, signIn,getAccessToken } = useAuthContext();

        const [token, setToken] = useState<string | null>(null);

        useEffect(()=>{
            if (!state.isLoading && !state.isAuthenticated) {
                signIn();
            }

            if (state.isAuthenticated) {
                getAccessToken().then(setToken).catch(console.error);
            }
        },[state.isAuthenticated, state.isLoading]);

        if (state.isLoading || !token) {
            return <div>Loading...</div>;
        }

        if (!state.isAuthenticated) {
            return null; 
        }

        return <Component {...props} />;

    };
}