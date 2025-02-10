    function copyCode(button) {
        // Encuentra el bloque de código dentro del mismo contenedor
        const codeBlock = button.parentElement.querySelector('code');
        
        // Crea un elemento temporal para copiar el texto
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = codeBlock.innerText;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
    
        // Cambia el texto del botón temporalmente
        button.textContent = 'Copiado!';
        setTimeout(() => {
        button.textContent = 'Copiar';
        }, 2000);
    }