let nomeHeroi = "Hércules"
let xPHeroi = 9999
let nivelHeroi = ""

switch (true) {
	case xPHeroi <= 1000:
    nivelHeroi = "Ferro";
    break
    
    case xPHeroi >= 1001 && xPHeroi <= 2000:
    nivelHeroi = "Bronze";
    break
    
    case xPHeroi >= 2001 && xPHeroi <= 5000:
    nivelHeroi = "Prata";
    break
    
    case xPHeroi >= 5001 && xPHeroi <= 7000:
    nivelHeroi = "Ouro";
    break
    
    case xPHeroi >= 7001 && xPHeroi <= 8000:
    nivelHeroi = "Platina";
    break
    
    case xPHeroi >= 8001 && xPHeroi <= 9000:
    nivelHeroi = "Ascendente";
    break
    
    case xPHeroi >= 9001 && xPHeroi <= 10000:
    nivelHeroi = "Imortal";
    break
    
    case xPHeroi >= 10001:
    nivelHeroi = "Radiante";
    break
     
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi)
