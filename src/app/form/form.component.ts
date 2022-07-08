import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private readonly fb:FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      mensaje: ['']
    })
  }

  onSubmit(): void {
    console.log(this.formulario.value);
  }

  onClickLimpiar(): void {
    const nombreCtrl = this.formulario.get('nombre');
    if(nombreCtrl){
      nombreCtrl.setValue('');
    }
    const apellidoCtrol = this.formulario.get('apellido');
    if(apellidoCtrol){
      apellidoCtrol.setValue('');
    }
    const emailCtrol = this.formulario.get('email');
    if(emailCtrol){
      emailCtrol.setValue('');
    }
    const mensajeCtrol = this.formulario.get('mensaje');
    if(mensajeCtrol){
      mensajeCtrol.setValue('');
    }

  }

}
