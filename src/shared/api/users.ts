export const getUsers = async ({page, pageSize}: { page: number, pageSize: number }) => {
    try {
        const skip = (page - 1) * pageSize;
        const response = await fetch(`https://dummyjson.com/users?limit=${pageSize}&skip=${skip}`);
        if (!response.ok) {
            return {isError: true, message: 'No Data Found'};
        }
        return response.json();
    } catch (error) {
        return {isError: true, message: error};
    }
}