import React from 'react';
import Text from '../atoms/Text';

function CardBody({ name, description, price }){
    return (
        <>
            <Text variant="h5">{name}</Text>
            <Text variant="p">{description}</Text>
            <Text variant="span" className="text-muted">
                ${price}
            </Text>
        </>
    );
}

export default CardBody;