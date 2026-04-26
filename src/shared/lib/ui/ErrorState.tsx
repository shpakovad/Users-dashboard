"use client"

import React from "react";
import {Empty} from "antd";
import GoMainButton from "@/shared/lib/ui/GoMainButton";

interface ErrorStateProps {
    showGoBack?: boolean;
    message?: string;
}

const ErrorState = ({showGoBack, message}: ErrorStateProps) => {

    return (
        <div>
            {
                showGoBack && <GoMainButton/>
            }
            <Empty description={message || "No Data Found"}/>
        </div>
    )
}

export default ErrorState;