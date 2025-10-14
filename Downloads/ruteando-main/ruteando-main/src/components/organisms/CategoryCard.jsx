import React from 'react';
import { Card } from 'react-bootstrap'
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardCategoryBody from '../molecules/CardCategoryBody';
import { useNavigate } from 'react-router-dom';
import '/src/styles/organisms/ProductCard.css';

function CategoryCard({ category }){
    const navigate = useNavigate();
    
    return(
        <Card style={{width: '18rem'}} className="m-3">
            <Image src={category.image} alt={category.name} className="card-img-top"/>
            <Card.Body>
                <CardCategoryBody
                    name={category.name}
                />
            
                <Button variant="outline-dark" onClick={() =>
                    navigate(`/${category.id}`)}>
                    Ir
                </Button>
            </Card.Body>
        </Card>
    )
};

export default CategoryCard;
