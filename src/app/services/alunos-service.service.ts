import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  private http = inject(HttpClient);
  private base = 'http://localhost:3000/alunos';

  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.base);
  }

  buscarPorId(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.base}/${id}`);
  }

  criar(aluno: Aluno): Observable<Aluno> {
    console.log(aluno);
    return this.http.post<Aluno>(this.base, aluno);
  }
  constructor() { }
}
