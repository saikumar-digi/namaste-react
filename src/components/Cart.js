import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  //subribing to the store 
  const cartItems = useSelector((state) => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="text-center m-6 p-6">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
        {cartItems.length === 0 ? (
          <div>Cart is Empty Add Item to the Cart</div>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
