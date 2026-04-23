import {User} from "@/entities/user/model/types";


export const mapUser = ({id, firstName, lastName, age, gender, address, company, email, bloodGroup, image}: User) =>
    ({
        id,
        logo: image,
        name: `${firstName} ${lastName}`,
        age,
        gender,
        email,
        address: `${address.city}, ${address.country}`,
        profession: company.title,
        bloodGroup
    })