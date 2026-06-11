import { TableCell, TableFooter, TableRow } from '@/components/ui/table';
import DataGrid, { type Column } from './data-grid';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

export type Invoices = typeof invoices;
export type Invoice = Invoices[number];

const columns: Column<Invoice>[] = [
  {
    id: 'invoice',
    header: 'Invoice',
    accessor: 'invoice',
    className: 'w-[120px]',
  },
  { id: 'status', header: 'Status', accessor: 'paymentStatus', className: '' },
  { id: 'method', header: 'Method', accessor: 'paymentMethod', className: '' },
  {
    id: 'totalAmount',
    header: 'Total Amount',
    accessor: 'totalAmount',
    className: 'text-right',
  },
];

export type Columns = typeof columns;

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
