import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sorteado = 0;
  num1;
  num2;
  msg;
  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    
  }
  

  public numeroAleatorio():void{
    var a = parseInt(this.num1);
    var b = parseInt(this.num2);

    this.sorteado = a + b;
  }
  
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  random(): number {
    var a = parseInt(this.num1);
    var b = parseInt(this.num2);
    console.log(a)
    if (String(a) === 'NaN' || String(b) === 'NaN') {
      this.msg = 'Tem que preencher os campos seu animal!';
      this.presentToast(this.msg);
    }else{
      if (a > -1 && b < 10000) {
        if (a == b) {
          this.msg = 'Não use números iguais!';
          this.presentToast(this.msg);
          this.num1 = '';
          this.num2 = '';
        }
        if (a > b) {
          console.log('A é maior que B')
          this.msg = 'Número inicial não deve ser maior que o final criatura!';
          this.presentToast(this.msg);
          this.num1 = '';
          this.num2 = '';
        }else{
          let rand = Math.floor(Math.random()*(b-a+1)+a);
          return this.sorteado = rand;
        }
      }else{
        this.msg = 'Os números devem ser entre 0 e 99999';
        this.presentToast(this.msg);
        this.num1 = '';
        this.num2 = '';
      }
      
       
    }    
  }
  

}
