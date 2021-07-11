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

  closeResult: any;

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

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
