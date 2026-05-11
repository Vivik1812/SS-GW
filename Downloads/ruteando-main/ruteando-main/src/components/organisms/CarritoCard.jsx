import CardCarritoBody from "../molecules/CardCarritoBody";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Image from "../atoms/Image";
import { Container, Col, Row } from "react-bootstrap";

import { FaRegTrashAlt } from 'react-icons/fa'

function CarritoCard({ product }) {
  return (
    <Container>
      <Row className="border border-black rounded-5 mb-3">
        <Row className="d-inline-flex justify-content-center align-items-center ">
        <Col className="col-sm-1 col-md-3 col-lg-6 p-0 justify-content-cente">
          <Image className={"w-25 p-0 m-auto"} src={product.image} />
        </Col>

        <Col className="col-sm-1 col-md-3 col-lg-6">
          <Row className="d-inline-flex justify-content-center align-items-center">
            <Col>
              <Button variant="outline-success">+</Button>
            </Col>
            <Col>
              <Text variant="span" className="fw-bolder">
                CONTADOR
              </Text>
            </Col>
            <Col>
              <Button variant="outline-success">-</Button>
            </Col>
            <Col>
              <Button variant="outline-danger"><FaRegTrashAlt/></Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-1 col-md-3 col-lg-6 p-3 justify-content-cente">
          <Text variant="h4" className="text-md-center">
            ${product.price}
          </Text>
        </Col>
        <Col className="col-sm-1 col-md-3 col-lg-6 p-3 justify-content-center">
          <Text variant="h4" className="text-md-center">
            ${product.price}
          </Text>
        </Col>
      </Row>
      </Row>
      
    </Container>
  );
}

export default CarritoCard;
