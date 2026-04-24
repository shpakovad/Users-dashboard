"use client";

import {Suspense} from "react";
import UsersTable from "@/features/users-table/ui/UsersTable";

const Home = () => {
    return <Suspense>
        <UsersTable/>
    </Suspense>;
}

export default Home;
