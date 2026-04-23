export async function getUsers() {
    try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
            return {isError: true, message: 'No Data Found'};
        }
        return response.json();
    } catch (error) {
        return {isError: true, message: error};
    }
}