import { useContext } from "react"; 
import { Layout } from 'antd';
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import PerfumeDetail from "../components/PerfumeDetail";
import products from "../json/products.json";
import { StoreContext } from "../store";

const { Header ,Content ,Footer} = Layout;

function Perfume() {
  const { state: { page: {title,products} } } = useContext(StoreContext);
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
            <PerfumeDetail products={products}/>
        </Content>
        <Footer className="layout-footer">
          <AppFooter/>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Perfume;
