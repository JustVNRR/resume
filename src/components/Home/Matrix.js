import React, { useEffect } from 'react';
import { makeMatrix } from './utils.js';

const Matrix = (props) => {

  const { message, container, font, fontSize } = props;

  useEffect(() => {

    let resizeTimeout, loopTimeout = null;

    const _container = document.querySelector(container);

    _container.style.setProperty('--fs', `${fontSize}px`);
    _container.style.setProperty('--w', `${fontSize}px`);
    _container.style.setProperty('--fm', `${font}`);

    let matrix = makeMatrix(message, container, font, fontSize);

    let loop = function () {

      matrix.draw();

      if (!matrix.complete())
        loopTimeout = setTimeout(() => { requestAnimationFrame(loop); }, 1000 / 60);
      else
        matrix.zoom();
    }

    loop();

    function resize() {

      clearTimeout(loopTimeout);

      if (resizeTimeout) { clearTimeout(resizeTimeout); resizeTimeout = null; }

      resizeTimeout = setTimeout(() => {

        matrix = makeMatrix(message, container, font, fontSize);

        loop();

      }, 100);
    };

    window.addEventListener('resize', resize);

    return () => { window.removeEventListener('resize', resize); }
  }, [message, container, font, fontSize])

  return (
    <>
      <canvas></canvas>
      <canvas></canvas>
      <div className="points">
        {
          message.split('').map((item, i) => { return <div key={i} id={"p-" + i} className="point">{item}</div> })
        }
      </div>
    </>
  );
};

export default Matrix;