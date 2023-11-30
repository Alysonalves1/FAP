import { SistemaSeguranca } from "./SistemaSeguranca";
const agente = SistemaSeguranca.getInstance();

agente.acessarBase("123");
agente.acessarBase("1234");
