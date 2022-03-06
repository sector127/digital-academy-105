export const ProductItem = ({ product }) => {
  return (
    <div>
      <h4>
        {product.name}, ფასი: {product.price}
      </h4>
      <h6>
        {product.inStock ? 'მარაგშია' : 'არ არის მარაგში'}, კატეგორია: {product.category}
      </h6>
    </div>
  );
};
