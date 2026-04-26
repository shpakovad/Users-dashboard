"use client"

import React, {useEffect, useState} from "react";
import {Button, Input} from "antd";
import {useUsersTableParams} from "@/features/users-table/model/useUsersTableParams";
import {useSearchParams} from "next/navigation";
import styles from "./SerachBar.module.css";


const SearchBar = () => {

    const searchParams = useSearchParams();
    const initialValue = searchParams.get('search') || '';
    const {setParams} = useUsersTableParams();

    const [value, setValue] = useState(initialValue);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onClearSearch = () => {
        if(value.length === 0) return;
        setValue('');
        setParams({
            search: '',
            page: 1,
        })
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
            value={value}
            placeholder="Type user name..."
            onChange={onInputChange}
            style={{marginRight: 20, width: 200}}
        />
        <Button type="text" onClick={onClearSearch}>Clear search</Button>
    </div>
}

export default SearchBar;