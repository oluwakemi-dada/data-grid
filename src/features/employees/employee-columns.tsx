import { Badge } from '@/components/ui/badge';
import type { Column } from '../data-grid/types';
import type { Employee } from './employee-types';

export const employeeColumns: Column<Employee>[] = [
  { id: 'name', header: 'Name', accessor: 'name' },
  {
    id: 'department',
    header: 'Department',
    accessor: 'department',
    renderCell: (value) => {
      return <span>{value.name}</span>;
    },
  },

  {
    id: 'status',
    header: 'Status',
    accessor: 'isActive',
    renderCell: (value, row) => {
      const colors: Record<string, string> = {
        true: 'bg-emerald-950 text-emerald-300 border border-emerald-900',
        false: 'bg-zinc-800 text-zinc-400 border border-zinc-700',
      };
      return (
        <Badge
          className={`px-2 py-0.5 rounded text-xs font-medium ${colors[String(row.isActive)]}`}
        >
          {value ? 'Active' : 'Inactive'}
        </Badge>
      );
    },
  },
  {
    id: 'salary',
    header: 'Salary',
    accessor: 'salary',
    className: 'text-right',
    renderCell: (value) => {
      return <span className='block text-right'>${value}</span>;
    },
  },
];
