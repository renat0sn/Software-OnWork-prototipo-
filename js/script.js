$(document).ready(() => {
	$('.item-barra-lateral').click(function() {
		let it = (parseInt($(this).attr('id'), 10)%4)+1
		$('#chat-1, #chat-2, #chat-3, #chat-4').css('display', 'none')
		switch(it){
			case 1:
				$('#chat-2').css('display', 'flex')
				break
			case 2:
				$('#chat-3').css('display', 'flex')
				break
			case 3:
				$('#chat-4').css('display', 'flex')
				break
			case 4:
				$('#chat-1').css('display', 'flex')
				break
		}
	})

	$('.criar').click(function() {
		if($('#nome-canal').val() == ""){
			$('#erro-input').fadeIn()
		}
		else{
			$('#erro-input').hide()
			$('#janela-criar-canal').css('pointer-events', 'none').css('opacity', '0.5')
			$('#tela-confirmar-add').css('pointer-events', 'auto').css('display', 'block')
			let nomeCanal = $('#nome-canal').val()
			$('#nomeDoCanal').html(nomeCanal)
			if($('input[name="radio"]:checked').val() == 'Público'){
				$('#privacidade').html('Canal Público')
			}
			else{
				$('#privacidade').html('Canal Privado')
			}			
		}
	})
	$('#voltar').click(function() {
		$('#tela-confirmar-add').css('display', 'none')
		$('#janela-criar-canal').css('pointer-events', 'auto').css('opacity', '1')
	})
	$('#criar-canal').click(function() {
		$('#tela-confirmar-add').css('pointer-events', 'none').css('opacity', '0.5')
		$('#tela-add-confirmado').css('pointer-events', 'auto').css('opacity', '1')
	})
	$('#avancar').click(function() {
		$('#janela-criar-conf').css('pointer-events', 'none').css('opacity', '0.4')
		$('#tela-configurar').css('pointer-events', 'auto').css('display', 'block')
	})
	$('.btn-habilitar').click(function(){
		if($(this).hasClass('btn-vermelho-transition')){
			$(this).removeClass('btn-vermelho-transition')
			$(this).addClass('btn-verde-transition')
			$(this).html('Habilitado')
			if($(this).attr('id') == 'btn-mic'){
				$('#config-mic').removeClass('opacity-zero')
			}
			else{
				$('#config-fone').removeClass('opacity-zero')
			}
		}
		else{
			$(this).removeClass('btn-verde-transition')
			$(this).addClass('btn-vermelho-transition')
			$(this).html('Desabilitado')
			if($(this).attr('id') == 'btn-mic'){
				$('#config-mic').addClass('opacity-zero')
			}
			else{
				$('#config-fone').addClass('opacity-zero')
			}
		}
	})

	$('#mic, #video').click(function(){
		let id = $(this).attr('id')
		$(this).toggleClass('btn-verde btn-vermelho')
		if(id == 'mic'){
			$(this).find('i').toggleClass('fa-microphone fa-microphone-slash')
		}
		else{
			$(this).find('i').toggleClass('fa-video fa-video-slash')
		}
	})

	$('#voltar').click(function(){
		$('#tela-confirma-encerrar').css('pointer-events', 'none').css('display', 'none');
		$('#janela-conf').css('pointer-events', 'auto').css('opacity', '1');
	})
	$('.show-usuarios').find('button').click(function(){
		$('#tela-confirma-encerrar').css('pointer-events', 'auto').css('display', 'block');
		$('#janela-conf').css('pointer-events', 'none').css('opacity', '0.4');
	})
	$('#tela-share').find('button').click(function(){
		$('#tela-confirma-encerrar').css('pointer-events', 'auto').css('display', 'block');
		$('#janela-conf').css('pointer-events', 'none').css('opacity', '0.4');
	})
	$('#conf-canal').click(function(){
		$('#criar-conf-canal').css('pointer-events', 'auto').css('display', 'block');
		$('#tela-canal').css('pointer-events', 'none').css('opacity', '0.4');
	})
	$('.botao-ferramenta').click(function(){
		$('.botao-ferramenta').not(this).css('background', 'gray')
		if($(this).css('background-color') == 'rgb(255, 255, 255)'){
			$(this).css('background', 'gray')
		}
		else{
			$(this).css('background', 'white')
		}
	})

	$('#dia-de-hoje').click(function(){
		let data = new Date()
	console.log(data.getDate())
	})
	
	let atualTarefa = -1
	$(document).on('click', '#lista-tarefas div', function(){
		let tarefa = $(this).text()
		$('#descricao-atividades').show();
		$('#concluir-tarefa').css('display', 'flex');
		$('#info-tarefas').css('display', 'flex');
		$('#titulo-tarefa').text(tarefa)

		let atividade = $(this).attr('id')
		console.log()
		if(atualTarefa != atividade){
			let random = Math.floor(Math.random()*112)
			let traco = ''
			for(let i=0; i<random; i++){
				traco += '-'
			}
			$('#traco-descricao').html(traco)
			

			random = Math.floor(random/6)
			traco = ''
			for(let i=0; i<random; i++){
				traco += '-'
			}
			$('#traco-tipo').html(traco)
			atualTarefa = $(this).attr('id')
		}
		


	})

	let diaAtual = -1
	$(document).on('click', '.dia', function(){
		let day = parseInt($(this).html(), 10)
		if(day != diaAtual){
			$('.dia').css('background', 'white')
			$(this).css('background', '#bdffd2')
			$('#descricao-atividades').hide();
			$('#data').html(day + "/11/2020");
			$('#lista-tarefas div').remove();
			let random = Math.floor(Math.random()*15)
			for(let i=0; i<random; i++){
				$('#lista-tarefas').append('<div id="' + i + '"class="item-barra-lateral item-transition desabilitar-selecao">Atividade '+i+'</div>')
			}
			diaAtual = day;
		}
	})

	$(document).on('click', '#concluir-tarefa', function(){
		$('#confirmar-concluir-tarefa').show()
		$('#tarefa-concluir').html('Atividade ' + atualTarefa)
		
	})
	$(document).on('click', '#btn-concluir-tarefa', function(){
		$('#confirmar-concluir-tarefa').hide()
		$('#' + atualTarefa).remove()
		$('#descricao-atividades').hide();
	})
	$(document).on('click', '#confirmar-concluir-tarefa .fa-times', function(){
		$('#confirmar-concluir-tarefa').hide()
	})
	$(document).on('click', '#selecao-notificar', function(){
		$(this).toggleClass('bg-branco bg-vd')
		if($(this).hasClass('bg-vd')){
			$('select').removeAttr('disabled')

		}
		else{
			$('#enabledDisabled select').attr('disabled', 'disabled')
			$('#erro-notificar').hide()
		}
	})
	$(document).on('click', '#a', function(){
		$('#tela-confirmar-share').css('display', 'block')
	})
	$(document).on('click', '#b', function(){
		$('#tela-confirmar-stopshare').css('display', 'block')
	})
	$(document).on('click', '#btn-criar-tarefa', function(){
		if($('#selecao-notificar').hasClass('bg-vd')){
			let dia = $('#d option:selected').val()
			let mes = $('#m option:selected').val()
			let hora = $('#h option:selected').val()
			if(dia == 'Dia' || mes == 'Mês' || hora == 'Horário'){
				$('#erro-notificar').show()
			}
			else{
				$('#tela-add-confirmado-tarefa').show()
				$('#janela-criar-tarefa').css('pointer-events', 'none').css('opacity', '0.5')
				$('#erro-notificar').hide()
			}
		}
		else if($('#nome-canal').val() != ""){
			$('#tela-add-confirmado-tarefa').show()
			$('#janela-criar-tarefa').css('pointer-events', 'none').css('opacity', '0.5')
		}
	})
})