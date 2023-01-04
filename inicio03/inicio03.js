var botoes = document.querySelectorAll('.botaoInicio');
var sobreMim =  document.querySelector('#sobreMim');
var historicoProfissional = document.querySelector('#historicoProfissional');
var certificados = document.querySelector('#certificados');
var projetos = document.querySelector('#projetos');


for(itens in botoes){
    var botao02 = botoes[itens];
     botao02.addEventListener('click', function(e)
     {
          

        if(e.target.id == "sobreMimBtn" && sobreMim.classList.contains('displayNone')){
            sobreMim.classList.remove('displayNone');
            sobreMim.classList.add('displayBlock');

            historicoProfissional.classList.remove('displayBlock');
            historicoProfissional.classList.add('displayNone');

            document.querySelector('#historicoProfBtn').classList.remove('botaoPressionado');
            document.querySelector('#certificadosBtn').classList.remove('botaoPressionado');
            document.querySelector('#projetosPessoaisBtn').classList.remove('botaoPressionado');

            e.target.classList.add('botaoPressionado');
        } else{
            sobreMim.classList.remove('displayBlock');
            sobreMim.classList.add('displayNone');

            e.target.classList.remove('botaoPressionado');
        }






        if(e.target.id == "historicoProfBtn"){
            if(historicoProfissional.classList.contains('displayNone')){
                historicoProfissional.classList.remove('displayNone');
                historicoProfissional.classList.add('displayBlock');

                e.target.classList.add('botaoPressionado');

                document.querySelector('#sobreMimBtn').classList.remove('botaoPressionado');
                document.querySelector('#certificadosBtn').classList.remove('botaoPressionado');
                document.querySelector('#projetosPessoaisBtn').classList.remove('botaoPressionado');
            }else{
                historicoProfissional.classList.remove('displayBlock');
                historicoProfissional.classList.add('displayNone');

                e.target.classList.remove('botaoPressionado');

            }
         }



         if(e.target.id == "certificadosBtn" && certificados.classList.contains('displayNone')){
            certificados.classList.remove('displayNone');
            certificados.classList.add('displayBlock');

            historicoProfissional.classList.remove('displayBlock');
            historicoProfissional.classList.add('displayNone');

            e.target.classList.add('botaoPressionado');

            document.querySelector('#sobreMimBtn').classList.remove('botaoPressionado');
            document.querySelector('#historicoProfBtn').classList.remove('botaoPressionado');
            document.querySelector('#projetosPessoaisBtn').classList.remove('botaoPressionado');

         } else{
            certificados.classList.add('displayNone');
            certificados.classList.remove('displayBlock');

           
         }


         if(e.target.id == "projetosPessoaisBtn" && projetos.classList.contains('displayNone')){
            projetos.classList.remove('displayNone');
            projetos.classList.add('displayBlock');

            historicoProfissional.classList.remove('displayBlock');
            historicoProfissional.classList.add('displayNone');

            document.querySelector('#sobreMimBtn').classList.remove('botaoPressionado');
            document.querySelector('#historicoProfBtn').classList.remove('botaoPressionado');
            document.querySelector('#certificadosBtn').classList.remove('botaoPressionado');

            e.target.classList.add('botaoPressionado');

         } else{
            projetos.classList.remove('displayBlock');
            projetos.classList.add('displayNone');
            projetos.classList.add('displayNone2');
            
         }




        });
    
}





/**  
        if(e.target.id == "historicoProfBtn"){
            if(historicoProfissional.style.display == "none"){
                historicoProfissional.style.display = "block"
            } else{
                historicoProfissional.style.display = "none"
            }
        }
    
     
    }
}

 */