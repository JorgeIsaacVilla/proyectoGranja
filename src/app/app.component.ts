import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {
  title = 'granja_FreeDomcenter';
  btnDisable = true;
  register={
    name:'',
  }
  animals: string [] = [ 'vaca', 'toro','gallo','cerdo','tortuga','perro'];
  newAnimal = '';

  addAnimal() {
    this.animals.push(this.newAnimal);
    this.newAnimal ='';
  }
  deleteAnimal(index: number) {
    this.animals.splice(index, 1);
    }
    onRegister(){
      console.log(this.register);
    }
}


