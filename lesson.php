<?php
function first(): int
{
    $a = rand(-100, 100);
    $b = rand(-100, 100);
    if ($a >= 0 && $b >= 0) {
        return $a - $b;
    } else if ($a < 0 && $b < 0) {
        return $a * $b;
    } else {
        return $a + $b;
    }
}

function second($a): string
{
    switch ($a) {
        case 0:
            return '0 ';
        case 1:
            return '1 ';
        case 2:
            return '2 ';
        case 3:
            return '3 ';
        case 4:
            return '4 ';
        case 5:
            return '5 ';
        case 6:
            return '6 ';
        case 7:
            return '7 ';
        case 8:
            return '8 ';
        case 9:
            return '9 ';
        case 10:
            return '10 ';
        case 11:
            return '11 ';
        case 12:
            return '12 ';
        case 13:
            return '13 ';
        case 14:
            return '14 ';
        case 15:
            return '15';
        default:
            return 'Значение "a" не входит в промежуток 0-15';
    }
}

//third
function add($a, $b)
{
    return $a + $b;
}

function minus($a, $b)
{
    return $a - $b;
}

function multiply($a, $b): float|int
{
    return $a * $b;
}

function divide($a, $b): float|int
{
    if ($b == 0) {
        throw new ArithmeticError('На ноль нельзя делить');
    }
    return $a / $b;
}

function mathOperation($arg1, $arg2, $operation)
{
    return match ($operation) {
        '+' => add($arg1, $arg2),
        '-' => minus($arg1, $arg2),
        '*' => multiply($arg1, $arg2),
        '%' => divide($arg1, $arg2),
    };
}

function power($val, $pow)
{
    if($pow == 1){
        return $val;
    }else{
        return $val * power($val,$pow - 1);
    }
}
?>


<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>1 задание</h1>
        <p><?php print_r(first()) ?></p>

        <h1>2 задание</h1>
        <p><?php print_r(second(rand(0, 20))) ?></p>

        <h1>3 задание</h1>
        <p>Сумма: <?php print_r(add(1.2, 2)) ?></p>
        <p>Разность: <?php print_r(minus(1.2, 2)) ?></p>
        <p>Умножение: <?php print_r(multiply(1.2, 2)) ?></p>
        <p>Деление: <?php print_r(divide(1.2, 1)) ?></p>
        </body>

        <h1>4 задание</h1>
        <p>Сумма: <?php print_r(mathOperation(1.2, 2, '+')) ?></p>
        <p>Разность: <?php print_r(mathOperation(1.2, 2, '-')) ?></p>
        <p>Умножение: <?php print_r(mathOperation(1.2, 2, '*')) ?></p>
        <p>Деление: <?php print_r(mathOperation(1.2, 2, '%')) ?></p>

        <h1>5 задание</h1>
        <p>1 способ: <?php echo date('Y') ?></p>
        <?php
            $currYear = date('Y');
            $content = file_get_contents('index.html');
            $content = str_replace('{{ year }}', $currYear, $content);
        echo $content;
        ?>
        <?php require('index.php') ?>

        <h1>6 задание</h1>
        <p><?php echo power(10, 3)?></p>
    </body>
</html>