import {useRouter, useSearchParams} from "next/navigation";

const useUsersTableParams = () => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const page = Number(searchParams.get('page') || 1)
    const pageSize = Number(searchParams.get('pageSize') || 10)

    const setParams = (page: number, pageSize: number) => {
        const params = new URLSearchParams(searchParams.toString())

        params.set('page', String(page))
        params.set('pageSize', String(pageSize))

        router.push(`?${params.toString()}`)
    }

    return {
        page,
        pageSize,
        setParams,
    }
}

export {useUsersTableParams}