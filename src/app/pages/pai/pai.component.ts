import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato, contatosIniciais } from 'src/app/models/contato';
import { FilhoComponent } from '../filho/filho.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements AfterViewInit {

  @ViewChild(FilhoComponent) filhoComponent!: FilhoComponent;
  contatos: Contato[] = contatosIniciais;

  contatoForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.contatoForm = this.fb.group ({
      nome: ['', Validators.required],
      telefone: ['', Validators.required]
    })

  }

  ngAfterViewInit() {
    // Atualize o componente filho com os contatos iniciais
    this.filhoComponent.atualizarContatos(this.contatos);
  }

  adicionarContato() {
    if (this.contatoForm.valid) {
      const novoContato: Contato = this.contatoForm.value;
      this.contatos.push(novoContato); // coloca no array
      this.contatoForm.reset(); // reseta formulario
    }
  }
}
