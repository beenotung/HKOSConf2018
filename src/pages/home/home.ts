import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mode = 'd1';

  data = [
    {
      time: '09:30 - 10:00'
      , list: [
        {code: 'SP', title: 'Lighting Talk & Unconference Registrations'}
        , {code: 'SP', title: 'Reception'}
      ]
    }
    , {
      time: '14:00 - 14:30'
      , list: [
        {
          code: 'H4',
          title: 'Run Multiple Isolated Web Applications on Containers with a Single IP in the Cloud',
          author: 'Jeremy Cheng'
        }
        , {
          code: 'H4',
          title: 'Using Web Software Architecture in Traditional Desktop App Development - How Flux/Redux was ported to Qt/QML',
          author: 'Ben Lau'
        }
        , {
          code: 'H7',
          title: 'Haxe as a better Javascript: a practical guide for making front end development fun, fast and less overwhelming',
          author: 'Ben Lau'
        }
      ]
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
