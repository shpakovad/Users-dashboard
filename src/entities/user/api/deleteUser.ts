export const deleteUser = async (id: number) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const error = await response.json().catch(() => null)

        throw new Error(error?.message || 'Something went wrong...')
    }

    return response.json();
}