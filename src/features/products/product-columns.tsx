import { Badge } from '@/components/ui/badge';
import type { Column } from '../data-grid/types';
import type { Product, TagColor } from './product-types';

const tagColors = {
  blue: 'bg-blue-100 text-blue-800',
  violet: 'bg-violet-100 text-violet-800',
  green: 'bg-green-100 text-green-800',
  orange: 'bg-orange-100 text-orange-800',
  red: 'bg-red-100 text-red-800',
  cyan: 'bg-cyan-100 text-cyan-800',
  amber: 'bg-amber-100 text-amber-800',
  pink: 'bg-pink-100 text-pink-800',
  indigo: 'bg-indigo-100 text-indigo-800',
} satisfies Record<TagColor, string>;

export const productColumns: Column<Product>[] = [
  { id: 'name', header: 'Name', accessor: 'name' },
  { id: 'price', header: 'Price', accessor: 'price' },
  { id: 'stock', header: 'Stock', accessor: 'stock' },
  { id: 'category', header: 'Category', accessor: 'category' },
  {
    id: 'tags',
    header: 'Tags',
    accessor: 'tags',
    renderCell: (value) => {
      return (
        <div className='flex flex-wrap gap-2'>
          {value.length === 0
            ? '-'
            : value.map((tag) => (
                <Badge key={tag.id} className={tagColors[tag.color]}>
                  {tag.name}
                </Badge>
              ))}
        </div>
      );
    },
  },
  { id: 'discount', header: 'Discount', accessor: 'discount' },
  {
    id: 'supplier',
    header: 'Supplier',
    accessor: 'supplier',
    renderCell: (value) => {
      return <span>{value.name}</span>;
    },
  },
];
