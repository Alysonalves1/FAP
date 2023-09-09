const CANDIDATOS = {
    daniloNom: "Danilo Farias",
    danilo: 889,
    egitoNom: "Marcos Egito",
    egito: 847,
    cleidianeNom: "Cleidiane Nunes",
    cleidiane: 515,
    brancoNom: "Branco",
    brancoNUm: 0
}

var qtvotDan = 0;
var qtvotEgi = 0;
var qtvotANE = 0;
var qtvotBranco = 0;
var qtvotNUlos = 0;
var op;

do {
    let voto = prompt(`Bem-vindo ao sistema de votação. 
    Candidatos: 
    ${CANDIDATOS.daniloNom} => ${CANDIDATOS.danilo}
    ${CANDIDATOS.egitoNom} => ${CANDIDATOS.egito}
    ${CANDIDATOS.cleidianeNom} => ${CANDIDATOS.cleidiane}
    ${CANDIDATOS.brancoNom} => ${CANDIDATOS.brancoNUm} 
    Vote: `);

    if (voto === null) {
        break; // Encerrar votação se o usuário cancelar
    }

    voto = Number(voto);

    if (isNaN(voto)) {
        alert("Por favor, insira apenas números.");
    } else if (voto === CANDIDATOS.danilo) {
        qtvotDan++;
    } else if (voto === CANDIDATOS.egito) {
        qtvotEgi++;
    } else if (voto === CANDIDATOS.cleidiane) {
        qtvotANE++;
    } else if (voto === CANDIDATOS.brancoNUm) {
        qtvotBranco++;
    } else {
        qtvotNUlos++;
    }

    op = prompt("Deseja continuar votando? (SIM | NÃO) ").toUpperCase();
} while (op === "SIM");

alert(`Votos:
${CANDIDATOS.daniloNom} = ${qtvotDan}
${CANDIDATOS.egitoNom} = ${qtvotEgi}
${CANDIDATOS.cleidianeNom} = ${qtvotANE}
${CANDIDATOS.brancoNom} = ${qtvotBranco}
Nulos = ${qtvotNUlos}`);

if(qtvotDan > qtvotANE && qtvotDan > qtvotEgi){
    alert("Danilo Farias venceu a eleição!")
}else if(qtvotEgi > qtvotANE && qtvotEgi > qtvotDan){
    alert("Marcos Egito venceu a eleição!")
}else if(qtvotANE > qtvotDan && qtvotANE > qtvotEgi){
    alert("Cleidiane Nunes venceu a eleição!")
}else{
    alert("Vencedor não definido.")
}
