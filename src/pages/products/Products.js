import { useState } from 'react';
import productsData from '../../products.json';

export const ProductItem = ({ product }) => {
  return (
    <div>
      <h4>
        {product.name}, ღირებულება: {product.price}
      </h4>
      <h6>
        {product.inStock ? 'მარაგშია' : 'არ არის მარაგში'}, კატეგორია: {product.category}
      </h6>
    </div>
  );
};

export const Products = () => {
  const [inStockOnly, setInStockOnly] = useState(false);
  // const renderProducts = () => {
  //   const rows = new Set(productsData.map((product) => product.category));
  //   return rows;
  const renderProducts = () => {
    let data = productsData.slice();
    if (inStockOnly) {
      data = productsData.filter((item) => item.inStock);
    }
    return data.map((item, index) => {
      return <ProductItem product={item} key={index} />;
    });
  };
  return (
    <div className="row shadow my-3 p3">
      <h3>Products</h3>
      <button className="btn btn-outline-primary" onClick={() => setInStockOnly(!inStockOnly)}>
        მარაგშია
      </button>
      <hr />
      {renderProducts()}
    </div>
  );
};
