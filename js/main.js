
function CarregarFotoProduto(idProduto){
    var foto = "";
   switch (idProduto) {
        case 1:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="images/${1}.jpg"></div>` 
            document.getElementById("imagem-produto").innerHTML = foto;                            
            break;
        
        case 2:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${2}.jpg"></div>`    
            document.getElementById("imagem-produto").innerHTML = foto;
            break;
        
        case 3:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${3}.jpg"></div>` 
            document.getElementById("imagem-produto").innerHTML = foto;
            break;
        
        case 4:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${4}.jpg"></div>` 
            document.getElementById("imagem-produto").innerHTML = foto;
            break;   
        
        case 5:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${5}.jpg"></div>` 
            document.getElementById("imagem-produto").innerHTML = foto;
            break; 
        
        case 6:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${6}.jpg"></div>` 
            document.getElementById("imagem-produto").innerHTML = foto;
            break;  
        
        case 7:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${7}.jpg"></div>` 
            document.getElementById("imagem-produto").innerHTML = foto;
            break;   
        
        case 8:
            foto = foto + `<div  class="item"> <img id="foto-detalhe" src="../images/${8}.jpg"></div>` 
            document.getElementById("imagem-produto").innerHTML = foto;
            break;        
        default:
            break;
        }                
} 