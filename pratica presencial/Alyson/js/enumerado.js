const CANDIDATOS = {
    daniloNom : "Danilo Farias",
    danilo : 889,
    egitoNom : "Marcos Egito",
    egito : 847,
    cleidianeNom : "Cleidiane Nunes",
    cleidiane : 515,
    brancoNom : "branco",
    brancoNUm : 0
}

    var qtvotDan = 0;
    var qtvotEgi = 0;
    var qtvotANE = 0;
    var qtvotBranco = 0;
    var qtvotNUlos = 0;
    var voto;
    var testeletra
do {

    //zeresima(qtvotDan,qtvotEgi,qtvotANE,qtvotBranco,qtvotNUlos)
    do {
        let testeletra= false;
        voto = prompt(`Bem-vindo ao sistema de votação. candidatos: 
    ${CANDIDATOS.daniloNom} => ${CANDIDATOS.danilo}
    ${CANDIDATOS.egitoNom} => ${CANDIDATOS.egito}
    ${CANDIDATOS.cleidianeNom} => ${CANDIDATOS.cleidiane}
    ${CANDIDATOS.brancoNom} => ${CANDIDATOS.brancoNUm} 
    Vote: `);
        for(let i in voto){
            if(isNaN(Number(voto[i]))){
                testeletra = true;
            }
        }
    
    } while (testeletra);
    voto = Number(voto)
    if(voto === CANDIDATOS.danilo){
        qtvotDan++;
    }else if(voto === CANDIDATOS.egito){
        qtvotEgi++
    }else if(voto === CANDIDATOS.cleidiane){
        qtvotANE++;
    }else if(voto === CANDIDATOS.brancoNUm){
        qtvotBranco++;
    }else{
        qtvotNUlos++;
    }
    

    op = prompt("Deseja finalizar a votação? (SIM | NÃO) ").toUpperCase();
} while (op === "NÃO" || op === "NAO");

alert(`votos:
${CANDIDATOS.daniloNom} = ${qtvotDan}
${CANDIDATOS.egitoNom} = ${qtvotEgi}
${CANDIDATOS.cleidianeNom} = ${qtvotANE}
${CANDIDATOS.brancoNom} = ${qtvotBranco}
Nulos = ${qtvotNUlos}`);

if (qtvotDan > qtvotEgi && qtvotDan > qtvotANE) {
    alert(`${CANDIDATOS.daniloNom} eleito!`);
}else if (qtvotEgi > qtvotANE) {
    alert(`${CANDIDATOS.qtvotEgi} eleito!`)
} else if(qtvotANE > qtvotDan){
    alert(`${CANDIDATOS.cleidianeNom} eleito"`)
}else{
    alert("Eleição indefinida")
}