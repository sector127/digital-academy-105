import { useState } from 'react';
// import { debounce } from 'lodash';

import { ProductItem } from './ProductItem';
import { Button, Textinput } from '../../atoms';
import productsData from '../../products.json';
import { Collapsible } from '../../components/collapsible';

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
    <div className="row shadow my-3 p-3">
      <h3>Products</h3>
      <form>
        <div className="mb-3 row">
          <div className="col-8">
            <Textinput value={filterTerm} onChange={handleFilterChange} placeholder="ძებნა..." />
          </div>
          <div className="col-4">
            <Button
              className="btn btn-outline-primary"
              onClick={() => setInStockOnly(!inStockOnly)}
            >
              {inStockOnly ? '✅ სრული პროდუქცია' : '🚀 მარაგშია'}
            </Button>
          </div>
        </div>
      </form>
      <hr />
      <Collapsible closedTitle="მაჩვენე პროდუქცია" openedTitle="დამალე პროდუქცია">
        <div className="d-flex flex-wrap justify-content-between">{renderProducts()}</div>
      </Collapsible>
    </div>
  );
};
