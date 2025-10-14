import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';
import { MemoryRouter } from 'react-router-dom';

describe('Home Page', () => {
    
    it('Renderiza el titulo de la pagina de inicio', () => {
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>);
        const title = screen.getByText('Categorias');
        expect(title).toBeTruthy();
    });

    it('Renderiza el parrafo de bienvenida', () => {
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        );
        const paragraph = screen.getByText('Categorias');
        expect(paragraph).toBeTruthy();
    });

    it('Renderiza el contenedor de Bootstrap', () => {
       render(
        <MemoryRouter>
            <Home/>
        </MemoryRouter>
       )
        const container = screen.getByText('Categorias').closest('div');
        expect(container).toHaveClass('container');
        expect(container).toHaveClass('my-5');
    });

});