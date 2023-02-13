import { state, style, animate, transition, trigger } from '@angular/animations';
import { APP_ID, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss'],
})
export class AppComponent {
  title = 'granja_FreeDomcenter';
  btnDisable = true;
  register={
    nameAnimal:'',
    ageAnimal:'',

  }
  ocultarVentanaCrearEspecie=false;
  ocultarVentanaCorrales=false;


  animals: string [] = [ 'Roberto', 'Pamela'];
  newAnimal = '';
  especiesAnimales: string [] = [];
  newEspecieAnimal = ''
  agesAnimales: number[] =[];
  newAgeAnimal = '';

  /*especiesAnimales = [{espesimen: "omnívoro"}, {espesimen:"herbívoro"}, {espesimen:"carnivoro"}];
  elegido='';*/

  corrales: string[] = ['vaca','vaca','vaca','vaca','vaca','vaca','vaca'];
  newCorral ='';

    onRegisterCorral(){
      console.log(this.register);
    }
    addNewCorral(){
      this.corrales.push(this.newCorral);
    }

    deletCorral(index: number){
      this.corrales.splice(index,1);
    }

    deleteAnimal(index: number) {
      this.animals.splice(index, 1);
      }

    onScroll(event: Event){
      const element =event.target as HTMLElement;
      console.log(element.scrollTop);
       }
       mostrarVentanaDefinirEspecie(){
       this.ocultarVentanaCrearEspecie = !this.ocultarVentanaCrearEspecie;
       }
       mostrarVentanaCorrales(){
        this.ocultarVentanaCorrales = !this.ocultarVentanaCorrales;
        }

      onRegisterAnimal(){
          console.log(this.register);
        }
      addNewAnimal(){
          this.animals.push(this.newAnimal);
          this.newAnimal ='';
          this.especiesAnimales.push(this.newEspecieAnimal)
          this.newEspecieAnimal ='';

        }
}


