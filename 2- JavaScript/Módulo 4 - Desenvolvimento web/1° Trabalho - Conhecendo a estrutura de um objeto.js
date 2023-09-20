var Banco = {
    conta: "321654-7",
    saldo: 5000,
    tipodeconta: "Polpança",
    agencia: "0001",

    buscarSaldo: function () {
        return this.saldo
    },

    deposito: function (valor) {
        if (valor > 0) {
            this.saldo += valor
            return "Depósito concluido, novo saldo: " + this.saldo
        } else {
            return "valor de depósito invalido"
        }
    },

    saque: function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor
            return "Saque efetuado com sucesso, novo saldo: " + this.saldo
        }else{
            return "Valor indisponivel."
        }
    },

    numerodaConta: function () {
        return this.conta
    }
}
console.log("Numero da sua conta:",Banco.numerodaConta())
console.log("saldo atual:", Banco.buscarSaldo())
console.log(Banco.deposito(1200))
console.log(Banco.saque(200))