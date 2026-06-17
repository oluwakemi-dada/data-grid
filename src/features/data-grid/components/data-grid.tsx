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

type BaseColumn = {
  id: string;
  header: string;
  className?: string;
};

type AccessorColumn<T> = BaseColumn & {
  accessor: keyof T;
  renderCell?: (row: T) => ReactNode;
};

type RenderColumn<T> = BaseColumn & {
  renderCell: (row: T) => ReactNode;
};

export type Column<T> = AccessorColumn<T> | RenderColumn<T>;

type Props<T> = {
  rows: T[];
  columns: Column<T>[];
  children?: ReactNode;
  caption?: string;
  getRowId: (row: T) => string;
};

const DataGrid = <T extends Record<string, unknown>>({
  rows,
  columns,
  children,
  caption,
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
              if ('accessor' in column) {
                return (
                  <TableCell key={column.id}>
                    {column.renderCell
                      ? column.renderCell(row)
                      : String(row[column.accessor])}
                  </TableCell>
                );
              }

              return (
                <TableCell key={column.id}>{column.renderCell(row)}</TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
      {children}
    </Table>
  );
};

export default DataGrid;
