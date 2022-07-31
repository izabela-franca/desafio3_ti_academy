function adicionarElementos(produtos){

    //Mapeando os elementos
    const listaProdutos = document.getElementById("produtos");  

    //Adicionando elementos dinamicamente
    for( let pro of produtos ){
        const filhoLi = document.createElement("li");
    
        for( let listaP in pro){
            if (listaP == "descricao"){
                listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
            } else {
                listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP]);
            }
        }
    }
}
  

function adicionarCesta(){
    
    //Mapeando os elementos 
    const listaFrutas = document.querySelectorAll("#produtos > li");
    const addCestaCliente =  document.querySelector("#cestaDoCliente");
    const valorCompras = document.querySelector("#mostraTotalCompra")
    
    //Declarando variáveis 
    let cestaCliente = [];
    let total = 0;

    //Adicionando elementos na cesta ao serem clicados
    for (let produto of listaFrutas){
        produto.addEventListener("click", function(){
            if(cestaCliente.indexOf(produto) == -1){
                cestaCliente.push(produto)
                let addProduto = document.createElement("li");
                addCestaCliente.appendChild(addProduto).textContent = produto.textContent;
                total += Number(produto.dataset.preco);
            } else {
                alert(`O item ${produto.textContent} já está na sua cesta.`);
            }
            valorCompras.value = total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
        });
    };
}

export {adicionarElementos, adicionarCesta};