export function makeMatrix(message, container, font, fontSize) {

    const _container = document.querySelector(container);

    const mLength = message.length;

    const ctx = [];

    Array.prototype.slice.call(_container.getElementsByTagName('canvas')).forEach(c => { ctx.push(c.getContext("2d")); });

    _container.querySelectorAll('.point').forEach((element, i) => { element.classList.remove('zoom'); });

    document.querySelectorAll('*').forEach((element) => { element.classList.remove('visible'); });
    
    // const compStyles = window.getComputedStyle(_container);

    // const width = parseFloat(compStyles.getPropertyValue('width'));
    // const height = parseFloat(compStyles.getPropertyValue('height'));

    const width = _container.offsetWidth;
    const height = _container.offsetHeight;

    ctx.forEach(c => {
        c.canvas.width = width;
        c.canvas.height = height;
        c.font = `${fontSize}px ${font}`;
    });

    const columns = Math.floor(width / (fontSize) / 2) * 2;
    const lines = Math.floor(height / (fontSize));

    const mXStart = Math.floor((columns - mLength) / 2) + 1;

    const mY = Math.floor(height / fontSize / 2) + (lines % 2 === 0 ? 0.5 : 1);

    const paddedMessage = ' '.repeat(mXStart).concat(message).padEnd(columns, ' ').split('');

    const textAlign = (width / 2 + fontSize / 2) - paddedMessage.indexOf('W') * fontSize;

    const points = Array.from(Array(columns).keys()).map(i => makePoint(i));

    const completed = []

    function setBackground() {

        const ratio = completed.length / columns;

        ctx[0].canvas.style.opacity = 1 - Math.pow(ratio, 2);
        ctx[0].fillStyle = `rgba(0,0,0, ${0.1 + 0.1 * Math.pow(ratio, 3) * 7})`;
        ctx[0].fillRect(0, 0, width, height);
        ctx[0].fillStyle = "rgba(0,255,0,1)";

        ctx[1].clearRect(0, 0, width, height);
        ctx[1].fillStyle = `rgba(255,255,255,${0.8 - Math.pow(ratio, 3)})`;
    }

    function makePoint(x) {
        let value = 'X';
        let speed = Math.random() * 0.5 + 0.5;
        let inc = 0;
        let y = -Math.random() * lines / 2;
        const X = x * fontSize + textAlign + (fontSize - ctx[0].measureText('W').width) / 2;

        function draw() {

            inc++;

            const index = inc - Math.floor(inc / mLength) * mLength;

            value = message[index];
            const Y = y * fontSize;

            ctx[0].fillText(value, X, Y);
            ctx[1].fillText(value, X, Y);

            if (y === mY) {

                let p = document.getElementById(`p-${x - mXStart}`);

                if (p !== null) p.classList.add("visible");

                completed.push(x);
            }

            y += speed;

            if (y <= lines + 4) return;

            if (paddedMessage[x] !== ' ') {

                y = mY - (Math.ceil(mY / mLength) + Math.floor(Math.random() * 5)) * mLength + index + 1 - (x - mXStart);

                speed = 1;

                return;
            }

            if (completed.length < mLength - 2) {

                y = Math.random() * 10 - 10;
                return;
            }

            completed.push(x);
        }

        return Object.freeze({ x, draw });
    }

    function draw() {

        setBackground();

        points.filter(p => { return !completed.includes(p.x) }).forEach(p => { p.draw() });
    }

    function complete() { return completed.length === columns; }

    function zoom() {

        _container.querySelectorAll('.point').forEach((element, i) => {

            setTimeout(() => { element.classList.add('zoom'); }, 40 * Math.abs(i - Math.floor(mLength / 2)))
        });
    }

    return Object.freeze({ draw, complete, zoom })
}