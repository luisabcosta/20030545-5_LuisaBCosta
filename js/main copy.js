var sectionCarousel = document.getElementById("section-carousel"); 
var sectionDetalhes = document.getElementById("section-detalhes-produto"); 

function EsconderDetalhes() {
    
    sectionCarousel.style.display = "block";
    sectionDetalhes.style.display = "none";
        
}

function DetalhesProduto(idProduto){

    var produto, descricao, ingredientes, preco
    var foto = "";
    
    sectionCarousel.style.display = "none";
    sectionDetalhes.style.display = "block";   

   switch (idProduto) {
        case 1:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${1}.jpg"></div>` 
            produto = "Geléia de Morango" 
            descricao = "A geleia de morango, é feita com muito cuidado. É preparada em fogão a lenha e tem pequenos pedaços da fruta, dando uma sensação de geleia realmente caseira."
            ingredientes = "Ingredientes " + "Morango, açúcar, suco de limão e melado."  
            preco = "R$ 7,50"    
            
            document.getElementById("imagem-produto").innerHTML = foto;
            document.getElementById("nome-produto").innerHTML = produto;        
            document.getElementById("descricao-produto").innerHTML = descricao;        
            document.getElementById("ingredientes-produto").innerHTML = ingredientes;        
            document.getElementById("preco-produto").innerHTML = preco;                                   
            break;
        
        case 2:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${2}.jpg"></div>`    
            produto = "Pasta de Amendoim"
            descricao =	"A pasta de amendoim caseira mantém sua consistência e usa apenas o amendoim e um pouco de melado, para dar aquela adocicada de leve. Sua consistência é incrível!"
            ingredientes = "Amendoim e melado."
            preco = "R$ 7,50"
            
            document.getElementById("imagem-produto").innerHTML = foto;
            document.getElementById("nome-produto").innerHTML = `${produto}`;        
            document.getElementById("descricao-produto").innerHTML = `${descricao}`;        
            document.getElementById("ingredientes-produto").innerHTML = `${ingredientes}`;        
            document.getElementById("preco-produto").innerHTML = `${preco}`;        
            break;
        
        case 3:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${3}.jpg"></div>` 
            produto =	"Geléia de Cereja"
            descricao =	"Assim como a geleia de morango, a geleia de cereja é preparada no fogão a lenha e tem pequenos pedaços de cereja. Uma ótima experiencia de sabor e textura!"
            ingredientes =	"Cereja, açúcar, suco de limão e melado."
            preco = "R$ 7,50"

            document.getElementById("imagem-produto").innerHTML = foto;
            document.getElementById("nome-produto").innerHTML = `${produto}`;        
            document.getElementById("descricao-produto").innerHTML = `${descricao}`;        
            document.getElementById("ingredientes-produto").innerHTML = `${ingredientes}`;        
            document.getElementById("preco-produto").innerHTML = `${preco}`;        
            break;
        
        case 4:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${4}.jpg"></div>` 
            produto =	"Pasta de Castanha de Caju"
            descricao =	"Uma outra opção de pasta oleaginosa, a pasta de castanha de caju! É feita usando apenas as castanhas de caju torradas e um pouquinho de melado, para uma leve adocicada."
            ingredientes =	"Castanhas de caju e melado."
            preco = "R$ 7,50"

            document.getElementById("imagem-produto").innerHTML = foto;
            document.getElementById("nome-produto").innerHTML = `${produto}`;        
            document.getElementById("descricao-produto").innerHTML = `${descricao}`;        
            document.getElementById("ingredientes-produto").innerHTML = `${ingredientes}`;        
            document.getElementById("preco-produto").innerHTML = `${preco}`;        
            break;   
        
        case 5:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${5}.jpg"></div>` 
            produto =	"Torta de Morango"
            descricao =	"A torta de morango é vegana e não contém glúten. É feita com aveia e leite de amêndoas!"
            ingredientes =	"Morango, leite de amêndoas, aveia, açúcar, sal, azeite, amido de milho e essência de baunilha."
            preco = "R$ 20,90"
    
            document.getElementById("imagem-produto").innerHTML = foto;
            document.getElementById("nome-produto").innerHTML = `${produto}`;        
            document.getElementById("descricao-produto").innerHTML = `${descricao}`;        
            document.getElementById("ingredientes-produto").innerHTML = `${ingredientes}`;        
            document.getElementById("preco-produto").innerHTML = `${preco}`;        
            break; 
        
        case 6:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${6}.jpg"></div>` 
            produto =	"Torta de Amendoim e Castanhas"
            descricao =	"Uma torta recheada de amendoim com castanhas e um toque especial de frutas!"
            ingredientes =	"Amendoim, castanhas de caju, farinha de arroz, açúcar, açúcar de confeiteiro, sal, azeite, amido de milho e essência de baunilha."
            preco = "R$ 20,90"
        
            document.getElementById("imagem-produto").innerHTML = foto;
            document.getElementById("nome-produto").innerHTML = `${produto}`;        
            document.getElementById("descricao-produto").innerHTML = `${descricao}`;        
            document.getElementById("ingredientes-produto").innerHTML = `${ingredientes}`;        
            document.getElementById("preco-produto").innerHTML = `${preco}`;        
            break;  
        
        case 7:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${7}.jpg"></div>` 
            produto =	"Torta de Morango e Mirtilo"
            descricao =	"Nossa torta de morango e mirtilo é vegana, não contém glúten e o sabor é maravilhoso! Contém ainda castanhas de caju e amêndoas."
            ingredientes =	"Morango, mirtilo, castanhas de caju, amêndoas, farinha de arroz, açúcar, açúcar de confeiteiro, sal, azeite, amido de milho e essência de baunilha."
            preco = "R$ 20,90"
            
            document.getElementById("imagem-produto").innerHTML = foto;
            document.getElementById("nome-produto").innerHTML = `${produto}`;        
            document.getElementById("descricao-produto").innerHTML = `${descricao}`;        
            document.getElementById("ingredientes-produto").innerHTML = `${ingredientes}`;        
            document.getElementById("preco-produto").innerHTML = `${preco}`;        
            break;   
        
        case 8:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${8}.jpg"></div>` 
            produto =	"Torta de Amendoim"
            descricao =	"Torta recheada com pasta de amendoim e um toque de morango e mirtilo. Uma combinação deliciosa!"
            ingredientes =	"Pasta de amendoim, morango, mirtilo, farinha de arroz, açúcar, açúcar de confeiteiro, sal, azeite, amido de milho e essência de baunilha."
            preco = "R$ 20,90"
        
            document.getElementById("imagem-produto").innerHTML = foto;
            document.getElementById("nome-produto").innerHTML = `${produto}`;        
            document.getElementById("descricao-produto").innerHTML = `${descricao}`;        
            document.getElementById("ingredientes-produto").innerHTML = `${ingredientes}`;        
            document.getElementById("preco-produto").innerHTML = `${preco}`;        
            break;        
        default:
            break;
        }                
} 