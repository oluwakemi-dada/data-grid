import DataGrid from '../data-grid/components/data-grid';
import { employeeColumns } from './employee-columns';
import { employees } from './employee-data';

const EmployeeTable = () => {
  return (
    <DataGrid
      rows={employees}
      columns={employeeColumns}
      getRowId={(row) => row.id}
    />
  );
};

export default EmployeeTable;
