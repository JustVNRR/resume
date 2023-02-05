export function AniMatrix(message, container, font, fontSize) {

    let resizeTimeout = null;

    window.addEventListener('resize', resize);

    function resize() {

        if (resizeTimeout) { clearTimeout(resizeTimeout); resizeTimeout = null; }

        resizeTimeout = setTimeout(() => { matrix.init(); }, 100);
    };

    let matrix = makeMatrix(message, container, font, fontSize);

    let loop = function () {

        matrix.draw();

        if (!matrix.complete()) { setTimeout(() => { requestAnimationFrame(loop); }, 1000 / 24); }
        else {

            window.removeEventListener('resize', resize);

            //matrix.zoom();
        };
    }

    loop();
}

function makeMatrix(message, container, font, fontSize) {

    let _container = document.querySelector(container);

    _container.style.setProperty('--fs', `${fontSize}px`);
    _container.style.setProperty('--w', `${fontSize}px`);
    _container.style.setProperty('--fm', `${font}`);

    let mLength = message.length;

    _container.innerHTML = '<canvas></canvas>'.repeat(2)
    .concat(`<div class="points">
                ${Array.from(Array(mLength).keys())
            .map(i => { return `<div class="point" id="p-${i}">${message[i]}</div>` })
            .join('')}
            </div>`);

    let ctx = [];

    Array.prototype.slice.call(_container.getElementsByTagName('canvas')).forEach(c => {
        ctx.push(c.getContext("2d"));
    });

    let width, height, columns, lines, mXStart, mY, paddedMessage, textAlign, points = [], completed = [];

    init();

    function init() {

        document.querySelectorAll('*').forEach((element) => { element.classList.remove('visible'); });

        width = _container.offsetWidth;
        height = _container.offsetHeight;

        ctx.forEach(c => {
            c.canvas.width = width;
            c.canvas.height = height;
            c.font = `${fontSize}px ${font}`;
        });

        columns = Math.floor(width / (fontSize) / 2) * 2;
        lines = Math.floor(height / (fontSize));

        mLength = message.length;

        if (mLength > columns) {
            message = message.substring(0, columns);
            mLength = columns;
        }

        mXStart = Math.floor((columns - mLength) / 2) + 1;
        mY = height / fontSize / 2 + 0.4;

        paddedMessage = ' '.repeat(mXStart).concat(message).padEnd(columns, ' ').split('');

        textAlign = (width / 2 + fontSize / 2) - paddedMessage.indexOf('W') * fontSize;

        points = Array.from(Array(columns).keys()).map(i => makePoint(i));

        completed = []
    }

    function setBackground() {

        let ratio = completed.length / columns;

        ctx[0].canvas.style.opacity = 1 - Math.pow(ratio, 2);
        ctx[0].fillStyle = `rgba(0,0,0, ${0.1 + 0.1 * Math.pow(ratio, 3) * 7})`;
        ctx[0].fillRect(0, 0, width, height);
        ctx[0].fillStyle = "rgba(0,255,0,1)";

        ctx[1].clearRect(0, 0, width, height);
        ctx[1].fillStyle = `rgba(255,255,255,${0.7 - Math.pow(ratio, 3)})`;
    }

    function makePoint(x) {
        let value = 'X';
        let speed = Math.random() * 0.5 + 0.5;
        let inc = 0;
        let y = -Math.random() * lines / 2;
        let X = x * fontSize + textAlign + (fontSize - ctx[0].measureText('W').width) / 2;

        function draw() {

            inc++;

            let index = inc - Math.floor(inc / mLength) * mLength;

            value = message[index];
            let Y = y * fontSize;

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

                y =  mY - (Math.floor(mY/mLength) + Math.floor(Math.random() * 3)) * mLength + index + 1 - (x - mXStart);

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

        _container.querySelectorAll('canvas').forEach(c => { c.parentNode.removeChild(c); });

        _container.querySelectorAll('.point').forEach((element, i) => {

            setTimeout(() => { element.classList.add('zoom'); }, 40 * Math.abs(i - Math.floor(mLength / 2)))
        });
    }

    return Object.freeze({ init, draw, complete, zoom })
}