import { Cliente } from "./cliente";

export interface Forum {
    idAgencia?: number;
    cliente?: Cliente;
    titulo?: string;
    conteudo?: string;
}