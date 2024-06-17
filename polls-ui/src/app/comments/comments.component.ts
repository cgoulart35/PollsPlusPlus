import {AfterViewChecked, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import { AuthService } from '../services/auth.service'; // Import AuthService

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ]
})
export class CommentsComponent implements AfterViewChecked {
  @ViewChild('commentList', { static: false }) private commentList!: ElementRef;

  comments: string[] = [];
  newComment: string = '';
  placeholderText: string = '';

  constructor(protected authService: AuthService) {} // Inject AuthService

  ngOnInit(): void {
    this.updatePlaceholderText();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updatePlaceholderText.bind(this));
    }
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.commentList.nativeElement.scrollTop = this.commentList.nativeElement.scrollHeight;
    } catch(err) { }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updatePlaceholderText();
  }

  updatePlaceholderText() {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches) {
      this.placeholderText = "Got any poll suggestions?\n(30 characters max)";
    } else {
      this.placeholderText = "What's the world thinking? Got any poll suggestions? (30 characters max)";
    }
  }

  addComment() {
    if (this.newComment.trim() && this.authService.isLoggedIn) { // Use authService.isLoggedIn
      this.comments.push(this.newComment);
      this.newComment = '';
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.addComment();
    }
  }
}
