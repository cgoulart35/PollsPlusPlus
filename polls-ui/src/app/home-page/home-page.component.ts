import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import { MatDialog } from '@angular/material/dialog';
import {CommentsComponent} from "../comments/comments.component";
import { AuthService } from '../services/auth.service'; // Import AuthService
import { PollsService } from '../services/polls.service';
import {LoginComponent} from "../login/login.component"; // Import PollsService

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommentsComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  colors: [string, string][] = [
    ['#FF0000', '#000000'],
    ['#FF7F00', '#000000'],
    ['#FFFF00', '#000000'],
    ['#00FF00', '#000000'],
    ['#0000FF', '#FFFFFF'],
    ['#4B0082', '#FFFFFF'],
    ['#9400D3', '#FFFFFF'],
    ['#808080', '#FFFFFF'],
    ['#FFFFFF', '#000000'],
    ['#000000', '#FFFFFF'],
    ['#654321', '#FFFFFF']
  ];
  title: string = 'Polls++';

  titleColors: string[] = [];
  polls: any[] = [];
  isCommentsBoxVisible = false;

  constructor(private router: Router, public dialog: MatDialog, protected authService: AuthService, private pollsService: PollsService) {} // Inject AuthService and PollsService

  ngOnInit(): void {
    this.polls = this.pollsService.getCalculatedPolls(); // Get polls data from the service
    this.titleColors = this.getTimeControlledColors();
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      disableClose: true,
      hasBackdrop: true,
      backdropClass: 'custom-backdrop',
      panelClass: 'my-dialog' // Add this line
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toggleCommentsBox(): void {
    this.isCommentsBoxVisible = !this.isCommentsBoxVisible;
  }

  vote(pollId: any, answer: string) {
    // Implement vote logic, and update poll percentages
    // Example: this.pollService.vote(poll.id, answer).subscribe(...);
  }

  signInOut(): void {
    // Add your sign in/out logic here
  }

  getTimeControlledColors() {
    let today = new Date();
    let index = 0;
    this.titleColors = Array.from(this.title,() => {
      index++;
      return this.colors[(today.getTime().valueOf() + index - 1) % this.colors.length][0];
    });
    return this.titleColors;
  }
}
