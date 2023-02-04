export function AniMatrix(message, container, font, fontSize, fps) {

    let resizeTimeout = null;

    let loopTimeout = null;

    window.onresize = function () {

        if (resizeTimeout) { clearTimeout(resizeTimeout); resizeTimeout = null; }

        resizeTimeout = setTimeout(() => {
            clearTimeout(loopTimeout);
            AniMatrix(message, container, font, fontSize, fps);
        }, 100);
    };

    let matrix = makeMatrix(message, container, font, fontSize);

    let loop = function () {

        matrix.draw();

        if (!matrix.complete()) { loopTimeout = setTimeout(() => { requestAnimationFrame(loop); }, 1000 / fps); }
        else {
            matrix.zoom();
        };
    }

    loop();
}

function makeMatrix(message, container, font, fontSize) {

    let _container = document.querySelector(container);

    _container.style.setProperty('--fs', `${fontSize}px`);
    _container.style.setProperty('--fm', `${font}`);

    let width = _container.offsetWidth;
    let height = _container.offsetHeight;

    let columns = Math.floor(width / (fontSize) / 2) * 2;
    let lines = Math.floor(height / (fontSize));

    let mLength = message.length;

    if (mLength > columns) {
        message = message.substring(0, columns);
        mLength = columns;
    }

    let mXStart = Math.floor((columns - mLength) / 2) + 1;
    let mY = height / fontSize / 2 + 0.4;

    _container.innerHTML = '<canvas></canvas>'.repeat(2)
        .concat(`<div class="points">
                    ${Array.from(Array(mLength).keys())
                .map(i => { return `<div class="point" id="p-${mXStart + i}">${message[i]}</div>` })
                .join('')}
                </div>`);

    // ['click', 'touchmove'].forEach(function (str) {
    //     _container.addEventListener(str, (e) => { e.preventDefault(); });
    // });

    let ctx = [];

    Array.prototype.slice.call(_container.getElementsByTagName('canvas')).forEach(c => {

        c.width = width;
        c.height = height;
        c.getContext("2d").font = `${fontSize}px ${font}`
        ctx.push(c.getContext("2d"));
    });

    let paddedMessage = ' '.repeat(mXStart).concat(message).padEnd(columns, ' ').split('');

    let decalX = (width / 2 + fontSize / 2) - paddedMessage.indexOf('W') * fontSize;

    let residu = mY - Math.floor(mY / mLength) * mLength;

    let points = Array.from(Array(columns).keys()).map(i => makePoint(i));

    let completed = []

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
        let X = x * fontSize + decalX + (fontSize - ctx[0].measureText('W').width) / 2;

        function draw() {

            inc++;

            let index = inc - Math.floor(inc / mLength) * mLength;

            value = message[index];
            let Y = y * fontSize;

            ctx[0].fillText(value, X, Y);
            ctx[1].fillText(value, X, Y);

            if (y === mY) {

                let p = document.getElementById(`p-${x}`);
                
                if(p !== null) p.classList.add("visible");

                completed.push(x);
            }

            y += speed;

            if (y <= lines + 4) return;

            if (paddedMessage[x] !== ' ') {

                y = index - mLength + residu + 1 - (x - mXStart);
                y = y > 0 ? y -= mLength * 2 : y;
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

            setTimeout(() => { element.classList.add('zoom'); }, 40 * Math.abs(i - Math.floor(mLength/2)))
        });
    }

    return Object.freeze({ draw, complete, zoom })
}