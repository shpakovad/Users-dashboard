import React from "react";
import {Popconfirm} from "antd";
import {User} from "@/entities/user/model/types";
import {UserTableProps} from "@/features/users-table/model/types";
import {toTitleCase} from "@/shared/lib/utils";

const getColumns: (data: User[], sortBy: string, sortOrder: string, onDeleteRow: (id: number) => void) => ({
    title: string | undefined;
    dataIndex: string;
    key: string
} | {
    title: string;
    dataIndex: string;
    render: (_: any, record: { id: number }) => React.JSX.Element
})[] = (data: User[], sortBy: string, sortOrder: string, onDeleteRow: (id: number) => void) => {
    const columnNames = Object.keys(data[0]).filter(key => key !== 'id');
    const columns = columnNames.map(column => ({
        title: toTitleCase(column),
        dataIndex: column,
        key: column,
        ...(column === 'email' && {
            render: (text: string) => <a>{text}</a>
        }),
        ...(column === 'logo' && {
            render: (text: string) => <img src={text} alt="user-logo" width={30} height={30}/>
        }),
        ...((column === 'age' || column === 'gender' || column === 'bloodGroup') &&
            {
                sorter: true,
                sortOrder: sortBy === column ? sortOrder : null,
            })
    }))

    return [
        ...columns,
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_: any, record: { id: number }) => {
                console.log(record)
                return <Popconfirm title="Sure to delete?" onConfirm={() => onDeleteRow(record.id)}>
                    <a>Delete</a>
                </Popconfirm>
            }
        }
    ]
}

const getDataSource = (data: User[]) =>
    data.map(user => ({
        ...user,
        key: user.id
    }));

const getEmptyDescription = (dataQuery?: UserTableProps) =>
    dataQuery?.message || 'No data found';

export {getColumns, getEmptyDescription, getDataSource};