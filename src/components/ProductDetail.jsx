import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import numberWithCommas from '../utils/numberWithCommas'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { addItem } from '../redux/shopping-cart/cartItemsSlide'
import { remove } from '../redux/product-modal/productModalSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ProductDetail = props => {

  const dispatch = useDispatch()

  let product = props.product
  const navigate = useNavigate();
  const [color, setColor] = useState(undefined)
  const [size, setSize] = useState(undefined)

  const [quantity, setQuantity] = useState(1)


  if (product === undefined) product = {
    title: "",
    price: '',
    img: null,
    categorySlug: "",
    colors: [],
    slug: "",
    size: [],
    description: ""
  }

  const updateQuantity = (type) => {
    if (type === 'plus') {
        setQuantity(quantity + 1)
    } else {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }
  }

  useEffect(() => {
    setQuantity(1)
    setColor(undefined)
    setSize(undefined)
  }, [product])


  

  const check = () => {
    if (color === undefined) {
        toast.error("Please Selected Color");
        return false
    }

    if (size === undefined) {
        toast.error("Please Selected Size");
        return false
    }

    return true
  }

  const addToCart = () => {
    if (check()) {
        let newItem = {
            slug: product.slug,
            color: color,
            size: size,
            price: product.price,
            quantity: quantity
            
        }
        if (dispatch(addItem(newItem))) {
            toast.success("Add Item to Cart Success !.");
        } else {
            toast.success("Add Item to Cart Fail !.");
        }
    }
  }

  const goToCart = () => {
      if (check()) {
          let newItem = {
              slug: product.slug,
              color: color,
              size: size,
              price: product.price,
              quantity: quantity
          }
          if (dispatch(addItem(newItem))) {
              dispatch(remove())
              navigate("/cart");
              console.log(newItem)
          } else {
              alert('Fail')
          }
      }
  }

  return (
    <div className="product-detail">
      <div className="product-detail__box-img">
        <img src={product.img} alt="" />
      </div>
      <div className="product-detail__content">
        <div className="product-detail__content__info">
          <h1>{product.title}</h1>
          <h2>{numberWithCommas(product.price)}</h2>
          <div className="product-detail__content__info__evaluate">
            <div className="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
            </div>
            <div className="customer">(7 Customer Review)</div>
          </div>
        </div>
        <hr />
        <div className="product-detail__content__info__des">
          {product.description}
        </div>
        <div className="product-detail__content__info__sort">
          <div className="sku">
            <span>SKU:</span> <strong>CR-7</strong>
          </div>
          <div className="category">
            <span>Categories</span> 
              {(() => {
                if(product.categorySlug === "camera-dome"){
                  return(
                    <strong> Camera Dome</strong>
                  )
                  
                } else if(product.categorySlug === "camera-zoom"){
                  return(
                    <strong> Camera Zoom</strong>
                  )
                } else if(product.categorySlug === "hồng-ngoại"){
                  return(
                    <strong> Hồng Ngoại</strong>
                  )
                } else {
                  return(
                    <strong>Camera Thân</strong>
                  )
                }
              })()}
          </div>
          <div className="tags">
            <span>Tags:</span> 
            
                {(() => {
                  if(product.categorySlug === "camera-dome"){
                    return(
                      <strong> Camera Dome</strong>
                    )
                    
                  } else if(product.categorySlug === "camera-zoom"){
                    return(
                      <strong> Camera Zoom</strong>
                    )
                  } else if(product.categorySlug === "hồng-ngoại"){
                    return(
                      <strong> Hồng Ngoại</strong>
                    )
                  } else {
                    return(
                      <strong>Camera Thân </strong>
                    )
                  }
                })()}
          </div>
        </div>
        <div className="product-detail__content__info__item">
          <div className="product-detail__content__info__item__list">
            {
              product.colors.map((item, index) => (
                <div key={index} className={`product-detail__content__info__item__list__color ${color === item ? 'active' : ''}`}
                  onClick={() => setColor(item)}
                >
                  {item}
                </div>
              ))
            }
          </div>
          <div className="product-detail__content__info__item__list">
            {
              product.size.map((item, index) => (
                <div key={index} className={`product-detail__content__info__item__list__size ${size === item ? 'active' : ''}`}
                  onClick={() => setSize(item)}
                >
                  {item}nm
                </div>
              ))
            }
          </div>
        </div>
        <div className="product-detail__content__info__combobox">
          <div className="product-detail__content__info__combobox__quantity">
            <div className="product-detail__content__info__combobox__quantity__btn"
              onClick={() => updateQuantity('minus')}>
              <i className="bx bx-minus"></i>
            </div>
            <div className="product-detail__content__info__combobox__quantity__input">
              {quantity}
            </div>
            <div className="product-detail__content__info__combobox__quantity__btn"
              onClick={() => updateQuantity('plus')}>
              <i className="bx bx-plus"></i>
            </div>
          </div>
          <div className="product-detail__content__info__button">
            <button className="add-cart" onClick={() => addToCart()}>
              Add to Cart
            </button>
            <button className="buy-now" onClick={() => goToCart()}>
              Buy Now
            </button>
          </div>
        </div>
        <Tabs>
          <TabList>
            <Tab>Information</Tab>
            <Tab>Description</Tab>
            <Tab>Review</Tab>
          </TabList>

          <TabPanel>
            <div className="product-detail__content__info__information">
              <div className="product-detail__content__info__information__item">
                <h3>Audio:</h3>
                <span>Built-in Microphone and Speaker</span>
              </div>
              <div className="product-detail__content__info__information__item">
                <h3>Live View:</h3>
                <span>Yes</span>
              </div>
              <div className="product-detail__content__info__information__item">
                <h3>RTSP:</h3>
                <span>Yes</span>
              </div>
              <div className="product-detail__content__info__information__item">
                {/* <h3>Origin:</h3>
                <span> Viet Nam</span> */}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="product-detail__content__info__description">
            Camera AI Wi-Fi An Ninh Thông Minh Dành Cho Gia Đình Nhằm Xây Dựng Hệ Sinh Thái Thông Minh.
            </div>
          </TabPanel>
          <TabPanel>
            <div className="product-detail__content__info__review">
                Comming Soon...
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

ProductDetail.propTypes = {
    product: PropTypes.object
}

export default ProductDetail