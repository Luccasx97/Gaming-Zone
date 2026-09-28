// Aguarda o documento HTML estar pronto
$(document).ready(function() {

    // 1. Botão "Explorar Produtos" no Banner - rola suavemente até Destaques
    $("#btn-explorar").click(function() {
        $('html, body').animate({
            scrollTop: $("#destaques").offset().top - 70
        }, 800);
    });

    // 2. Botões "Comprar" (seção Destaques) - adiciona ao carrinho
    $(".btn-comprar").click(function() {
        let produto = $(this).closest('.card').find('.card-title').text() || "Produto";
        alert(`🎮 ${produto} adicionado ao carrinho com sucesso!`);
    });

    // 3. Botões "Ver mais" (seção Novidades) - visualiza produto
    $(".btn-ver-mais").click(function() {
        alert("🖼️ Visualizando produto em tela cheia (simulação)");
    });

    // 4. Imagens da Galeria - visualiza imagem
    $(".galeria-img").click(function() {
        alert("🖼️ Visualizando imagem em tela cheia (simulação)");
    });

    // 5. Validação do Formulário de Login
    $("#form-login").submit(function(event) {
        event.preventDefault();

        let email = $("#email").val().trim();
        let senha = $("#senha").val().trim();

        if (email === "" || senha === "") {
            alert("⚠️ Por favor, preencha todos os campos.");
            return;
        }

        if (senha.length < 6) {
            alert("⚠️ A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        alert(`✅ Login realizado com sucesso!\nBem-vindo, ${email}`);
        window.location.href = "index.html";
    });

    // 6. Link "Cadastre-se" na página de login
    $("#link-cadastro").click(function(event) {
        event.preventDefault();
        alert("📝 Funcionalidade de cadastro em desenvolvimento (simulação)");
    });

});