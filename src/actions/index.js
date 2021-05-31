import {
  PAGE_CONTENT_SET,
  NAVBAR_ITEM_SET,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SET_PRODUCT_DETAIL,
  BEGIN_PRODUCTS_FEED,
  SUCCESS_PRODUCTS_FEED,
  FAIL_PRODUCTS_FEED,
  BEGIN_PRODUCTS_REQUEST,
  SUCCESS_PRODUCTS_REQUEST,
  FAIL_PRODUCTS_REQUEST,
} from "../utils/constants";

import products from "../json/products.json";
import { getProducts, getProductById, feedProducts } from "../api";

export const addCartItem = (dispatch, product, qty, Size) => {
  const item = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    countInStock: product.countInStock,
    qty,
    Size,
  };
  dispatch({
    type: CART_ADD_ITEM,
    payload: item,
  });
};

export const removeCartItem = (dispatch, productId) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: productId,
  });
};

export const feedJSONToFirebase = async (dispatch) => {
  dispatch({ type: BEGIN_PRODUCTS_FEED });
  try {
    await feedProducts();
    dispatch({ type: SUCCESS_PRODUCTS_FEED });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_FEED, payload: error });
  }
}

export const setProductDetail = (dispatch, productId, qty, Size) => {
  const product = products.find(
    x => x.id === productId
  );
  
  if (qty === 0)
    dispatch({
      type: SET_PRODUCT_DETAIL,
      payload: {
        product,
      }
    })
  else
    dispatch({
      type: SET_PRODUCT_DETAIL,
      payload: {
        product,
        qty,
        Size,
      }
    })
}

export const setPage = async (dispatch, url, title) => {
  let products = [];
  dispatch({ type: BEGIN_PRODUCTS_REQUEST });
  try {
    products = await getProducts(url);
    dispatch({
      type: PAGE_CONTENT_SET,
      payload: { title, products },
    });
    dispatch({
      type: NAVBAR_ITEM_SET,
      payload: url,
    });    
    dispatch({ type: SUCCESS_PRODUCTS_REQUEST });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_REQUEST, payload: error });
  }
}