import {User} from "@/entities/user/model/types";

interface UserQuery {
    isFetching: boolean,
    data?: {
        isError?: boolean,
        message?: string,
        users: User[],
        limit: number,
        skip: number,
        total: number
    },
}

export type {UserQuery}

