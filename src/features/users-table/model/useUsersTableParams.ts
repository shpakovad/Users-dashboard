import {useRouter, useSearchParams} from "next/navigation";
import {ParamsTableProps} from "@/features/users-table/model/types";

const useUsersTableParams = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const page = Number(searchParams.get('page') || 1)
    const pageSize = Number(searchParams.get('pageSize') || 10)
    const order = searchParams.get('order') || 'asc';
    const sortBy = searchParams.get('sortBy') || 'bloodGroup';

    const setParams = ({page, pageSize, sortOrder, sortBy}: ParamsTableProps) => {
        const params = new URLSearchParams(searchParams.toString())

        params.set('page', String(page));
        params.set('pageSize', String(pageSize));

        if (!sortOrder || !sortBy) {
            params.delete('order');
            params.delete('sortBy');
        } else {
            const order = sortOrder === 'ascend' ? 'asc' : 'desc';
            params.set('order', order);
            params.set('sortBy', sortBy);
        }

        router.push(`?${params.toString()}`)
    }

    return {
        page,
        pageSize,
        sortOrder: order === 'asc' ? 'ascend' : 'descend',
        sortBy,
        setParams,
    }
}

export {useUsersTableParams}