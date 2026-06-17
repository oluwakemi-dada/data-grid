import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { ReactNode } from 'react';

export type Column<T> = {
  id: string;
  header: string;
  className?: string;
  accessor: keyof T;
  renderCell?: (value: T[keyof T], row: T) => ReactNode;
};

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
  caption,
  footer,
  getRowId,
}: Props<T>) => {
  return (
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}
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
