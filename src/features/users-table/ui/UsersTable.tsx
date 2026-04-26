"use client"

import {Spin, Table} from "antd";
import type {SorterResult} from "antd/es/table/interface";
import {getColumns, getDataSource} from "@/features/users-table/model/tableConfig";
import {useTable} from "@/features/users-table/model/useTable";
import ErrorState from "@/shared/lib/ui/ErrorState";
import styles from "./UsersTable.module.css";


const UsersTable = () => {

    const {
        isLoading,
        isNoData,
        users,
        sortBy,
        sortOrder,
        onDeleteRow,
        onEditRow,
        total,
        page,
        pageSize,
        onPaginationChange,
        error
    } = useTable();


    if (isLoading) {
        return <Spin size="large" description="Loading"/>
    } else if (isNoData) {
        return <ErrorState message={error}/>
    }

    return (<div className={styles.container}>
        <div className={styles.tableContainer}>
            <Table
                columns={getColumns({data: users, sortBy, sortOrder, onDeleteRow, onEditRow})}
                dataSource={getDataSource(users)}
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
    </div>)

}

export default UsersTable;