"use client"

import {Spin, Empty, Table} from "antd";
import type {SorterResult} from "antd/es/table/interface";
import {getColumns, getDataSource, getEmptyDescription} from "@/features/users-table/model/tableConfig";
import {useTable} from "@/features/users-table/model/useTable";
import styles from "./UsersTable.module.css";


const UsersTable = () => {

    const {
        isLoading,
        isNoData,
        data,
        users,
        sortBy,
        sortOrder,
        onDeleteRow,
        onEditRow,
        total,
        page,
        pageSize,
        onPaginationChange
    } = useTable();


    if (isLoading) {
        return <Spin size="large" description="Loading"/>
    } else if (isNoData) {
        return <Empty description={getEmptyDescription(data)}/>
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