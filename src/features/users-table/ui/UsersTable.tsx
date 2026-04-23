"use client"

import { Spin, Empty } from "antd";
import { useUsersQuery } from "@/features/users-table/model/useUsersQuery";
import { UserQuery } from "@/features/users-table/model/types";
import styles from "./UsersTable.module.css";


const UsersTable = () => {
    const query: UserQuery = useUsersQuery();

    return (<div className={styles.container}>
        {
            query.isFetching
                ? <Spin size="large" description="Loading"/>
                : query?.data?.isError
                    ? <Empty description={query.data.message}/>
                    : <div>table here</div>
        }
    </div>)

}

export default UsersTable;