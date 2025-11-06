import { Injectable } from '@angular/core';

export interface Aluno {
  _id?: number;
  nome: string;
  idade: number;
  curso: string;
  notas: number[];
}

@Injectable({
  providedIn: 'root'
})

export class AlunosServiceService {

  constructor() { }
}
