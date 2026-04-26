import {ParamsTableProps} from "@/features/users-table/model/types";

export const getUsers = async ({page, pageSize, sortOrder, sortBy, search}: ParamsTableProps) => {

    const skip = page && pageSize ? (page - 1) * pageSize : 0;
    const order = sortOrder === 'ascend' ? 'asc' : 'desc';
    const searchQuery = search && search.length > 0 ? `/search?q=${search}` : '';

    const baseUrl = searchQuery
        ? `https://dummyjson.com/users/search?q=${search}`
        : `https://dummyjson.com/users?limit=${pageSize}&skip=${skip}&sortBy=${sortBy}&order=${order}`;

    const response = await fetch(baseUrl);
    if (!response.ok) {
        const error = await response.json().catch(() => null)

        throw new Error(error?.message || 'No Data Found')
    }

    return response.json()
}