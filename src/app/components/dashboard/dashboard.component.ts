import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoService } from '../../services/atendimento.service';
import { Atendimento, Atendente, Especialidade } from '../../models/atendimento.model';
import { forkJoin, interval, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  atendentes: Atendente[] = [];
  fila: Atendimento[] = [];
  atendimentos: Atendimento[] = [];
  exibirInputOutros = false;

  private pollSubscription?: Subscription;

  constructor(private service: AtendimentoService) {}

  ngOnInit(): void {
    this.atualizarDados();

    this.pollSubscription = interval(5000)
      .pipe(switchMap(() => this.service.listarAtendentes()))
      .subscribe(() => this.atualizarDados());
  }

  ngOnDestroy(): void {
    this.pollSubscription?.unsubscribe();
  }

  atualizarDados() {
    forkJoin({
      atendentes: this.service.listarAtendentes(),
      fila: this.service.listarFila(),
      atendimentos: this.service.listarAtendimentos()
    }).subscribe(res => {
      this.atendentes = res.atendentes;
      this.fila = res.fila;
      this.atendimentos = res.atendimentos;
    });
  }

  getAtendimentosDo(atendenteNome: string) { // Mude para receber o nome
    return this.atendimentos.filter(a => 
      a.nomeAtendente === atendenteNome && a.status === 'EM_ANDAMENTO'
    );
  }

  criarComEspecialidade(esp: Especialidade) {
    const novo: Atendimento = { 
      assunto: `Suporte Especializado: ${esp}`, 
      especialidade: esp,
      status: 'NA_FILA'
    };
    this.service.criarAtendimento(novo).subscribe(() => this.atualizarDados());
  }

  criarChamado(assunto: string) {
    if (!assunto.trim()) return;
    const novo: Atendimento = { 
      assunto: assunto, 
      status: 'NA_FILA' 
    };
    this.service.criarAtendimento(novo).subscribe(() => {
      this.atualizarDados();
      this.exibirInputOutros = false;
    });
  }

  finalizar(id: number) {
    this.service.finalizarAtendimento(id).subscribe(() => this.atualizarDados());
  }
}