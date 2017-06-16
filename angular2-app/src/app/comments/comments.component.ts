import { Component, OnInit } from '@angular/core';
import { Comment } from './comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  allowNewComment = false;
  commentText = '';
  commentCreated = false;
  comments = [
    new Comment(1, 'Comment 1', 'panel panel-success'),
    new Comment(2, 'Comment 2', 'panel panel-danger')
    ];

  constructor() {
    this.getCommentType();
    setTimeout(() => {
      this.allowNewComment = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateComment(){
    this.commentCreated = true;
    this.comments.push(new Comment((this.comments.length + 1), this.commentText, this.getCommentType()));
  }

  onRemoveComment(){
    this.comments.pop();
  }

  getCommentType(){
    let n = 'panel panel-default';
    let x = Math.floor(((Math.random() * 5) + 1));
    switch (x) {
        case 1:
            n = 'panel panel-primary';
            break;
        case 2:
            n = 'panel panel-success';
            break;
        case 3:
            n = 'panel panel-info';
            break;
        case 4:
            n = 'panel panel-warning';
            break;
        case 5:
            n = 'panel panel-danger';
            break;
        default:
                n = 'panel panel-default';
            break;
    }

    return n;
  }
}
