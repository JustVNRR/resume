import React, { useEffect } from 'react';
import { AniMatrix } from './utils.js';

const Matrix = (props) => {

    useEffect(() => {

        const { message, container, font, fontSize, fps } = props;

        let animation = AniMatrix(message, container, font, fontSize, fps);

        const resize = () => { animation.resize(); }

        window.addEventListener('resize', resize);

        return () => { window.removeEventListener('resize', resize); }

    }, [props]);

    return (
        <>

        </>
    );
};

export default Matrix;