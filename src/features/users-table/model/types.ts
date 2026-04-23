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

interface ParamsTableProps {
    page?: number,
    pageSize?: number,
    sortOrder?: string,
    sortBy?: string
}


export type {UserQuery, UserTableProps, ParamsTableProps}

