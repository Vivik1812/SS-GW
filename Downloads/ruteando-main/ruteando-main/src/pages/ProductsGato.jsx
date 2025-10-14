import { Container, Row } from 'react-bootstrap';
import ProductCard from '../components/organisms/ProductCard.jsx';
import products from '../data/products.js';
import '../styles/pages/Products.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button.jsx';

function Products(){
    
    const navigate = useNavigate();
    
    return (
        <Container className="my-5">
            <h1>Alimentos de gatos</h1>
            <Button variant="outline-dark" onClick={() =>
                navigate(`/`)}>
                ATRAS
            </Button>
            <Row className='justify-content-center'>
                {products
                .filter(product => product.tipo === 'gato')
                .map( (product) => (
                    <ProductCard key={product.id} product={product}/>
                ) )}
            </Row>
        </Container>
    );
}

export default Products;