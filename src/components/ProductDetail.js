import { useState } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import { Card } from "antd"
import AddToCart from "./AddToCart"

const { Option } = Select;

function ProductDetail({ product,testing }) {
   const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
   const [Size, setSize] = useState(product.countInStock > 0 ? product.Size[0] : 0);

   return (
      <content className="content"> 
      <hr className="hr-line-productdetail" />
      <div className="perfume-title-bg">
      </div>
      <p className="perfume-title">PERFUMES</p>
      <Row gutter={[0, 8]}>
         <Col
            lg={{ span: 4, offset: 3 }}
         >
            <img
               alt=""
               className="product-image"
               src={product.image}
            />
         </Col>
         <Col
            lg={{ span: 12 }}
         >
            <div className="product-info--detail">
               <div className="backcolor-product-category1">
               <h4 className="product-category">
                  {product.category}
               </h4>
               </div>
               <hr className="hr-line-productdetail1" />
               <h2 className="product-name product-name--large">
                  {product.name}
               </h2>
               <hr className="hr-line-productdetail1" />
               <p className="product-description">{product.description}</p>
               <hr className="hr-line-productdetail2" />
                  <div className="product-price-wrap">
                  <p className="product-qty">
                     Qty: {"   "}
                     <Select 
                        defaultValue={qty} 
                        className="select-style"
                        onChange={val=>setQty(val)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                           <Option key={x + 1} value={x + 1}>
                              {x + 1}
                           </Option>
                        ))}
                     </Select>
                  </p>
                  <p className="product-size">
                     Size: {"   "}
                     <Select
                        defaultValue={Size}
                        className="select-style"
                        onChange={val => setSize(val)}
                     >
                        {[...Array(product.Size.length).keys()].map((x) => (
                           <Option value={product.Size[x]}>
                              {product.Size[x]}
                           </Option>
                        ))}
                     </Select>
                  </p>
               </div>
               <hr className="hr-line-productdetail3" />
               <div className="product-price-wrap">
                  <p className="product-status">
                     Availability: {product.Size.length > 0 ? "In Stock" : "Unavailable."}
                  </p>
                  <p className="product-price product-price--large">
                  ${product.price}.00
                  </p>
               </div>
               <AddToCart product={product} Size={Size} qty={qty}/>
            </div>
         </Col>
      </Row>
      <div className="test">
      <hr className="hr-line-productdetail" />
         <p className="test-title">Tasting Notes</p>
        </div>
        <div className="topnote">
         <img src="/img/Mandarin.png" className="topnote-img"/>
         <h4 className="testing-category">TOP NOTE</h4>
         <h4 className="testing-name">Mandarin</h4>
         <h5 className="testing-description">Bright and tart, mandarin blends with the zestiness of lime to bring a vibrant freshness to the top notes.</h5>
        </div>
        <div className="heartnote">
         <img src="/img/Basil.png" className="heartnote-img"/>
         <h4 className="testing-category">HEART NOTE</h4>
         <h4 className="testing-name-heartnote">Basil</h4>
         <h5 className="testing-description">The herbaceous warmth of basil, with a peppery edge, adds an unexpected twist to the vibrant citrus notes.</h5>
        </div>
        <div className="basenote">
         <img src="/img/Amberwood.png" className="basenote-img"/>
         <h4 className="testing-category">BASE NOTE</h4>
         <h4 className="testing-name-basenote">Amberwood</h4>
         <h5 className="testing-description">A woody note with an amber-like scent that brings addictive warmth to the fragrance.</h5>
        </div>
        
        <div className="works">
        <hr className="hr-line-productdetail-works" />
            <p className="works-title">How Does It Work</p>
            <h4 className="works-detail">Spritz generously onto your wrists, neck and pulse points – your body heat will help to diffuse the fragrance as the day goes on. Wear alone or layer with another Cologne or your favourite Bath and Body products.</h4>
        </div>
        
        
      </content>
   );
}

export default ProductDetail;