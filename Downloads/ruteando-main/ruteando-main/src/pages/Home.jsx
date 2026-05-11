import React from 'react';
import { Container, Row } from 'react-bootstrap';
import categorys from '../data/categorys.js';
import CategoryCard from '../components/organisms/CategoryCard';
import '../styles/pages/Home.css'


function Home(){
    return (
        <Container className = "my-5">
                <h1>Categorias</h1>
            <Row className='justify-content-center'>
                {categorys.map( (category) => (
                    <CategoryCard key={category.id} category={category}/>
                ) )}
            </Row>
        </Container>
    );
}

export default Home;
