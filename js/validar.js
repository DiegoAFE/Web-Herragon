var textareaID = document.getElementById('floatingTextArea');

textareaID.addEventListener('keypress', function validar(){
    textareaID.classList.add('textAreaValid');
});
textareaID.addEventListener('blur', function validar2() {
    if(textareaID.value == ''){
        textareaID.classList.remove('textAreaValid');
    }
});