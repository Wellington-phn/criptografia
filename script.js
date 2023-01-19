            var input = document.querySelector('textarea#entradaTexto');
            var output = document.querySelector('textarea#saidaTexto');
            var imagem = document.querySelector('div#imagemInicial');
            var botaoCript = document.querySelector('input#botaoCript');
            var botaoDescript = document.querySelector('input#botaoDescript');
            var botaoCopiar = document.querySelector('input#botaoCopiar');

            var texto = null;

            output.style.display = 'none';
            botaoCopiar.style.display = 'none';

            function criptografar() {
                texto = input.value;

                if( texto === null ) {
                    botaoCopiar.style.display = 'none';
                    output.style.display = 'none';
                } else {
                    botaoCopiar.style.display = 'inline';
                    output.style.display = 'block';
                    imagem.style.display = 'none';
                }

                texto = texto.replaceAll( 'e', 'enter' );
                texto = texto.replaceAll( 'i', 'imes' );
                texto = texto.replaceAll( 'a', 'ai' );
                texto = texto.replaceAll( 'o', 'ober' );
                texto = texto.replaceAll( 'u', 'ufat' );

                output.value = texto;
                input.value = null;
            };

            function descriptografar() {
                texto = input.value;

                if( texto === null ) {
                    botaoCopiar.style.display = 'none';
                    output.style.display = 'none';
                } else {
                    botaoCopiar.style.display = 'inline';
                    output.style.display = 'block';
                    imagem.style.display = 'none';
                }

                texto = texto.replaceAll( 'enter', 'e' );
                texto = texto.replaceAll( 'ai', 'a' );
                texto = texto.replaceAll( 'imes', 'i' );
                texto = texto.replaceAll( 'ober', 'o' );
                texto = texto.replaceAll( 'ufat', 'u' );

                output.value = texto;
                input.value = null;
            };

            function copiar() {
                output.select();
                document.execCommand('copy');
                output.value = null;
                output.style.display = 'none';
                botaoCopiar.style.display = 'none';
                imagem.style.display = 'block'
            };

            botaoCript.onclick = criptografar;
            botaoDescript.onclick = descriptografar;
            botaoCopiar.onclick = copiar;

       
