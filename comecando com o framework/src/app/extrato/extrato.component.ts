import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias!: any[];

  constructor(private service: TransferenciaService) { }
  //decorator Input: permite que é criada uma property bind = propriedade com o nome TRANSFERENCIA

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
  });
}
}
