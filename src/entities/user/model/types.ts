type User = {
    id: number;
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    gender: string,
    address: {
        country: string,
        city: string,
    }
    company: {
        title: string
    },
    bloodGroup: string
}

export type {User}