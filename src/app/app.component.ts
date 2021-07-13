import { Component } from '@angular/core';
  
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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

  public userChoosed: String = 'rien';
  public computerChoosed: String = 'rien';
  showResult: Boolean = false;
  showGame: Boolean = true;

  resultIsRock : Boolean = false;
  resultIsPaper: Boolean = false;
  resultIsScissors: Boolean = false;

  resultComputerIsRock : Boolean = false;
  resultComputerIsPaper: Boolean = false;
  resultComputerIsScissors: Boolean = false;

  closeResult: any;



  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // clean useless code
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

/*   USER  */
  public play(action: string): void{
    this.userResult = action;
    this.userChoosed = this.userResult;

    if (this.userChoosed == 'rock'){
      this.resultIsRock = true;
    }
    if (this.userChoosed == 'paper'){
      this.resultIsPaper = true;
    }
    if (this.userChoosed == 'scissors'){
      this.resultIsScissors = true;
    }

    this.computer();
    this.calculateWinner();
  }

/*   COMPUTER  */
  private computer():void {
    const randomNumber = Math.floor(Math.random() * 3);
    const options: string[] = ['rock', 'paper', 'scissors'];
    this.computerResult = options[randomNumber];
    this.computerChoosed = this.computerResult;

    if (this.computerChoosed == 'rock'){
      this.resultComputerIsRock = true;
    }
    if (this.computerChoosed == 'paper'){
      this.resultComputerIsPaper = true;
    }
    if (this.computerChoosed == 'scissors'){
      this.resultComputerIsScissors = true;
    }

  }

  private calculateWinner():void {
    if (this.userResult === this.computerResult) {
      this.result = 'EX AEQUO';
    }

    if (this.userResult === 'rock' && this.computerResult === 'paper'){
      this.results--;
      this.result = 'YOU LOSE';
    }

    if (this.userResult === 'rock' && this.computerResult === 'scissors'){
      this.results++;
      this.result = 'YOU WIN';
    }

    if (this.userResult === 'paper' && this.computerResult === 'rock'){
      this.results++
      this.result = 'YOU WIN';
    }

    if (this.userResult === 'paper' && this.computerResult === 'scissors'){
      this.results--;
      this.result = 'YOU LOSE';
    }

    if (this.userResult === 'scissors' && this.computerResult === 'rock'){
      this.results--;
      this.result = 'YOU LOSE';
    }

    if (this.userResult === 'scissors' && this.computerResult === 'paper'){
      this.results++;
      this.result = 'YOU WIN';
    }
    this.showResult = true;
    this.showGame = false;
  }


   playAgain(){
    this.showGame = true;
    this.showResult = false;
    this.clearImg();
  }

  clearImg(){
    this.resultIsRock = false;
    this.resultIsPaper = false;
    this.resultIsScissors = false;
  
    this.resultComputerIsRock = false;
    this.resultComputerIsPaper = false;
    this.resultComputerIsScissors = false;
  }


}
