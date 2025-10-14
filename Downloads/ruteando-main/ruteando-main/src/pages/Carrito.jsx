import { Container, Row, Col, Image } from "react-bootstrap";
import CarritoCard from "../components/organisms/CarritoCard";
import products from "../data/products.js";
import '../styles/pages/Carrito.css';

function Carrito() {
  return (
    <Container className="my-2">
      <h1>Carrito</h1>
      <Row>
        <Col className="justify-content-start p-0 overflow-scroll productos">
          {products
          .filter(product => product.id === 1)
          .map((product) => (
            <CarritoCard key={product.id} product={product} />
          ))}
        </Col>
        <Col className="justify-content-end p-0">
          <Image
            className="p-0 w-100"
            src='.\img\image.png'
            alt="Wenamechaindesama"
          />

        </Col>
      </Row>
    </Container>
  );
}

export default Carrito;
