import React from 'react';
import Text from '../atoms/Text';

function cardCategoryBody({ name }){
    return (
        <>
            <Text variant="h5">{name}</Text>
        </>
    );
}

export default cardCategoryBody;