function parImpar (numero)
{
    if(numero % 2 === 0)
    {
        return "Número Par"
    }
    else
    { 
        return "Impar"
    }
    
}
var numero1 = 8
var res1 = parImpar(numero1);
console.log(res1)