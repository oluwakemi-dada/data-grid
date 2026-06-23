import DataGrid from '../data-grid/components/data-grid';
import { userColumns, type User } from './user-columns';
import { users } from './user-data';

const UserTable = () => {
  return (
    <DataGrid
      rows={users}
      columns={userColumns}
      getRowId={(row: User) => row.id}
    />
  );
};

export default UserTable;
