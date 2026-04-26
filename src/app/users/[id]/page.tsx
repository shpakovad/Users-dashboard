"use client"

import {Avatar, Card, Descriptions, Spin} from "antd";
import {useParams} from "next/navigation";
import {useUserQuery} from "@/entities/user/model/useUserQuery";
import ErrorState from "@/shared/lib/ui/ErrorState";
import GoMainButton from "@/shared/lib/ui/GoMainButton";
import styles from "./styles.module.css";

const UserPage = () => {

    const params = useParams();

    const id = params.id
        ? Array.isArray(params.id)
            ? params.id[0]
            : params.id
        : null;

    const query = id ? useUserQuery(id) : null;
    const userData = query?.data;
    const isNoData = !userData || query.error || !id;

    if (query?.isLoading) {
        return <Spin size="large" description="Loading"/>
    } else if (isNoData) {
        return <ErrorState message={query?.error?.message} showGoBack={true}/>
    }

    const {
        firstName, lastName, age, address: {city = '', country = ''}, email, bloodGroup, company: {title = ''},
        eyeColor, gender, height, image, phone, weight
    } = userData;

    return (
        <div className={styles.cardContainer}>
            <GoMainButton/>
            <Card
                classNames={{
                    root: styles.card
                }}
                title={
                    <div className={styles.title}>
                        <Avatar src={image} size={64} alt="user-logo" style={{padding: 6}}/>
                        <span>{firstName} {lastName}</span>
                    </div>
                }
            >
                <Descriptions column={1} bordered>
                    <Descriptions.Item label="Age">{age}</Descriptions.Item>
                    <Descriptions.Item label="Gender">{gender}</Descriptions.Item>
                    <Descriptions.Item label="Phone">{phone}</Descriptions.Item>
                    <Descriptions.Item label="Email"><a>{email}</a></Descriptions.Item>
                    <Descriptions.Item label="Address">{city}, {country}</Descriptions.Item>
                    <Descriptions.Item label="Profession">{title}</Descriptions.Item>
                    <Descriptions.Item label="Blood Group">{bloodGroup}</Descriptions.Item>
                    <Descriptions.Item label="Weight">{weight}</Descriptions.Item>
                    <Descriptions.Item label="Height">{height}</Descriptions.Item>
                    <Descriptions.Item label="Eye Color">{eyeColor}</Descriptions.Item>
                </Descriptions>
            </Card>
        </div>
    );
};

export default UserPage;
