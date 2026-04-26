export const getUser = async (id: string) => {

    const response = await fetch(`https://dummyjson.com/users/${id}`);
    if (!response.ok) {
        const error = await response.json().catch(() => null)

        throw new Error(error?.message || "User doesn't found")
    }

    return response.json();

}