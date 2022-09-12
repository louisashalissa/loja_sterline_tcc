const items = [
    {
        id: 0,
        nome: 'camiseta',
        img: 'img/camisa.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'calça',
        img: 'img/calça.jpeg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'calçado',
        img: 'img/calçado.jpeg',
        quantidade: 0
    },
]

inicialijarloja = () => {
    var containerProdutos = document.getElementById('produto')
    items.map((val)=>{
        containerProdutos.innerHTML += `
        <div> 
        <img src="`+val.img+`"/>  
        <p>`+val.nome+`</p>
        <a key="`+val.id+`" href="detalhe.html" id="carrinho">Detalhe do Produto</a> 
        </div>   
        `;
         })
        }

        inicialijarloja();

    atualizarCarrinho = () => {
        var containerCarrinho = document.getElementById('carrinho')
        containerCarrinho.innerHTML ="";
    items.map((val)=>{
        if(val.quantidade >0){
            containerCarrinho.innerHTML += `
            <p>`+val.nome+` | quantidade:`+val.quantidade+`</p>  
            <hr> 
            `;
        }
        
         })
    }

