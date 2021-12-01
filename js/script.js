//L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


    

//seleziono il livello di difficoltà
const play = document.getElementById('play');
play.addEventListener('click', function () {
    let select = document.getElementById('difficulty');
    let value = select.options[select.selectedIndex].value;
    if (value == 'easy') {
        const row = 10;
        const col = 10;
        const numberSquare = row * col;
        const maxNumber = numberSquare;
        const minNumber = 1;
        const containerGrid = document.getElementById('container');
        for (let i = 0; i < numberSquare; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${col})`;
            square.style.height = `calc(100% / ${row})`;
            square.append(i + 1);
            containerGrid.append(square);
        }

    }
    else if (value == 'normal') {
        const row = 9;
        const col = 9;
        const numberSquare = row * col;
        const maxNumber = numberSquare;
        const minNumber = 1;
        const containerGrid = document.getElementById('container');
        for (let i = 0; i < numberSquare; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${col})`;
            square.style.height = `calc(100% / ${row})`;
            square.append(i + 1);
            containerGrid.append(square);
        }

    }
    else if (value == 'hard') {
        const row = 7;
        const col = 7;
        const numberSquare = row * col;
        const maxNumber = numberSquare;
        const minNumber = 1;
        const containerGrid = document.getElementById('container');
        for (let i = 0; i < numberSquare; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${col})`;
            square.style.height = `calc(100% / ${row})`;
            square.append(i + 1);
            containerGrid.append(square);
        }

    }
});



