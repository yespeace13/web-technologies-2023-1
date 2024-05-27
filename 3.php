<?php
echo("<h1>3 задание</h1>");

function transliterate($str): string
{
    $letters = array(
        'а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g',
        'д' => 'd', 'е' => 'ye', 'ё' => 'yo', 'ж' => 'zh',
        'з' => 'z', 'и' => 'i', 'й' => 'j', 'к' => 'k', 'л' => 'l', 'м' => 'm',
        'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's',
        'т' => 't', 'у' => 'u', 'ф' => 'f', 'х' => 'kh', 'ц' => 'ts',
        'ч' => 'ch', 'ш' => 'sh', 'щ' => 'tch', 'ъ' => '"', 'ы' => 'y',
        'ь' => '`', 'э' => 'eh', 'ю' => 'yu', 'я' => 'ya'
    );
    $res = '';


    $textChars = preg_split('//u', $str, -1, PREG_SPLIT_NO_EMPTY);
    foreach($textChars as $char){
        $res .= array_key_exists($char, $letters) ? $letters[$char] : $char;
    }
    return $res;
}

$text = 'какой-то текст';
echo transliterate($text);
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

