import React, { useContext } from 'react';
import Special from '../Special/Special';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>Myself</h2>
            <h2> context: {ring}</h2>
            <Special></Special>
        </div>
    );
};

export default Myself;