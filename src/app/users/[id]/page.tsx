"use client"

import {Avatar, Button, Card, Descriptions, Empty, Spin, Tooltip} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useParams, useRouter} from "next/navigation";
import {useUserQuery} from "@/entities/user/model/useUserQuery";
import {getEmptyDescription} from "@/features/users-table/model/tableConfig";
import styles from "./styles.module.css";

const UserPage = () => {

    const router = useRouter();
    const params = useParams();

    const id = params.id
        ? Array.isArray(params.id)
            ? params.id[0]
            : params.id
        : null;

    const query = id ? useUserQuery(id) : null;

    const isNoData = !query?.data || query.data.isError || !id;

    if (query?.isFetching) {
        return <Spin size="large" description="Loading" fullscreen/>
    } else if (isNoData) {
        return <Empty description={getEmptyDescription(query?.data)}/>
    }

    const userData = query.data;
    const {
        firstName, lastName, age, address: {city, country}, email, bloodGroup, company: {title},
        eyeColor, gender, height, image, phone, weight
    } = userData;

    return (<div className={styles.cardContainer}><Card
            classNames={{
                root: styles.card
            }}
            title={
                <div className={styles.title}>
                    <Tooltip title="Go back">
                        <Button icon={<ArrowLeftOutlined/>} onClick={() => router.back()}/>
                    </Tooltip>
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
