import type { ReactNode } from 'react';

type ColumnDef<T, K extends keyof T> = {
  id: string;
  header: string;
  className?: string;
  accessor: K;
  renderCell?: (value: T[K], row: T) => ReactNode;
};

type ColumnByKey<T> = {
  [K in keyof T]: ColumnDef<T, K>;
};

export type Column<T> = ColumnByKey<T>[keyof ColumnByKey<T>];
