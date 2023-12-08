export interface Card {
    id: string;
    name: string;
    src: string;
    sound: string;
    active: boolean;
  }
  
 export interface CardCollection {
    cards: Card[];
    counter: number;
    generatedCardOrder: string[];
    gameOver:boolean
  }
  