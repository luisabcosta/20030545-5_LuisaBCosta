<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/owl/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/home-produtos.css">
    <link rel="stylesheet" href="css/informacoes-produtos.css">
    <link rel="stylesheet" href="css/contato-e-localizacao.css">
    <link rel="stylesheet" href="css/quem-somos.css">
    <title>Luna Luni Doces</title>
</head>
<body>
    <div class="container">
        <div class="header">
            Luna Luni Doces
        </div>
        <nav class="nav-bar">
            <a href="index.php">HOME</a>
            <a href="index.php?pagina=pages/quem-somos.php">QUEM SOMOS</a>
            <a href="index.php?pagina=pages/contato-e-localizacao.php">CONTATO E LOCALIZAÇÃO</a>
        </nav>
        
        <main class="pages-included">
            <?php
            if (isset($_GET["pagina"]) && !empty($_GET["pagina"])) {
                $pagina = $_GET["pagina"];
                include ($pagina);
            } else{
                include ("./pages/home-produtos.php");
            }
            ?>
        </main>

        <div class="footer">
            <span id="nome-aluna">Luísa Baggio Costa</span> 
            RA: 20030545-5 - 
            Superior de Tecnologia em Sistemas para Internet - Unicesumar
        </div>
    </div>
    <script type="text/javascript" src="js/owl/jquery.min.js"></script>
    <script type="text/javascript" src="js/owl/owl.carousel.min.js"></script>
    <script type="text/javascript" src="js/owl/owl-setup.js"></script> 
    <script type="text/javascript" src="js/main.js"></script>

</body>
</html>