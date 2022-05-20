import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

//EventEmitter = que conseguirá propagar o dado
// <> jeito de tipar e Any -> é tipo de valor de variavel mais geral(não é atriuidade valores de obj, number, e sim + de 1 valor)
  @Output() aoTransferir = new EventEmitter<any>();

//criado a varivel e tipado ela (disse qual o tipo de valor ela receberá)
  valor!: number; //se '= XX' este numero aparecerá de padrão no campo valor
  destino!: number;

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir(){
    console.log('Solicitado Transferencia')

//{} abre obj
//this faz com que valor receba valor do atributo o  da variavel 'valor'
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limpar();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.log(error))
    this.limpar();
  }

  limpar(){
    this.valor = 0;
    this.destino = 0;
  }

}
