import { useEffect } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { getProduct } from "../Store/ProductSlice";
import { Alert } from "react-bootstrap";
import StatusCode from "./utils/StatusCode";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>..loading</p>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <Alert key="Danger" variant="danger">
        Something went wrong! Please try again later.
      </Alert>
    );
  }

  const addTocart = (product) => {
    dispatch(add(product));
  };

  const renderProductCards = () => {
    return products.map((product) => (
      <Col key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card className="mb-4" style={{ height: "100%" }}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ height: "200px", objectFit: "cover" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "white" }}>
            <Button variant="primary" onClick={() => addTocart(product)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    ));
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4">Product Dashboard</h1>
      <Row>{renderProductCards()}</Row>
    </div>
  );
};

export default Products;
