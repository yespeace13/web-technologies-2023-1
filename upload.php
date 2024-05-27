<?php
$target_dir = "uploads/full/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
$existError = false;

if (isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if ($check === false) {
        echo "Файл не является изображением.";
        $existError = true;
    }
}

if (!$existError && $_FILES["fileToUpload"]["size"] > 500000) {
    echo "Файл слишком большой.";
    $existError = true;
}

if (file_exists($target_file)) {
    echo "Файл уже загружен.";
    $existError = true;
}

if (!$existError && $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
    echo "Поддерживаются только jpg и png форматы.";
    $existError = true;
}

if (!$existError && move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {

    if ($imageFileType == "jpg" || $imageFileType == "jpeg") {
        $img = imagecreatefromjpeg($target_file);
        $thumbnail = imagescale($img, 150);
        imagejpeg($thumbnail, 'uploads/thumbnail/' . basename($_FILES["fileToUpload"]["name"]));
    }
    if ($imageFileType == "png") {
        $img = imagecreatefrompng($target_file);
        $thumbnail = imagescale($img, 150);
        imagepng($thumbnail, 'uploads/thumbnail/' . basename($_FILES["fileToUpload"]["name"]));
    }
    header('Location: ' . 'index.php');
    die();
}
