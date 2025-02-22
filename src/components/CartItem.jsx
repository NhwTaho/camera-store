import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateItem, removeItem } from "../redux/shopping-cart/cartItemsSlide";
import numberWithCommas from "../utils/numberWithCommas";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const itemRef = useRef(null);

  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (opt) => {
    if (opt === "+") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
    }
    if (opt === "-") {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 })
      );
    }
  };

  // const updateCartItem = () => {
  //     dispatch(updateItem({...item, quantity: quantity}))
  // }

  const removeCartItem = () => {
    console.log("removeCartItem");
    dispatch(removeItem(item));
    toast.success("Delete Product Success !");
  };

  return (
    <div className="cart__item" ref={itemRef}>
      <div className="cart__item__box-img">
        <img src={item.product.img} alt="" />
      </div>
      <div className="cart__item__name">
        <Link to={`/catalog/${item.slug}`}>{item.product.title}</Link>
      </div>
      <div className="cart__item__options">
        Color: <span>{item.color}</span> - <span>{item.size}nm</span>
      </div>
      <div className="cart__item__price">{numberWithCommas(item.price)}</div>
      <div className="cart__item__qty">
        <div
          className="product__info__item__quantity__btn"
          onClick={() => updateQuantity("-")}
        >
          <i className="bx bx-minus"></i>
        </div>
        <div className="product__info__item__quantity__input">{quantity}</div>
        <div
          className="product__info__item__quantity__btn"
          onClick={() => updateQuantity("+")}
        >
          <i className="bx bx-plus"></i>
        </div>
      </div>
      <div className="cart__item__action">
        <i className="bx bx-trash" onClick={() => removeCartItem()}></i>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
