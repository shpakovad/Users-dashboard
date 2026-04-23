"use client"

import {useEffect, useState} from "react";
import {Spin, Empty, Table, TablePaginationConfig} from "antd";
import {useUsersQuery} from "@/features/users-table/model/useUsersQuery";
import {PaginationProps, ParamsTableProps, SorterProps, UserQuery} from "@/features/users-table/model/types";
import {getColumns, getDataSource, getEmptyDescription} from "@/features/users-table/model/tableConfig";
import {useUsersTableParams} from "@/features/users-table/model/useUsersTableParams";
import styles from "./UsersTable.module.css";


const UsersTable = () => {

    const {page, pageSize, setParams, sortOrder, sortBy} = useUsersTableParams();

    const [total, setTotal] = useState(0);

    const query: UserQuery = useUsersQuery({page, pageSize, sortOrder, sortBy});

    const data = query?.data;

    const isNoData = !data || data.isError || !data.users.length;

    const onPaginationChange = (pagination: PaginationProps, sorter: SorterProps) => {
        setParams({
            page: pagination.current,
            pageSize: pagination.pageSize,
            sortOrder: sorter.order,
            sortBy: sorter.field
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
                            columns={getColumns(data.users, sortBy)}
                            dataSource={getDataSource(data.users)}
                            pagination={{
                                current: page,
                                pageSize,
                                total
                            }}
                            onChange={(pagination, filters, sorter) => onPaginationChange(pagination, sorter)}
                        />
                    </div>
        }
    </div>)

}

export default UsersTable;