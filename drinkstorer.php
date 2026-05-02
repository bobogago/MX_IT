<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MX IT - MENU</title>
    <link rel="stylesheet" href="css/headFoot.css">
</head>
<body>
<header>
    <div class="navbar">
        <div class="logo">
            <a href="index.html">
                <img src="imagens/mxitlogo.png" class="active" alt="mxit" width="80">
            </a>
        </div>
        <nav>

            <a href="mxit.html">MXIT</a>
            <a href="mxtpe.html">MXTPE</a>
            <a href="remx.html">REMIX</a>
        </nav>
    </div>
</header>
<main>
    Drink Done
    <a href="index.html">Go Home</a>
    <?php
    $drink = $_POST['myJSON'];
    file_put_contents("dados.txt", "$drink", FILE_APPEND);
    ?>
</main>
</body>
</html>
