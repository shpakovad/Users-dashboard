import {User} from "@/entities/user/model/types";
import {UserTableProps} from "@/features/users-table/model/types";
import {toTitleCase} from "@/shared/lib/utils";


const getColumns = (data: User[]) => {
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