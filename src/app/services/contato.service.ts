import { Contato } from 'src/app/models/contato';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatos: Contato[] = [];

  adicionarContato(novoContato: Contato) {
    this.contatos.push(novoContato);
  }

  obterContatos(): Contato[] {
    return this.contatos;
  }
}
