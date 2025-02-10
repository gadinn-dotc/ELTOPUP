"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useAuthMiddleware(redirectTo: string = "/login") {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (!token) {
            router.push(redirectTo);
        } else {
            setAuthenticated(true);
        }
    }, [router, redirectTo]); // ✅ Added `redirectTo` as a dependency

    return authenticated; // ✅ Return auth status for conditional rendering
}
