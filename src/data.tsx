import type { Column } from './features/data-grid/components/data-grid';

export const invoices = [
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

export const columns: Column<Invoice>[] = [
  {
    id: 'invoice',
    header: 'Invoice',
    accessor: 'invoice',
    className: 'w-[120px]',
  },
  {
    id: 'status',
    header: 'Status',
    accessor: 'paymentStatus',
    renderCell: (value, row) => {
      const colors: Record<string, string> = {
        Paid: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
        Pending: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
        Unpaid: 'bg-red-500/10 text-red-400 border border-red-500/20',
      };
      return (
        <span
          className={`px-2 py-0.5 rounded text-xs font-medium ${colors[row.paymentStatus] ?? ''}`}
        >
          {value}
        </span>
      );
    },
  },
  { id: 'method', header: 'Method', accessor: 'paymentMethod', className: '' },
  {
    id: 'totalAmount',
    header: 'Total Amount',
    accessor: 'totalAmount',
    className: 'text-right',
    renderCell: (value, row) => {
      return <span className='block text-right'>{value}</span>;
    },
  },
];

export type Columns = typeof columns;
