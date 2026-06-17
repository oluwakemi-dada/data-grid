import { TableCell, TableFooter, TableRow } from '@/components/ui/table';
import DataGrid from './data-grid';
import { columns, invoices, type Invoice } from '@/data';

const DataTable = () => {
  return (
    <DataGrid
      rows={invoices}
      columns={columns}
      caption='A list of your recent invoices.'
      getRowId={(row: Invoice) => row.invoice}
    >
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className='text-right'>$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </DataGrid>
  );
};

export default DataTable;
