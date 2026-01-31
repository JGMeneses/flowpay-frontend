export type Especialidade = 'CARTAO' | 'PIX' | 'TROCAS' | 'OUTROS';

export interface Atendente {
  id: number;
  nome: string;
  time: string;
  especialidade: Especialidade;
  atendimentosAtivos: number;
}

export interface Atendimento {
  id?: number;
  assunto: string;
  status: string;
  nomeAtendente?: string;
  especialidade?: Especialidade;
}