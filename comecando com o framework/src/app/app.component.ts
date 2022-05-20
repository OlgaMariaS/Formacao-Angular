import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService){

  }

  //criou a função que imprime na tela o evento
  transferir($event: any){
    this.service.adicionar($event);
  }
}
