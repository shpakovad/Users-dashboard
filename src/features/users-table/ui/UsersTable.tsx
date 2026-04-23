"use client"

import {useEffect, useState} from "react";
import {Spin, Empty, Table} from "antd";
import type {FilterValue, SorterResult, TablePaginationConfig} from "antd/es/table/interface";
import {useUsersQuery} from "@/features/users-table/model/useUsersQuery";
import {UserQuery} from "@/features/users-table/model/types";
import {getColumns, getDataSource, getEmptyDescription} from "@/features/users-table/model/tableConfig";
import {useUsersTableParams} from "@/features/users-table/model/useUsersTableParams";
import {User} from "@/entities/user/model/types";
import styles from "./UsersTable.module.css";


const UsersTable = () => {

    const {page, pageSize, setParams, sortOrder, sortBy} = useUsersTableParams();

    const [total, setTotal] = useState(0);

    const query: UserQuery = useUsersQuery({page, pageSize, sortOrder, sortBy});

    const data = query?.data;

    const isNoData = !data || data.isError || !data.users.length;

    const onPaginationChange = (pagination: TablePaginationConfig, _filters: Record<string, FilterValue | null>, sorter: SorterResult<User> | SorterResult<User>[]) => {
        const s = Array.isArray(sorter) ? sorter[0] : sorter;
        setParams({
            page: pagination.current,
            pageSize: pagination.pageSize,
            sortOrder: s.order as string | undefined,
            sortBy: s.field as string | undefined
        });
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
                            columns={getColumns(data.users, sortBy,sortOrder)}
                            dataSource={getDataSource(data.users)}
                            pagination={{
                                current: page,
                                pageSize,
                                total
                            }}
                            onChange={onPaginationChange}
                        />
                    </div>
        }
    </div>)

}

export default UsersTable;