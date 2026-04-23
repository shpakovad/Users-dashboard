import { User } from "@/entities/user/model/types";


export const mapUser = ({id, firstName, lastName, age, gender, address, company, email, bloodGroup}: User) =>
    ({
        id,
        name: `${firstName} ${lastName}`,
        age,
        gender,
        email,
        address: `${address.city}, ${address.country}`,
        profession: company.title,
        'blood group': bloodGroup
    })