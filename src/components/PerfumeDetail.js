import products from "../json/products.json"
import { Row, Col } from "antd";
import ProductItem from "./ProductItem";


export default function PerfumeDetail({product}) {
    
    return (
        <content className="content"> 
        <hr className="hr-line-productdetail" />
        <div className="perfume-title-bg">
        </div>
        <p className="perfume-title">PERFUMES</p>
        <div className="perfume-detail">
            <img src="/img/product-word.png" className="product-word"/>
            <img src="/img/jo-malone-london-blossoms-yuja-cologne.png" className="product-img" />
            
            <img src="/img/up-arrow.png"className="arrow-icon"/>
            
        </div>
        <div>
        <Row gutter={[0,8]}>
            {products.map(product => (
                <Col 
                key={product.id} 
                sm={{ span: 12 }} 
                lg={{ span: 8 }}
                xl={{ span: 7 }}
                xxl={{ span: 2 }}
                >
                <ProductItem product={product}/>
                </Col>
            ))}
        </Row>
        </div>
       </content>
    );
 }

 