import React from 'react';
import Button from '../../../components/atoms/Button';
import { render, screen } from '@testing-library/react';

describe('Button Component', () => {
   
    it('Renderiza el boton correctamente', () => {
        const { getByText } = render(<Button>Ir</Button>);
        expect(getByText('Ir')).toBeTruthy();
    });

    it('Aplica los props correctamnete', () => {
        render(<Button variant = "primary">Ir</Button>);
        const button = screen.getByText('Ir');
        expect(button).toHaveClass('btn-primary');
    })

});
