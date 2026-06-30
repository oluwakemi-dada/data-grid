import DataGrid from '../data-grid/components/data-grid';
import { productColumns } from './product-columns';
import { products } from './product-data';

const ProductTable = () => {
  return (
    <DataGrid
      rows={products}
      columns={productColumns}
      getRowId={(row) => row.id}
    />
  );
};

export default ProductTable;
