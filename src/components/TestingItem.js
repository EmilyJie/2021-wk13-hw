import { Card } from "antd"

export default function TestingItem({ testing }) {
    return (
        <Card className="bg-gray product">
            <div className="product-info">
            <img
                style={{ width: '80%' }}
                src={testing.image}
                alt={testing.name} className="product-item"/>
                <div className="backcolor-product-category">
                <h3 className="product-category">
                    {testing.note}
                </h3>
                <h3 className="product-name">
                    {testing.name}
                </h3>
                <h3 className="product-name">
                    {testing.description}
                </h3>
                </div>
            </div>
        </Card>
    );
}
