
function chooseColor(i, j) {
    if (i % 2 == j % 2) {
        td.className = "white";
    } else {
        td.className = "gray";
    } if (j == 0 || j == 9) {
        td.className = "white";
    }
}

function chess() {
    var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
        figuresBlack1 = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8'],
        figuresBlack2 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'],
        figuresWhite1 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'],
        figuresWhite2 = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'];

    var chessDesk = document.createElement('table');
    for (var i = 0; i < 10; i++) {
        var emptyCell = [i, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', i];
        var tr = document.createElement('tr');

        chessDesk.append(tr);
        for (var j = 0; j < 10; j++) {
            td = document.createElement('td');
            tr.append(td);
            switch (i) {
                case 0:
                    td.innerText = letters[j];
                    td.style.transform = "rotate(180deg)";
                    break;
                case 9:
                    td.innerText = letters[j];
                    break;
                case 1:
                    td.innerHTML = figuresBlack1[j];
                    chooseColor(i, j)
                    break;
                case 2:
                    td.innerHTML = figuresBlack2[j];
                    chooseColor(i, j)
                    break;
                case 7:
                    td.innerHTML = figuresWhite1[j];
                    chooseColor(i, j)
                    break;
                case 8:
                    td.innerHTML = figuresWhite2[j];
                    chooseColor(i, j)
                    break;
                default:
                    td.innerText = emptyCell[j];
                    chooseColor(i, j)
                    break;
            }
        }
    }
    document.body.append(chessDesk);
}
chess();