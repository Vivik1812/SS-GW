import React from 'react';
import Text from '../atoms/Text';

function CardCarritoBody({ name, price }){
    return(
        <>
            <Text variant="h5">{name}</Text>
            
            <Text variant="span" className="text-muted">
                ${price}
            </Text>
        </>
    );
}

export default CardCarritoBody;