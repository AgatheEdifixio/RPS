import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rock-paper';
  public computerResult: any; 
  public result: any;
  public results = 0;
  private userResult: any; 

 

  public play(action: string): void{
    this.userResult = action;
    this.computer();
    this.calculateWinner();
  }

  private computer():void {
    const randomNumber = Math.floor(Math.random() * 3);
    const options: string[] = ['rock', 'paper', 'scissors'];
    this.computerResult = options[randomNumber];
  }

  private calculateWinner():void {
    if (this.userResult === this.computerResult) {
      this.result = 'There was a tie /draw';
    }

    if (this.userResult === 'rock' && this.computerResult === 'paper'){
      this.results--;
      this.result = 'Computer wins';
    }

    if (this.userResult === 'rock' && this.computerResult === 'scissors'){
      this.results++;
      this.result = 'You win';
    }

    if (this.userResult === 'paper' && this.computerResult === 'rock'){
      this.results++
      this.result = 'You win';
    }

    if (this.userResult === 'paper' && this.computerResult === 'scissors'){
      this.results--;
      this.result = 'Computer wins';
    }

    if (this.userResult === 'scissors' && this.computerResult === 'rock'){
      this.results--;
      this.result = 'Computer wins';
    }

    if (this.userResult === 'scissors' && this.computerResult === 'paper'){
      this.results++;
      this.result = 'You win';
    }
  }
}
