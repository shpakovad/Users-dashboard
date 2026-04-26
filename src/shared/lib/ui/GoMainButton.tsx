"use client"

import React from "react";
import {useRouter} from "next/navigation";
import {Button} from "antd";

const GoMainButton = () =>
{
    const router = useRouter();

    return <Button onClick={() => router.push('/')}>
        Go to Main
    </Button>
}

export default GoMainButton;
