let dom = document;

let titulo = document.getElementById("titulo").value;

console.log(titulo);


function submeter(){
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    console.log(cpf);
    console.log(validaCPF(cpf));

}

function validaCPF(cpf) {
    
    if(cpf == ""){
        alert("Campo CPF nao pode ser vazio");
        return false;
    }

    cpf = cpf.trim();

    if(/[a-zA-Z]/.test(cpf)){
        alert("CPF nâo pode conter letras");
        return false;
    }

    if(!/[\d.-]+$/.test(cpf)){
        alert("CPF so pode conter numeros, '-' ou '.'");
        return false;
    }

    if(cpf.length != 11 && cpf.length != 14){
        alert("Formato inválido");
        return false;
    }

    let soma = 0;

    for(let i=1; i<=9;i++){
        soma = soma + (cpf.charAt(i-1) * (10 -(i-1)));
    }

    let resto = soma % 11;
    
   if(resto < 2){
        if(cpf.charAt(9) != 0 ){
            alert("CPF Inválido!");
            return false;
        }
        return true;
   }    

   let digitoverificador1 = 11 - resto;
   if(digitoverificador1 != cpf.charAt(9)){
    alert("CPF Inválido!");
    return false;

   }


    return true;
}