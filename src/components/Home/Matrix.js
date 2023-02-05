import React, { useEffect } from 'react';
import { AniMatrix } from './utils.js';
const Matrix = (props) => {

      useEffect(() => {

        const { message, container, font, fontSize, fps } = props;

        AniMatrix(message, container, font, fontSize, fps);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <>

        </>
    );
};

export default Matrix;