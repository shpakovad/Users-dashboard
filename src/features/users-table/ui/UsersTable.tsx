"use client"

import {useEffect, useState} from "react";
import {Spin, Empty, Table} from "antd";
import {useUsersQuery} from "@/features/users-table/model/useUsersQuery";
import {Pagination, UserQuery} from "@/features/users-table/model/types";
import {getColumns, getDataSource, getEmptyDescription} from "@/features/users-table/model/tableConfig";
import {useUsersTableParams} from "@/features/users-table/model/useUsersTableParams";
import styles from "./UsersTable.module.css";


const UsersTable = () => {

    const {page, pageSize, setParams} = useUsersTableParams();

    const [total, setTotal] = useState(0);

    const query: UserQuery = useUsersQuery({page, pageSize});

    const data = query?.data;

    const isNoData = !data || data.isError || !data.users.length;

    const onPaginationChange = (pagination: Pagination) => {
        setParams(pagination.current, pagination.pageSize);
    }

    useEffect(() => {
        if (!isNoData) {
            setTotal(data.total)
        }
    }, [isNoData])


    return (<div className={styles.container}>
        {
            query.isFetching
                ? <Spin size="large" description="Loading"/>
                : isNoData
                    ? <Empty description={getEmptyDescription(query?.data)}/>
                    : <div>
                        <Table
                            columns={getColumns(data.users)}
                            dataSource={getDataSource(data.users)}
                            pagination={{
                                current: page,
                                pageSize,
                                total
                            }}
                            onChange={(pagination) => onPaginationChange(pagination as Pagination)}/>
                    </div>
        }
    </div>)

}

export default UsersTable;