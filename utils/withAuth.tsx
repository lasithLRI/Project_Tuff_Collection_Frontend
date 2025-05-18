

import { useAuthContext } from "@asgardeo/auth-react";
import { Component, useEffect } from "react";
import { useRouter } from "next/navigation";

export const withAuth = (Component:React.ComponentType)=>{
    return function ProtectedComponent(props:any){

        const { state, signIn } = useAuthContext();
        const router = useRouter();

        useEffect(()=>{
            if (!state.isLoading && !state.isAuthenticated) {
                signIn();
            }
        },[state.isAuthenticated, state.isLoading]);

        if (state.isLoading) {
            return <div>Loading...</div>;
        }

        if (!state.isAuthenticated) {
            return null; 
        }

        return <Component {...props} />;

    };
}