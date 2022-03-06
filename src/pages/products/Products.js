import { useState } from 'react';
// import { debounce } from 'lodash';

import { ProductItem } from './ProductIitem';
import { Button, Textinput } from '../../atoms';
import productsData from '../../products.json';

export const Products = () => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filterTerm, setFilterTerm] = useState('');
  // const filterCategory = () => {
  //   const uniqueCat = new Set(productsData.map((product) => product.category));
  //   return uniqueCat;
  // }
  const renderProducts = () => {
    let data = productsData.slice();
    if (inStockOnly) {
      data = data.filter((item) => item.inStock);
    }

    if (filterTerm && filterTerm.length > 2) {
      data = data.filter((el) => el.name.includes(filterTerm));
    }

    return data.map((item, index) => {
      return <ProductItem product={item} key={index} />;
    });
  };

  const handleFilterChange = ({ target }) => {
    setFilterTerm(target.value);
  };

  return (
    <div className="row shadow my-3 p3">
      <h3>Products</h3>
      <form>
        <h4>Filter - {filterTerm}</h4>
        <div className="mb-3 row">
          <div className="col-8">
            <Textinput value={filterTerm} onChange={handleFilterChange} />
          </div>
          <div className="col-4">
            <Button
              className="btn btn-outline-primary"
              onClick={() => setInStockOnly(!inStockOnly)}
              text={inStockOnly ? 'სრული პროდუქცია' : 'მარაგშია'}
            />
          </div>
        </div>
      </form>
      <hr />
      {renderProducts()}
    </div>
  );
};
