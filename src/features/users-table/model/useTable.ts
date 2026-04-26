"use client"

import {useRouter} from "next/navigation";
import type {SorterResult, TablePaginationConfig} from "antd/es/table/interface";
import {useUsersTableParams} from "@/features/users-table/model/useUsersTableParams";
import {useDeleteUser} from "@/entities/user/model/useDeleteUser";
import {useUsersQuery} from "@/features/users-table/model/useUsersQuery";

export const useTable = () => {
    const router = useRouter();

    const {page, pageSize, setParams, sortOrder, sortBy, search} = useUsersTableParams();
    const deleteMutation = useDeleteUser();

    const query = useUsersQuery({page, pageSize, sortOrder, sortBy, search});
    const data = query.data;
    const isNoData = !data || query.error || !data.users.length;

    const total = data?.total ?? 0;
    const users = data?.users ?? [];

    const onPaginationChange = (pagination: TablePaginationConfig, sorter: SorterResult) => {
        setParams({
            page: pagination.current,
            pageSize: pagination.pageSize,
            sortOrder: sorter.order as string | undefined,
            sortBy: sorter.field as string | undefined
        });
    }

    const onDeleteRow = (id: number) => {
        deleteMutation.mutate(id);
    };

    const onEditRow = (id: number) => {
        router.push(`/users/${id}`);
    }

    return {
        isLoading: query.isLoading,
        ...(query.error && {error: query.error.message}),
        isNoData,
        data,
        sortBy,
        users,
        sortOrder,
        onDeleteRow,
        onEditRow,
        total,
        page,
        pageSize,
        onPaginationChange,
    }
};