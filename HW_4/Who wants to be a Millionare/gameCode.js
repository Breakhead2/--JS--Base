
function checkingAnswer(answer) {
    if (isNaN(answer) || !isFinite(answer)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (answer < 1 || answer > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}




var answer, check, money;
money = 0;

do {
    check = false;
    answer = +prompt(text.a00 + "Введите -1 для выхода из игры\n" + text.a1 + text.a2 + text.a3 + text.a4);
    if (answer == -1) {
        break;
    } else {
        check = checkingAnswer(answer);
    }
} while (!check);
switch (answer) { //сравнивниваем ответы
    case -1: alert('Спасибо за игру. Досвидания!');
        break;
    case 1:
    case 2: // ответы неверные, конец игры
    case 4:
        alert('Ответ неверный!\nПравильный ответ: ' + text.a3 + '\nВы выграли ' + money + ' рублей');
        break;
    case 3: // ответ верный, переходим ко 2 вопросу
        money += 100;
        alert('Ответ верный! \nВы выграли ' + money + ' рублей.');
        do { // всплывает окно со 2 вопросом
            check = false;
            answer = +prompt(text.b00 + "Введите -1 для выхода из игры\n" + text.b1 + text.b2 + text.b3 + text.b4);
            if (answer == -1) {
                break;
            } else {
                check = checkingAnswer(answer);
            }
        }
        while (!check);
        switch (answer) { // сравниваем ответы
            case 1:
            case 2:
            case 4:
                alert('Ответ неверный!\nПравильный ответ: ' + text.b3 + '\nВы выграли ' + money + ' рублей');
                break;
            case -1: alert('Спасибо за игру. Досвидания!');
                break;
            case 3: // ответ верный, переходим ко 3 вопросу
                money += 100;
                alert('Ответ верный! \nВы выграли ' + money + ' рублей.');
                do { // всплывает окно со 3 вопросом
                    check = false;
                    answer = +prompt(text.c00 + "Введите -1 для выхода из игры\n" + text.c1 + text.c2 + text.c3 + text.c4);
                    if (answer == -1) {
                        break;
                    } else {
                        check = checkingAnswer(answer);
                    }
                }
                while (!check);
                switch (answer) {
                    case -1: alert('Спасибо за игру. Досвидания!');
                        break;
                    case 1:
                    case 2: // неверные ответы
                    case 3:
                        alert('Ответ неверный!\nПравильный ответ: ' + text.c4 + '\nВы выграли ' + money + ' рублей');
                        break;
                    case 4:
                        money += 300;
                        alert('Ответ верный! \nВы выграли ' + money + ' рублей.');
                        do { // всплывает окно со 4 вопросом
                            check = false;
                            answer = +prompt(text.d00 + "Введите -1 для выхода из игры\n" + text.d1 + text.d2 + text.d3 + text.d4);
                            if (answer == -1) {
                                break;
                            } else {
                                check = checkingAnswer(answer);
                            }
                        }
                        while (!check);
                        switch (answer) {
                            case -1: alert('Спасибо за игру. Досвидания!');
                                break;
                            case 1:
                            case 2:
                            case 4:
                                alert('Ответ неверный!\nПравильный ответ: ' + text.d3 + '\nВы выграли ' + money + ' рублей');
                                break;
                            case 3:
                                money += 1500;
                                alert('Ответ верный! \nВы выграли ' + money + ' рублей.');
                                break;
                            default:
                                alert('Ошибка');
                        }
                        break;
                    default:
                        alert('Ошибка');
                }
                break;
            default:
                alert('Ошибка');
        } break;
    default:
        alert('Ошибка 2');
}
