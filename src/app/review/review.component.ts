import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  registrar(){
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
