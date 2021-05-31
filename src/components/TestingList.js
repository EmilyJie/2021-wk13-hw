import { Row, Col } from "antd";
import TestingItem from "./TestingItem";

export default function TestingList({testing}) {
  return (
    <Row gutter={[32, 32]}>
    {testing.map(testing => (
        <Col 
          sm={{ span: 12 }} 
          lg={{ span: 8 }}
          xl={{ span: 6 }}
          xxl={{ span: 4 }}
        >
          <TestingItem testing={testing}/>
        </Col>
      ))}
    </Row>
  );
}

