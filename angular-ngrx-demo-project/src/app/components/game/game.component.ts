import { Component, ElementRef, ViewChild,OnInit  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { click, reset } from 'src/app/store/counter.actions';
import {  selectCards, selectCounter, selectGame } from 'src/app/store/counter.selectors';
import { Card } from 'src/app/store/app.state';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit{
  @ViewChild('audioOption')
  audioPlayerRef!: ElementRef;
  count: number = 0;
  gameOver: boolean = false;
  active: string = 'filter:none';
  passive: string = 'filter:blur(3px) drop-shadow(0px 0px 4px purple) invert(5%);';

  counter$ = this.store.select(selectCounter);
  cards$ = this.store.select(selectCards)
  gameOver$ = this.store.select(selectGame)
  constructor(private store: Store){
  }

  ngOnInit(){
  }

  onAudioPlay(item:Card) { 
    this.store.dispatch(click({card:item}));
    let audio = new Audio();
    audio.src = item.sound;
    audio.play();
  }

  reset(){
    this.store.dispatch(reset());

  }
}
