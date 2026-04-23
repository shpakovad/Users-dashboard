import {User} from "@/entities/user/model/types";
import {UserTableProps} from "@/features/users-table/model/types";
import {toTitleCase} from "@/shared/lib/utils";
import {ColumnsType} from "antd/es/table";

type SortedProps = {
    age: number
    gender: string
    bloodGroup: string
}

const getColumns = (data: User[], sortBy: string): ColumnsType<User> => {
    const columnNames = Object.keys(data[0]).filter(key => key !== 'id');
    return columnNames.map(column => ({
        title: toTitleCase(column),
        dataIndex: column,
        key: column,
        ...(column === 'email' && {
            render: (text: string) => <a>{text}</a>
        }),
        ...(column === 'logo' && {
            render: (text: string) => <img src={text} alt="user-logo" width={30} height={30}/>
        }),
        ...((column === 'age' || column === 'gender' || column === 'bloodGroup') &&
            {
                sorter: (a: SortedProps, b: SortedProps) => {
                    const valA = a[column as keyof SortedProps]
                    const valB = b[column as keyof SortedProps]

                    if (typeof valA === 'number' && typeof valB === 'number') {
                        return valA - valB
                    }

                    return String(valA).localeCompare(String(valB))
                }
            })
    }))
}

const getDataSource = (data: User[]) =>
    data.map(user => ({
        ...user,
        key: user.id
    }));

const getEmptyDescription = (dataQuery?: UserTableProps) =>
    dataQuery?.message || 'No data';

export {getColumns, getEmptyDescription, getDataSource};