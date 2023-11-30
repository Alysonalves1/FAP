export class SistemaSeguranca {

    private static instancia: SistemaSeguranca | null = null;
    private senhaDaBase: string = "123";

    private constructor() {
    };

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia
    }

    public acessarBase(senha: string): void {
        if (senha === this.senhaDaBase) {
            console.log("Acesso concedido!\n")
        }else{
            console.log("Acesso negado, senha incorreta\n")
        }
    }
}