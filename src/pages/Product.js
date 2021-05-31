import { Layout } from 'antd';
import { useContext } from "react"; 
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";
import { StoreContext } from "../store";


const { Header, Content,Footer } = Layout;

function Product({ match }) {
   const { state: { page: {title,products} } } = useContext(StoreContext);
   const product = products.find(
      x => x.id === match.params.productId
   );
   return (
      <Layout className="container main-layout">
         <Layout className="bg-gray">
            <NavBar />
         </Layout>
         <Layout className="bg-gray">
         <Header className="layout-header">
            <AppHeader title={title} />
         </Header>
            <Content className="layout-content">
               <ProductDetail product={product} />
            </Content>
            <Footer className="layout-footer">
               <AppFooter/>
            </Footer>
         </Layout>
      </Layout>
   );
}

export default Product;
