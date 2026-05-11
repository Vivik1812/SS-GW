import React from 'react';
import { render, screen } from '@testing-library/react';
import { Profiler } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ProductDetail from '../../pages/ProductDetail';

//Mock de useParams
const mockUseParams = jasmine.createSpy('useParams');

const mockProduct = [
    {
        id: 1,
        name: 'Producto 1',
        description: 'Descripcion producto 1',
        price: 10000,
        image: 'https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/Venusaur.png'
    }
];

//Mock del modulo Product.js
beforeEach(() => {
    delete require.cache[require.resolve('../../data/Products.js')];
    require.cache[require.resolve('../../data/Products.js')] = {
        exports: { default: mockProduct}
    };
});

afterEach(() => {
    delete require.cache[require.resolve('../../data/Products.js')];
});

const MockRouter = ({ children, params }) => {
    mockUseParams.and.returnValue(params);
    const router = createMemoryRouter(
        [{ path: '*', element: children }],
        { initialEntries: ['/products/:id'] }
    );
    return <RouterProvider router={router}/>
};

describe('ProductDetail Page', () => {
    let renderSpy;

    beforeEach(() => {
        renderSpy = jasmine.createSpy('onRender');
        mockUseParams.and.returnValue({ id: '1' });
        console.log('mockUseParams devuelve: ', mockUseParams());
    });

    it('Muestra mensaje de error cuando el producto no existe', () => {
        mockUseParams.and.returnValue({ id:'999' });
        render(
            <Profiler id="ProductDetail" onRender={renderSpy}>
                <MockRouter params={{ id: '999'}}>
                    <ProductDetail/>
                </MockRouter>
            </Profiler>
        );
        console.log(screen.debug());
        expect(screen.getByText('Producto no encontrado')).toBeTruthy();
    });

    it('Mide el tiempo de renderizado del componente', () => {
        render(
            <Profiler id="ProductDetail" onRender={renderSpy}>
                <MockRouter params={{ id: '1' }}>
                    <ProductDetail/>
                </MockRouter>
            </Profiler>
        );
        console.log(screen.debug);
        expect(renderSpy);
        const call =renderSpy.calls.mostRecent();
        const actualDuration = call.args[3];
        console.log('Tiempo de renderizado de ProductDetail: ', actualDuration, 'ms');
        expect(actualDuration).toBeLessThan(100);
    });
});