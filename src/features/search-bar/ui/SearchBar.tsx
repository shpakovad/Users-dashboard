"use client"

import React, {useEffect, useState} from "react";
import {Button, Input} from "antd";
import {useUsersTableParams} from "@/features/users-table/model/useUsersTableParams";
import styles from "./SerachBar.module.css";


const SearchBar = () => {

    const [value, setValue] = useState('');

    const { setParams } = useUsersTableParams();

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setParams({
                search: value,
                page: 1,
            })
        }, 500)

        return () => clearTimeout(timeout);
    }, [value])

    return <div className={styles.container}>
        <Input
            placeholder="Type user name..."
            onChange={onInputChange}
            style={{marginRight: 20}}
        />
        <Button type="text">Clear search</Button>
    </div>
}

export default SearchBar;