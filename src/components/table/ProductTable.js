import { useCart } from '../../providers/CartProvider';

import { Button } from '../../atoms';

export const ProductTableRow = ({ name, price, qty, id, onCartAdd, onCartRemove }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        რ-ბა: {qty} ც, სულ: {price * qty} $
      </td>
      <td>
        <div className="btn btn-group">
          <Button className="btn btn-outline-success" text="➕" onClick={onCartAdd} />
          <Button className="btn btn-outline-danger" text="⛔" onClick={onCartRemove} />
        </div>
      </td>
    </tr>
  );
};

export const ProductTable = (props) => {
  const { addNewItem, removeItem, cart } = useCart();
  const renderProducts = () => {
    const cartItems = Object.entries(cart.items);
    if (cartItems.length === 0)
      return (
        <tr>
          <td colSpan="5">
            <h2 className="text-center">Cart is empty ¯\_(ツ)_/¯</h2>
          </td>
        </tr>
      );
    else
      return cartItems.map(([productId, item]) => {
        const currentItem = {
          ...item,
          id: productId,
        };
        return (
          <ProductTableRow
            key={`product-${productId}`}
            {...item}
            id={productId}
            onCartAdd={() => {
              addNewItem(currentItem);
            }}
            onCartRemove={() => {
              removeItem(currentItem);
            }}
          />
        );
      });
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">დასახელება</th>
          <th scope="col">ფასი</th>
          <th scope="col">რაოდენობა</th>
          <th scope="col">მოქმედება</th>
        </tr>
      </thead>
      <tbody>{renderProducts()}</tbody>
    </table>
  );
};
