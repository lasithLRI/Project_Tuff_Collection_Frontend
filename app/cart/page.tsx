
"use client";

import { withAuth } from "@/utils/withAuth";

function Cart(){

    return(
        <h1>Cart Page</h1>
    );
}

export default withAuth(Cart);