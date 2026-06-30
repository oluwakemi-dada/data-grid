export type TagColor =
  | 'blue'
  | 'violet'
  | 'green'
  | 'orange'
  | 'red'
  | 'cyan'
  | 'amber'
  | 'pink'
  | 'indigo';

type Tag = {
  id: string;
  name: string;
  color: TagColor;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  tags: Tag[];
  discount?: number;
  supplier: {
    id: string;
    name: string;
  };
};
