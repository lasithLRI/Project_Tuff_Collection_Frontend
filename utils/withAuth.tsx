

import { useAuthContext } from "@asgardeo/auth-react";
import { Component, useEffect } from "react";
import { useRouter } from "next/navigation";


export const withAuth = (Component:React.ComponentType)=>{
    return function ProtectedComponent(props:any){

        const { state, signIn,getAccessToken } = useAuthContext();
        const router = useRouter();

        useEffect(()=>{
            if (!state.isLoading && !state.isAuthenticated) {
                signIn();
            }
        },[state.isAuthenticated, state.isLoading]);

        useEffect(()=>{
            if (state.isAuthenticated) {
                getAccessToken().then((token)=>console.log(token)).catch(console.error);
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