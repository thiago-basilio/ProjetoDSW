var minhaImagem = document.querySelectorAll("img");


minhaImagem[0].onclick = function(){

	var meuLocal = minhaImagem[0].getAttribute('src');
	if(meuLocal ===	'imagens/imagem.svg'){
		minhaImagem[0].setAttribute ('src', 'imagens/terceira-imagem.jpg');
	} else {
		minhaImagem[0].setAttribute ('src', 'imagens/imagem.svg');
	}

}

minhaImagem[1].onclick = function(){

	var meuLocal = minhaImagem[1].getAttribute('src');
	if(meuLocal ===	'imagens/imagem.svg'){
		minhaImagem[1].setAttribute ('src', 'imagens/segunda-imagem.jpg');
	} else {
		minhaImagem[1].setAttribute ('src', 'imagens/imagem.svg');
	}

}  

var meuBotao = document.querySelector('button');
var meuTitulo = document.querySelector('h1');

function mudaTituloPrincipal (){
	var nomeUsuario = prompt('Por favor informe seu nome.');
	meuTitulo.textContent = 'Bem vindo a minha página web ' + nomeUsuario;
	localStorage.setItem('nome', nomeUsuario);
}

if(!localStorage.getItem('nome')){
	mudaTituloPrincipal();
} else {
	var ultimoUsiario = localStorage.getItem('nome');
	meuTitulo.textContent = 'Bem vindo a minha página web ' + ultimoUsiario;
}

meuBotao.onclick = function(){

	mudaTituloPrincipal();

}

