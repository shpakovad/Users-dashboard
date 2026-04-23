export const deleteUser = async (id: number) => {
    try {

        const response = await fetch(`https://dummyjson.com/users/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            return {isError: true, message: 'Something went wrong...'};
        }
        return response.json();
    } catch (error) {
        return {isError: true, message: error};
    }
}