export const getUsers = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users?limit=100');
        if (!response.ok) {
            return {isError: true, message: 'No Data Found'};
        }
        return response.json();
    } catch (error) {
        return {isError: true, message: error};
    }
}