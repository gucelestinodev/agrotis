import { UseFormRegister } from 'react-hook-form';

export interface Laboratorio {
  id: number;
  nome: string;
}

export interface Propriedade {
  id: number;
  nome: string;
  cnpj: string;
}


export interface FormData {
  nome: string;
  dataInicial: string;
  dataFinal: string;
  observacoes: string;
  propriedade: string | null;
  laboratorio: string | null;
}

export interface FetchProps {
  label: string;
  info: string;
  register: UseFormRegister<any>;
  required?: boolean;
  errorMessage?: string;
}
