import { Component } from '@angular/core';
import { Contato } from 'src/app/models/contato';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent {
  contatos: Contato[] = [];

  atualizarContatos(novosContatos: Contato[]) {
    this.contatos = novosContatos;
  }
}
