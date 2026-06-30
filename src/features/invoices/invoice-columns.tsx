import { Badge } from '@/components/ui/badge';
import type { Column } from '../data-grid/types';
import type { Invoice } from './invoice-types';

export const invoiceColumns: Column<Invoice>[] = [
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
        <Badge
          className={`px-2 py-0.5 rounded text-xs font-medium ${colors[row.paymentStatus]}`}
        >
          {value}
        </Badge>
      );
    },
  },
  { id: 'method', header: 'Method', accessor: 'paymentMethod', className: '' },
  {
    id: 'totalAmount',
    header: 'Total Amount',
    accessor: 'totalAmount',
    className: 'text-right',
    renderCell: (value) => {
      return <span className='block text-right'>{value}</span>;
    },
  },
];
