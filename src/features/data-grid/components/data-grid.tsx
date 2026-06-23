import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { ReactNode } from 'react';
import type { Column } from '../types';

type Props<T> = {
  rows: T[];
  columns: Column<T>[];
  caption?: ReactNode;
  footer?: ReactNode;
  getRowId: (row: T) => string;
};

const DataGrid = <T extends Record<string, unknown>>({
  rows,
  columns,
  footer,
  getRowId,
}: Props<T>) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.id} className={column.className}>
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={getRowId(row)}>
            {columns.map((column) => {
              const value = row[column.accessor];

              return (
                <TableCell key={column.id}>
                  {column.renderCell
                    ? column.renderCell(value, row)
                    : String(value)}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
      {footer && footer}
    </Table>
  );
};

export default DataGrid;
