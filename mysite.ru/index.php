<?php
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        <input type="text" name="firstname" id="">
        <input type="text" name="lastname" id="">
        <button>Go</button>
    </form>
    <?= $firstname ?>
    <?= $lastname ?>
    <? echo '<br>'; ?>

    <?php
    $f = "list.txt";
    $data = $firstname." ".$lastname;
    file_put_contents($f, $data, FILE_APPEND);
    $file = fopen('list.txt', 'r');
    while ($line = fgets($file)) {
        echo ($line);
        echo '<br>';
    }
    fclose($file);
    ?>
</body>

</html>