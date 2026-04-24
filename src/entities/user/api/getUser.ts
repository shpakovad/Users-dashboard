export const getUser = async (id: string) => {
    try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (!response.ok) {
            return {isError: true, message: 'User not found'};
        }
        return response.json();
    } catch (error) {
        return {isError: true, message: error};
    }
}