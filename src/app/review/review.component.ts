import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

 /* validaCaracteres(){
    const caracteres = document.getElementById('reseña');
    if(caracteres.ariaValueMax?.length > 50){
      alert("El limite de carcateres es de 50");
    }
  } */

  abrirModal(){
    const modaldiv = document.getElementById('modal');
    if(modaldiv != null){
      modaldiv.style.display = 'block';
    }
  }

  cerrarModal(){
    const modaldiv = document.getElementById('modal');
    if(modaldiv != null){
      modaldiv.style.display = 'none';
    }
  }
  
  cofirmacionModal(){
    const modaldiv = document.getElementById('modal2');
    if(modaldiv != null){
      modaldiv.style.display = 'block';
    }
  }

  cerrar(){
    const modaldiv = document.getElementById('modal2');
    if(modaldiv != null){
      modaldiv.style.display = 'none';
    }
  }
}
