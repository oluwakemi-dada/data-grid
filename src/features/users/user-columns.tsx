import { Badge } from '@/components/ui/badge';
import type { Column } from '../data-grid/types';
import type { User } from './user-types';

export const userColumns: Column<User>[] = [
  {
    id: 'name',
    header: 'Name',
    accessor: 'name',
  },
  {
    id: 'email',
    header: 'Email',
    accessor: 'email',
  },
  {
    id: 'role',
    header: 'Role',
    accessor: 'role',
    renderCell: (value, row) => {
      const colors: Record<string, string> = {
        Admin: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
        Editor: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
        Viewer: 'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20',
      };

      return (
        <Badge
          className={`px-2 py-0.5 rounded text-xs font-medium ${colors[row.role]}`}
        >
          {value}
        </Badge>
      );
    },
  },
  {
    id: 'lastlogin',
    header: 'Last Login',
    accessor: 'lastLogin',
  },
];
