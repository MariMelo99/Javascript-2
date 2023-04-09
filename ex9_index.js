<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="CP1-WEB/DEV" content="width=device-width, initial-scale=1.0">
    <title>CP1-WEB/DEV</title>
</head>
<body>
    <!DOCTYPE html>
<html>
<head>
	<title>Exemplo de conversão de variáveis com arredondamento</title>
	<script>
		function converterParaFloat() {
			var numeroString = document.getElementById("numeroString").value;
			var numeroFloat = parseFloat(numeroString.replace(",", ".")).toFixed(2);
			document.getElementById("resultado").innerHTML = "O número em float com duas casas decimais é: " + numeroFloat;
		}
	</script>
</head>
<body>
	<label for="numeroString">Digite um número:</label>
	<input type="text" id="numeroString">
	<button onclick="converterParaFloat()">Converter para float com duas casas decimais</button>
	<div id="resultado"></div>
</body>
</html>

