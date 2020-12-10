import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {

  constructor() { }
  border:string;
  badWordsArr: string[] = [];
  cenzorArr: string[] = [];
  badWords: string;
  areaValue: string
  message: string;

  ngOnInit(): void { }

  addWords(): void {
    if (this.badWords) {
      this.badWordsArr.push(this.badWords);
      this.badWords = '';
      this.border = 'green'
    } else {
      alert('Пусте Поле');
      this.border = 'red'
    }

  }

  formReset(): void {
    this.badWords = '';
    this.areaValue = '';
    this.badWordsArr = [];
    this.cenzorArr = [];
    this.border = 'green'
  }

  cenzor(): void {
    if (this.areaValue) {
      this.badWordsArr.forEach((el: string) => this.areaValue = this.areaValue.toLocaleLowerCase().replace(el, '*'.repeat(el.length)));
      // for(let i = 0;i < this.badWordsArr.length; i++){
      //     for(let j = 0; j < this.cenzorArr.length; j++){
      //       if(this.badWordsArr[i].toLowerCase() === this.cenzorArr[j].toLowerCase()){
      //         this.areaValue.replace(this.cenzorArr[j], '**');  
      //       }
      //     }
      // }
    } else {
      alert('Пусте поле')
    }
  }

}
