<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo 01 - PHP</title>
</head>
<body>
    <p>Oi sou o Bryan</p>

    <?php 
      print "<p>Oi sou o Bryan</p>";
      $nome = "Bryan";
      print "<p>Oi sou o $nome</p>";
      print "<p>Oi sou o ".$nome."</p>";
      phpinfo()
    ?>
</body>
</html>