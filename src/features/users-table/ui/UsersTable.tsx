"use client"

import {Spin, Empty, Table} from "antd";
import {useUsersQuery} from "@/features/users-table/model/useUsersQuery";
import {UserQuery} from "@/features/users-table/model/types";
import {getColumns, getDataSource, getEmptyDescription} from "@/features/users-table/model/tableConfig";
import styles from "./UsersTable.module.css";


const UsersTable = () => {

    const query: UserQuery = useUsersQuery();
    const data = query?.data;
    const isNoData = !data || data.isError || !data.users.length;


    return (<div className={styles.container}>
        {
            query.isFetching
                ? <Spin size="large" description="Loading"/>
                : isNoData
                    ? <Empty description={getEmptyDescription(query?.data)}/>
                    : <div>
                        <Table columns={getColumns(data.users)} dataSource={getDataSource(data.users)}/>
                    </div>
        }
    </div>)

}

export default UsersTable;