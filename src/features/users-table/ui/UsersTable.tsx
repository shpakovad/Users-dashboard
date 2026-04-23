"use client"

import {useEffect, useState} from "react";
import {Spin, Empty, Table} from "antd";
import type {SorterResult, TablePaginationConfig} from "antd/es/table/interface";
import {useUsersQuery} from "@/features/users-table/model/useUsersQuery";
import {UserQuery} from "@/features/users-table/model/types";
import {getColumns, getDataSource, getEmptyDescription} from "@/features/users-table/model/tableConfig";
import {useUsersTableParams} from "@/features/users-table/model/useUsersTableParams";
import {useDeleteUser} from "@/entities/user/model/useDeleteUser";
import styles from "./UsersTable.module.css";


const UsersTable = () => {

    const {page, pageSize, setParams, sortOrder, sortBy} = useUsersTableParams();
    const deleteMutation = useDeleteUser();

    const [total, setTotal] = useState(0);
    const [deletedId, setDeletedId] = useState<number | null>(null);

    const query: UserQuery = useUsersQuery({page, pageSize, sortOrder, sortBy});

    const data = query?.data;

    const isNoData = !data || data.isError || !data.users.length;

    const onPaginationChange = (pagination: TablePaginationConfig, sorter: SorterResult) => {
        setParams({
            page: pagination.current,
            pageSize: pagination.pageSize,
            sortOrder: sorter.order as string | undefined,
            sortBy: sorter.field as string | undefined
        });
    }

    const onDeleteRow = (id: number) => {
        deleteMutation.mutate(id)
    };

    useEffect(() => {
        if (!isNoData) {
            setTotal(data.total)
        }
    }, [isNoData])


    return (<div className={styles.container}>
        {
            query.isFetching
                ? <Spin size="large" description="Loading" fullscreen/>
                : isNoData
                    ? <Empty description={getEmptyDescription(query?.data)}/>
                    : <div className={styles.tableContainer}>
                        <Table
                            columns={getColumns(data.users, sortBy, sortOrder, onDeleteRow)}
                            dataSource={getDataSource(data.users)}
                            scroll={{y: 'calc( 100vh - 60px )', x: '90vw'}}
                            pagination={{
                                current: page,
                                pageSize,
                                total
                            }}
                            onChange={(pagination, filters, sorter) =>
                                onPaginationChange(pagination, sorter as SorterResult)}
                        />
                    </div>
        }
    </div>)

}

export default UsersTable;