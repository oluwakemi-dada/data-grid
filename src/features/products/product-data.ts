export const products = [
  {
    id: 'P001',
    name: 'Mechanical Keyboard',
    price: 89.99,
    stock: 24,
    category: 'Accessories',
    tags: [
      {
        id: 'TAG001',
        name: 'Wireless',
        color: 'blue',
      },
      {
        id: 'TAG002',
        name: 'RGB',
        color: 'violet',
      },
    ],
    discount: 10,
    supplier: {
      id: 'SUP001',
      name: 'TechSource',
    },
  },
  {
    id: 'P002',
    name: '27" Monitor',
    price: 249.99,
    stock: 8,
    category: 'Displays',
    tags: [
      {
        id: 'TAG003',
        name: '4K',
        color: 'green',
      },
      {
        id: 'TAG004',
        name: 'IPS',
        color: 'orange',
      },
      {
        id: 'TAG005',
        name: 'HDR',
        color: 'red',
      },
    ],
    supplier: {
      id: 'SUP002',
      name: 'Vision Electronics',
    },
  },
  {
    id: 'P003',
    name: 'USB-C Hub',
    price: 39.5,
    stock: 0,
    category: 'Accessories',
    tags: [],
    discount: 15,
    supplier: {
      id: 'SUP001',
      name: 'TechSource',
    },
  },
  {
    id: 'P004',
    name: 'Gaming Mouse',
    price: 59.99,
    stock: 67,
    category: 'Peripherals',
    tags: [
      {
        id: 'TAG006',
        name: 'Ergonomic',
        color: 'cyan',
      },
      {
        id: 'TAG001',
        name: 'Wireless',
        color: 'blue',
      },
    ],
    supplier: {
      id: 'SUP003',
      name: 'GameTech',
    },
  },
  {
    id: 'P005',
    name: 'Laptop Stand',
    price: 29.99,
    stock: 15,
    category: 'Office',
    tags: [
      {
        id: 'TAG007',
        name: 'Aluminium',
        color: 'amber',
      },
      {
        id: 'TAG008',
        name: 'Adjustable',
        color: 'pink',
      },
      {
        id: 'TAG009',
        name: 'Portable',
        color: 'indigo',
      },
    ],
    discount: 5,
    supplier: {
      id: 'SUP004',
      name: 'Office Essentials',
    },
  },
];
