function addProduct() {
    // Obtém os valores do formulário
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;

    // Cria um objeto produto com os valores do formulário
    let product = {
        name: productName,
        price: productPrice
    };

    // Envia a requisição POST para o servidor
    fetch('/addProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(response => {
        if (response.ok) {
            alert('Produto cadastrado com sucesso!');
        } else {
            alert('Erro ao cadastrar produto.');
        }
    })
    .catch(error => console.error('Erro:', error));
}