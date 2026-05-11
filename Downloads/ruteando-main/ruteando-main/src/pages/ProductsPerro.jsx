import { Container, Row } from 'react-bootstrap';
import products from '../data/products.js'
import ProductCard from '../components/organisms/ProductCard.jsx';
import '../styles/pages/Products.css'
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button.jsx'

function Products(){
    const navigate = useNavigate();
    return (
        <Container className="my-5">
            <h1>Alimento de perros</h1>
            <Button variant="outline-dark" onClick={() =>
                navigate(`/`)}>
                ATRAS
            </Button>
            <Row className='justify-content-center'> 
                {products
                .filter(product => product.tipo === 'perro')
                .map( (product) => (
                    
                    <ProductCard key={product.id} product={product}/>
                ) )};
            </Row>
        </Container>
    );
}

export default Products;