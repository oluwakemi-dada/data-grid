import { TableCell, TableFooter, TableRow } from '@/components/ui/table';
import DataGrid from '../data-grid/components/data-grid';
import { invoices } from './invoice-data';
import { invoiceColumns, type Invoice } from './invoice-columns';

const InvoiceTable = () => {
  return (
    <DataGrid
      rows={invoices}
      columns={invoiceColumns}
      getRowId={(row: Invoice) => row.invoice}
      footer={
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className='text-right'>$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      }
    />
  );
};

export default InvoiceTable;
