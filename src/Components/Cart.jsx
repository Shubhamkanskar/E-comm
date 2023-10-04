import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div className="col-md-4 mb-4" key={product.id}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Item
          </Button>
          <Button variant="primary" onClick={() => removeToCart(product.id)}>
            Pay
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Cart;
