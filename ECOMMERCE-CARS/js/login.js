function validarFormulario() {
    // Obtém os valores dos campos usando o name do formulário e dos inputs
    var email = document.forms["loginForm"]["email"].value.trim();
    var senha = document.forms["loginForm"]["senha"].value;

    // Validação do campo de E-mail
    if (email == "") {
        alert("O campo E-mail deve ser preenchido.");
        return false; // Trava o envio
    }

    // Validação do campo de Senha
    if (senha == "") {
        alert("O campo Senha deve ser preenchido.");
        return false; // Trava o envio
    }

    // Validação complementar: tamanho mínimo da senha
    if (senha.length < 6) {
        alert("A senha deve conter no mínimo 6 caracteres.");
        return false; // Trava o envio
    }

    // Se passar por todas as validações, o formulário é enviado
    alert("Validação concluída com sucesso! Entrando na Aureon Motors...");
    return true; // Permite o envio
}
