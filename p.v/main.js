let valor= prompt("informe o valor do seu produto")
let valordesconto1=(valor*0.9)
let valordesconto2=(valor*0.6)
valordesconto3=(valor/2)
if (valor<=100) {alert("produto sem desconto")
    
}
if (valor<=200) {alert("valor do produto com 10% de desconto é:"+valordesconto1)
    
}
if (valor<=500) { alert("o produto com 40%de desconto fica:"+valordesconto2)
    
}
 else {alert(" o valor do produto com 50% de desconto fica:"+valordesconto3)
    
}

