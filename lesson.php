<?php
$title = 'Текущее время';
$text = 'Текущее время';
date_default_timezone_set('Asia/Yekaterinburg');

function getCurrentTime(): string
{
    $hours = date('H');
    $minutes = date('i');


    if (($hours > 4 && $hours < 21) || $hours == 0) {
        $hoursText = ' часов ';
    } elseif (($hours > 1 && $hours < 5) || ($hours > 21 && $hours < 25)) {
        $hoursText = ' часа ';
    } else {
        $hoursText = ' час ';
    }

    if ($minutes > 20 || $minutes < 10) {
        if ($minutes % 10 == 1)
            $minutesText = ' минута';
        else if ($minutes % 10 == 2 || $minutes % 10 == 3 || $minutes % 10 == 4)
            $minutesText = ' минуты';
        else
            $minutesText = ' минут';
    } else {
        $minutesText = ' минут';
    }

    return $hours . $hoursText . $minutes . $minutesText;
}

?>


<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title ?></title>
</head>
<body>
<h1><?php echo $text ?></h1>
<p>Текущее время: <?php print_r(getCurrentTime()) ?></p>
</body>
</html>