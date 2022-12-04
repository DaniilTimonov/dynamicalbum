import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  ReadMore:boolean = true
  visible:boolean = false
    onclick() {
  this.ReadMore =!this.ReadMore;
  this.visible = !this.visible;
  }
  onclose() {
    this.visible = false;
  }



  constructor() { }

  ngOnInit(): void {
  }



  
  Movies: any[] = [
    {
      "src": "https://cdnb.artstation.com/p/assets/covers/images/013/228/559/large/william-bobant-william-bobant-turn02-00000.jpg?1538650046",
      "name" : "Terran marine"
      
     
    },
    {
      "src": "https://vignette.wikia.nocookie.net/starcraft/images/0/0e/SiegeTank_SC2-WoL_Story1.jpg/revision/latest?cb=20100820025434",
      "name" : "Terran siege tank"
    },
    {
      "src": "https://cdnb.artstation.com/p/assets/covers/images/013/228/559/large/william-bobant-william-bobant-turn02-00000.jpg?1538650046"
    },
    {
      "src": "https://cdnb.artstation.com/p/assets/covers/images/013/228/559/large/william-bobant-william-bobant-turn02-00000.jpg?1538650046"
    },
    {
      "name": "Aladdin"
    }, 
    {
      "name": "Downton Abbey"
    },
    {
      "name": "Downton Abbey"
    }
 
 ];

}
