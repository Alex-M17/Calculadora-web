import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  resulBar: string;
  opBar: string = '0';
  num: string = '0';
  op: string = '';
  press: boolean = false;
  n: number = 1;

  result = [];
  
  btnNumero(num: string){
    if(this.resulBar != null && this.resulBar != ""){
      this.opBar = '0';
      this.resulBar = '';
    }
    
    if(this.opBar == '0'){
      this.opBar = num;
    } else{
      this.opBar += num; 
    }
  }

  btnPunto(){
    if(!this.opBar.includes('.')){
      this.opBar += '.';
    } 
  }

  Operacion(op: string){
    if(this.resulBar != null && this.resulBar != ""){
      this.opBar = this.resulBar;
      this.resulBar = '';
    }
    this.num = this.opBar;
    
    this.op = op;
    this.opBar += ' ' + op + ' ';

    this.press = false;
  }

  Resul(){
    if(this.op == '' && this.press){
      this.resulBar = this.num.toString();
    } else{
      this.resulBar = eval(this.opBar);
    }
    this.press = false;

    localStorage.setItem(this.n.toString(),this.opBar + ' = ' + this.resulBar);
    this.result.push(localStorage.getItem(this.n.toString()));
    this.n++;
  }

  masMenos(){
    var signo = parseInt(this.opBar);
    signo -= signo * 2;
    this.opBar = signo.toString();
  }

  Backspace(){
    this.opBar = this.opBar.substr(0,this.opBar.length - 1);
    if(this.opBar == '')
      this.opBar = '0';
  }

  Borrar(){
    this.resulBar = '';
    this.opBar = '0';
  }

  BorradoParcial(){
    this.opBar = '';
    this.opBar = this.num;
  }

  Eliminar(obj: any){
  
    this.result.splice(obj,1);
  
  }
}
