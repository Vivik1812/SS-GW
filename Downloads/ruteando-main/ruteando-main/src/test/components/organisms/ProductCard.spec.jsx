import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ProductCard from '../../../components/organisms/ProductCard';

//Creacion de un componente: Este componente puede mokear(simular) un useNavigate
const MockRouter = ({ children, mockNavigate }) => {
    const router = createMemoryRouter(
        [{ path: '*', element: children }],
        { initialEntries: ['/'] }
    );
    router.navigate = mockNavigate;
    return <RouterProvider router={router}/>;
}

describe('ProductCard Component', () => {
    const mockNavigate = jasmine.createSpy('navigate');

    const mockProduct = {
        id: 1,
        name: 'Product Test',
        description: 'Description test',
        price: 10000,
        image: 'https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Venusaur.png'

    };

    it('Renderiza el titulo del producto', () => {
        render(
        <MockRouter mockNavigate={mockNavigate}>
            <ProductCard product={mockProduct}/>
        </MockRouter>
        );
        expect(screen.getByText(mockProduct.name)).toBeTruthy();
    }); 

    it('Renderiza el precio del producto', () => {
        render(
            <MockRouter mockNavigate={mockNavigate}>
                <ProductCard product={mockProduct}/>
            </MockRouter>
        );
        expect(screen.getByText(/10000/)).toBeTruthy();
    });

    it('Renderiza la imagen del producto', () => {
        render(
            <MockRouter mockNavigate={mockNavigate}>
                <ProductCard product={mockProduct}/>
            </MockRouter>
        );
        const image = screen.getByRole('img', {name: mockProduct.name});
        expect(image).toBeTruthy();
        expect(image.getAttribute('src')).toBe(mockProduct.image);
    });

    it('Renderiza el boton de detalle', () => {
        render(
            <MockRouter mockNavigate={mockNavigate}>
                <ProductCard product={mockProduct}/>
            </MockRouter>
        );
        const button = screen.getByText('Ver Detalles');
        expect(button).toBeTruthy();
    });

    it('Navega a detalle al hacer click en el boton', () => {
        render(
            <MockRouter mockNavigate={mockNavigate}>
                <ProductCard product={mockProduct}/>
            </MockRouter>
        );
        const button = screen.getByText('Ver Detalles');
        fireEvent.click(button);
        expect(mockNavigate).toHaveBeenCalledWith('/products/1', jasmine.any(Object));
    });

});