"use client";

import {Suspense} from "react";
import UsersTable from "@/features/users-table/ui/UsersTable";
import SearchBar from "@/features/search-bar/ui/SearchBar";


const Home = () => {

    return <Suspense>
        <SearchBar/>
        <UsersTable/>
    </Suspense>;
}

export default Home;
