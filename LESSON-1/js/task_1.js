let quadraticEquation = ([a, b, c]) => {
    if (a === 0) {
        console.log('Это не квадратное уравнение, потому что а = 0 ');
        return console.log('');
    }
    let x1, x2, first, second, fird;
// Вывод квадратного уравнения в консоль
    switch (a) {
        case 1:
            first = 'x^2';
            break;
        case -1:
            first = '-x^2';
            break;
        default:
            first = a + 'x^2';
            break;
    }
    switch (b) {
        case 0:
            second = '';
            break;
        case 1:
            second = '+x';
            break;
        case -1:
            second = '-x';
            break;
        default:
            (b > 1) ? second = '+' + b + 'x' : second = b + 'x';
            break;
    }
    switch (c) {
        case 0:
            fird = '';
            break;
        default:
            (c > 0) ? fird = '+' + c : fird = c;
            break;
    }
    console.log(`Уравнение: ${first}${second}${fird} = 0`);
// Решение полного квадратного уравнения c вычислением Дискриминанта
    if ((a !== 0) && (b !== 0) && (c !== 0)) {
        const D = b * b - 4 * a * c;
        console.log('Дискриминант: ', D);
        if (D < 0) {                               // корней нет
            console.log('Корней нет, т.к. Дискриминант отрицательный');
            return console.log('');
        }
        if (D === 0) {                            // один корень
            x1 = -b / 2 * a;
            console.log('Корень:');
            console.log('x = ' + x1);
        }
        if (D > 0) {                              // два корня
            x1 = (-b + Math.sqrt(D)) / (2 * a);
            x2 = (-b - Math.sqrt(D)) / (2 * a);
            console.log('Корни:');
            console.log('x1 = ' + x1);
            console.log('x2 = ' + x2);
        }
        console.log('');
    }
// Решение неполного квадратного уравнения БЕЗ вычисления Дискриминанта
    if (b === 0 && c === 0) {
        console.log('Корень:');
        console.log('x = 0');
        console.log('');
    }
    if (b === 0 && c !== 0) {
        if ((-c / a) < 0) {
            console.log('Корней нет, т.к. квадрат не м.б. < 0');
        } else {
            x1 = Math.sqrt(-c / a);
            x2 = -x1;
            console.log('Корни:');
            console.log('x1 = ' + x1);
            console.log('x2 = ' + x2);
        }
        console.log('');
    }
    if (b !== 0 && c === 0) {
        x2 = -(b / a);
        console.log('Корни:');
        console.log('x1 = 0');
        console.log('x2 = ' + x2);
        console.log('');
    }
}
// данные из  задания ДЗ1
quadraticEquation([1, 0, -4]);

// данные из  статьи
quadraticEquation([1, -8, 12]);
quadraticEquation([5, 3, 7]);
quadraticEquation([1, -6, 9]);

quadraticEquation([1, -2, -3]);
quadraticEquation([-1, -2, 15]);
quadraticEquation([1, 12, 36]);

quadraticEquation([1, -7, 0]);
quadraticEquation([5, 0, 30]);
quadraticEquation([4, 0, -9]);

// тест
// a = 0 b = 0 c = 0
quadraticEquation([0, 0, 0]);
// a = 0 b = 0
quadraticEquation([0, 0, -4]);
quadraticEquation([0, 0, 4]);
// a = 0 c = 0
quadraticEquation([0, -4, 0]);
quadraticEquation([0, 4, 0]);
// b = 0 c = 0
quadraticEquation([-4, 0, 0]);
quadraticEquation([4, 0, 0]);
// a = 0
quadraticEquation([0, -5, -4]);
quadraticEquation([0, 5, -4]);
quadraticEquation([0, -5, 4]);
quadraticEquation([0, 5, 4]);
// b = 0
quadraticEquation([2, 0, 4]);
quadraticEquation([-2, 0, 4]);
quadraticEquation([2, 0, -4]);
quadraticEquation([-2, 0, -4]);
// c = 0
quadraticEquation([2, 5, 0]);
quadraticEquation([-2, 5, 0]);
quadraticEquation([2, -5, 0]);
quadraticEquation([2, 5, 0]);
// все коэффициенты !== 0
quadraticEquation([1, 1, -1]);
quadraticEquation([-1, -1, 1]);
quadraticEquation([-5, -5, -5]);
quadraticEquation([5, 5, 5]);




