<?php
function loadImages($directory): void
{
    $thumbnails_directory = $directory . 'thumbnail/';
    $full_directory = $directory . 'full/';

    $thumbnails_files = scandir($thumbnails_directory);
    foreach ($thumbnails_files as $file) {
        $thumbnail_file_path = $thumbnails_directory . $file;
        $full_file_path = $full_directory . $file;

        if (is_file($thumbnail_file_path) && getimagesize($thumbnail_file_path)) {
            echo '<a href="' . $full_file_path . '" target="_blank"><div class="photo"><img src="' . $thumbnail_file_path . '" alt="' . $file . '"></div></a>';
        }
    }
}

function logInfo(): void
{
    if (!is_dir('logs/')) {
        mkdir('logs/');
    }
    $log = date('Y/m/d. H:i:s, e.') . PHP_EOL;
    $dest = 'logs/log.txt';
    if (!is_file($dest)) {
        $file = fopen($dest, 'w');
        fclose($file);
    }
    if (count(file($dest)) > 9) {
        $log_files_number = count(array_slice(scandir('logs'), 2)) - 1;
        rename($dest, 'logs/log' . $log_files_number . '.txt');
    }
    file_put_contents($dest, $log, FILE_APPEND);
}

logInfo();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<form method="post" enctype="multipart/form-data" action="upload.php">
    <input type="file" name="fileToUpload">
    <input type="submit" value="Загрузить" name="submit">
</form>
<div class="photos">
    <?php loadImages('uploads/'); ?>
</div>
</body>
</html>