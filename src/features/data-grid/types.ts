import type { ReactNode } from 'react';

export type Column<T> = {
  id: string;
  header: string;
  className?: string;
  accessor: keyof T;
  renderCell?: (value: T[keyof T], row: T) => ReactNode;
};
