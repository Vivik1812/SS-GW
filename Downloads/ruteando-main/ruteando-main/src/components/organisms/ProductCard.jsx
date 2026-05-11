import React from "react";
import { Card } from "react-bootstrap";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import CardBody from "../molecules/CardBody";
import { useNavigate } from "react-router-dom";
import "/src/styles/organisms/ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "20rem" }} className="m-5">
      <Image src={product.image} alt={product.name} className="card-img-top" />
      <Card.Body>
        <CardBody
          name={product.name}
          //description={product.description}
          price={product.price}
        />
        <Button
          variant="outline-dark"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          Ver Detalles
        </Button>
        <br/>
        <Button variant="outline-success">Agregar </Button>
        
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
