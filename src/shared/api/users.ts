import {ParamsTableProps} from "@/features/users-table/model/types";

export const getUsers = async ({page, pageSize, sortOrder, sortBy,search}: ParamsTableProps) => {
    try {
        const skip = page && pageSize ? (page - 1) * pageSize : 0;
        const order = sortOrder === 'ascend' ? 'asc' : 'desc';
        const searchQuery = search && search.length>0 ? `/search?q=${search}` : '';

        const baseUrl= searchQuery
        ? `https://dummyjson.com/users/search?q=${search}`
            : `https://dummyjson.com/users?limit=${pageSize}&skip=${skip}&sortBy=${sortBy}&order=${order}`

        const response = await fetch(baseUrl);
        if (!response.ok) {
            return {isError: true, message: 'No Data Found'};
        }
        return response.json();
    } catch (error) {
        return {isError: true, message: error};
    }
}