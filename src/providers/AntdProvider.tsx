"use client";

import {ConfigProvider} from "antd";
import ruRU from "antd/locale/ru_RU";

export const AntdProvider = ({children}: { children: React.ReactNode }) => {
    return <ConfigProvider locale={ruRU}>{children}</ConfigProvider>;
}

export default AntdProvider;
