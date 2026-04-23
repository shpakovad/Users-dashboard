import {ParamsTableProps} from "@/features/users-table/model/types";

export const getUsers = async ({page, pageSize, sortOrder, sortBy}: ParamsTableProps) => {
    try {
        const skip = page && pageSize ? (page - 1) * pageSize : 0;
        const order = sortOrder === 'ascend' ? 'asc' : 'desc';
        const response = await fetch(`https://dummyjson.com/users?limit=${pageSize}&skip=${skip}&sortBy=${sortBy}&order=${order}`);
        if (!response.ok) {
            return {isError: true, message: 'No Data Found'};
        }
        return response.json();
    } catch (error) {
        return {isError: true, message: error};
    }
}