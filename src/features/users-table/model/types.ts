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

interface Pagination {
    current: number,
    pageSize: number,
    total: number
}

export type {UserQuery, UserTableProps, Pagination}

