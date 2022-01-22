function encriptar() {
    let btn = document.getElementById("btn-encriptar");
    btn.addEventListener("click", function() {
        event.preventDefault();
        var caja = document.getElementById("input-texto").value;
        while ("#input-texto.value".length > 0) {
            if ("#input-texto.value".length > 0) {
                caja = caja.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
            }
            //limpiar el input
            document.getElementById("input-texto").value = "";
            //mostrar el texto encriptado 
            var textoMensaje = document.querySelector("#msg");
            textoMensaje.value = caja;
            break;
        }
    });
}
encriptar();

function desencriptar() {
    let btn = document.getElementById("btn-desencriptar")
    btn.addEventListener("click", function() {
        event.preventDefault();
        var caja = document.getElementById("input-texto").value
        while ("#input-texto.value".length > 0) {
            if ("#input-texto.value".length > 0) {
                caja = caja.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
                //limpiar el input
                document.getElementById("input-texto").value = "";
                //mostrar el texto encriptado y desencriptado
                var textoMensaje = document.querySelector("#msg");
                textoMensaje.value = caja;
                break;
            }
        }
    });
}
desencriptar();

//función para copiar el texto encriptado y desencriptado
function copyToClipBoard() {
    var content = document.getElementById('msg');
    content.select();
    document.execCommand('copy');
    alert("el texto ha sido copiado!!");
}