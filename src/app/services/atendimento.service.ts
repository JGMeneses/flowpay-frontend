import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atendimento, Atendente } from '../models/atendimento.model';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  
  private readonly API = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  listarAtendentes(): Observable<Atendente[]> {
    return this.http.get<Atendente[]>(`${this.API}/atendentes`);
  }

  listarAtendimentos(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`${this.API}/atendimentos`);
  }

  listarFila(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(`${this.API}/atendimentos/monitoramento/fila`);
  }

finalizarAtendimento(id: number): Observable<void> {
    return this.http.patch<void>(`${this.API}/atendimentos/finalizar/${id}`, {});
  }

  criarAtendimento(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(`${this.API}/atendimentos`, atendimento);
  }
}