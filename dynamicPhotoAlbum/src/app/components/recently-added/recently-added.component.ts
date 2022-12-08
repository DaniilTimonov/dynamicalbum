import { Component } from '@angular/core';
import { Word } from './Word'
import { WordsList } from './WordsList'



@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css'],

})

export class RecentlyAddedComponent {
ReadMore:boolean = true
visible:boolean = false
  onclick() {
this.ReadMore =!this.ReadMore;
this.visible = !this.visible;
}
onclose() {
  this.visible = false;
}

  words = [
    {
      rus: 'Дом',
      eng: 'Home',
    }
  ]

  renderWordList: Array<Word> = [];
  
  ngOnInit() {

    let tempWord = new Word(this.words[0]);
    let wordList = new WordsList();
     wordList.pushList(tempWord);
    this.renderWordList = wordList.getList();
   
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

 items =["Tom", "Bob", "Sam", "Bill"];



}
