import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({ //injeção de dependencia
  providedIn: 'root' //pode direcionar em algum modelo ou root -> exista sempre que estivermos executando
})
export class TransferenciaService {
  //variavel que recebe "diversos" valores, pois recebeu ANY e deve inicializar
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = []; //inicializou o array de transferencia
   }

   get transferencias(){
    return this.listaTransferencia;
   }

   //metodo GET, retorna a reposta no futuro, assim observamos e quando temos nossa resposta recebemos ela
   todas(): Observable<Transferencia[]> {
     return this.httpClient.get<Transferencia[]>(this.url);
   }

   adicionar(transferencia: any): Observable<Transferencia> {
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia )
   }

   private hidratar(transferencia: any){
    transferencia.data = new Date();
   }
}
