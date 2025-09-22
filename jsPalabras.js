function convertir() {
            const palabra = document.getElementById("palabra").value.toLowerCase().trim();
            const resultado = document.getElementById("resultado");
            
            if (!palabra) {
                resultado.innerText = "Escribe algo";
                return;
            }
            
            const numero = textoANumero(palabra);
            resultado.innerText = numero;
        }
        
        function textoANumero(texto) {
            switch(texto) {
                case 'cero':
                    return 0;
                case 'uno':
                    return 1;
                case 'dos':
                    return 2;
                case 'tres':
                    return 3;
                case 'cuatro':
                    return 4;
                case 'cinco':
                    return 5;
                case 'seis':
                    return 6;
                case 'siete':
                    return 7;
                case 'ocho':
                    return 8;
                case 'nueve':
                    return 9;
                default:
                    return -1;
            }
        }