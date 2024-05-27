<?php
echo("<h1>1 задание</h1>");

$i = 0;
do {
    if ($i == 0) {
        echo $i . ' - это ноль.';
    } elseif ($i % 2 == 0) {
        echo $i . ' - чётное число.';
    } else {
        echo $i . ' - нечётное число.';
    }
    echo '</br>';
    $i++;
} while ($i <= 10);
?>


<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    </body>
</html>