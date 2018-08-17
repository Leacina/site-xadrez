<?php
    $assunto = "Inscrição do Circuito Içarense";

    $corpo = "
        Nome: "               .$_POST['nome']."
        Clube: "              .$_POST['clube']."
        Data de nascimento:"  .$_POST['dataNascimento']."
        Divisão: "            .$_POST['divisao']."
        Sexo: "               .$_POST['sexo']." 
    ";

    mail('giovaneleacina@gmail.com',$assunto,$corpo,'From:contato@teste.com');
    header("Refresh: 0; index.html");

?>