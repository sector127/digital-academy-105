import { useEffect } from 'react';
import { ProductTable } from '../../components/table';

import productsData from '../../products.json';

export const ShoppingCart = (props) => {
  useEffect(() => {
    console.log('SHOPPING CART');
  });

  return (
    <div className="row">
      <h2>Shopping cart 🛒</h2>
      <div className="col-12">
        <ProductTable />
      </div>
    </div>
  );
};
