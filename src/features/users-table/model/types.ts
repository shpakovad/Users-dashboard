import {User} from "@/entities/user/model/types";


interface UserTableProps {
    isError?: boolean,
    message?: string,
    users: User[],
    limit: number,
    skip: number,
    total: number
}

interface UserQuery {
    isFetching: boolean,
    data?: UserTableProps,
}

interface PaginationProps {
    current: number,
    pageSize: number,
    total: number
}

interface SorterProps {
    column: {
        title: string,
        dataIndex: string,
        key: string,
        defaultSortOrder: string
    },
    order: string,
    field: string,
    columnKey: string
}

interface ParamsTableProps {
    page: number,
    pageSize: number,
    sortOrder: string,
    sortBy: string
}


export type {UserQuery, UserTableProps, PaginationProps, SorterProps, ParamsTableProps}

