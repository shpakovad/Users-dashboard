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

export type {UserQuery, UserTableProps}

