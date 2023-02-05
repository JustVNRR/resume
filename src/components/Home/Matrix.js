import React, { useEffect } from 'react';
import { AniMatrix } from './utils.js';
const Matrix = (props) => {

      useEffect(() => {

        const { message, container, font, fontSize } = props;

        AniMatrix(message, container, font, fontSize);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <>
          <canvas></canvas>
          <canvas></canvas>
          <div className="points">

          </div>
        </>
    );
};

export default Matrix;