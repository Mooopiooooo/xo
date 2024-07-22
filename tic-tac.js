let turn = 'X';
let squares = [];
let title = document.querySelector('#title');

function end(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} Winner`;
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';

    document.getElementById('item' + num3).style.background = '#000';
    let dots = '';
    let dotInterval = setInterval(function() {
        dots += '.';
        title.innerHTML = `${squares[num1]} Winner${dots}`;
        if (dots.length > 3) {
            clearInterval(dotInterval);
            setTimeout(function() { location.reload() }, 1000); // Reload after 1 second
        }
    }, 500);
}

function winner() {
    for (let i = 1; i <= 9; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML.trim();
    }


    if (squares[1] === squares[2] && squares[2] === squares[3] && squares[1] !== '') {
        end(1, 2, 3);
    } else if (squares[4] === squares[5] && squares[5] === squares[6] && squares[4] !== '') {
        end(4, 5, 6);
    } else if (squares[7] === squares[8] && squares[8] === squares[9] && squares[7] !== '') {
        end(7, 8, 9);
    } else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] !== '') {
        end(1, 4, 7);
    } else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] !== '') {
        end(2, 5, 8);
    } else if (squares[3] === squares[6] && squares[6] === squares[9] && squares[3] !== '') {
        end(3, 6, 9);
    } else if (squares[1] === squares[5] && squares[5] === squares[9] && squares[1] !== '') {
        end(1, 5, 9);
    } else if (squares[3] === squares[5] && squares[5] === squares[7] && squares[3] !== '') {
        end(3, 5, 7);
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (element.innerHTML === '' && title.innerHTML !== 'Winner') {
        element.innerHTML = turn;
        if (turn === 'X') {
            turn = 'O';
            title.innerHTML = 'O';
        } else {
            turn = 'X';
            title.innerHTML = 'X';
        }
        winner();
    }
}