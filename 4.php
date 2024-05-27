<?php
echo("<h1>4 задание</h1>");
$menu = [
    [
        'title' => 'Меню 1',
        'link' => 'menu_1',
        'children' => [[
            'title' => 'Подменю 1',
            'link' => 'sub-menu_1',
            'children' => [
                [
                    'title' => 'Подменю 1.1',
                    'link' => 'sub-menu_1-1'
                ]
            ]
        ]],
    ],
    [
        'title' => 'Меню 2',
        'link' => 'menu_2',
        'children' => [[
            'title' => 'Подменю 2',
            'link' => 'sub-menu_2'
            ]
        ]
    ],
    [
        'title' => 'Меню 3',
        'link' => 'menu_3',
    ]
];

function generateMenu($menu): void
{
echo '<ul>';
foreach ($menu as $submenu) {
    echo '<li>';
    echo "<a href='{$submenu['link']}'> {$submenu['title']} </a>";
    if (isset($submenu['children'])) {
        generateMenu($submenu['children']);
    }
    echo '</li>';
}
echo '</ul>';
}

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php generateMenu($menu)?>
</head>
<body>
</body>
</html>


