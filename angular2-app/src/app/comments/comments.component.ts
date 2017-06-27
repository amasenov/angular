import { Component, OnInit, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Comment } from './comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {
  commentTypes = [
                  {'name': 'Primary', 'typ': 'panel panel-primary', 'listClass': 'list-group-item active', 'total': 0},
                  {'name': 'Success', 'typ': 'panel panel-success', 'listClass': 'list-group-item list-group-item-success', 'total': 1},
                  {'name': 'Info', 'typ': 'panel panel-info', 'listClass': 'list-group-item list-group-item-info', 'total': 0},
                  {'name': 'Warning', 'typ': 'panel panel-warning', 'listClass': 'list-group-item list-group-item-warning', 'total': 0},
                  {'name': 'Danger', 'typ': 'panel panel-danger', 'listClass': 'list-group-item list-group-item-danger', 'total': 1},
                  {'name': 'Default', 'typ': 'panel panel-default', 'listClass': 'list-group-item list-group-item-default', 'total': 0}];
  selectedComment = this.commentTypes[0];
  showCommentType: Boolean = false;
  allowNewComment = false;
  commentText = '';
  comments = [
    new Comment(1, 'Comment 1', 'panel panel-success'),
    new Comment(2, 'Comment 2', 'panel panel-danger')
    ];

  constructor() {
    setTimeout(() => {
      this.allowNewComment = true;
    }, 2000);
  }
  ngOnInit() {
  }

  onCommentSelect(typ) {
    // This function is called when Select element is changed
    // alert(typ.name);
  }

  onCreateComment(){
    this.comments.push(new Comment((this.comments.length + 1), this.commentText, this.selectedComment.typ));
    if (this.comments[this.comments.length - 1].type === 'panel panel-primary') {
      this.commentTypes[0].total++;
    } else if (this.comments[this.comments.length - 1].type === 'panel panel-success') {
      this.commentTypes[1].total++;
    } else if (this.comments[this.comments.length - 1].type === 'panel panel-info') {
      this.commentTypes[2].total++;
    } else if (this.comments[this.comments.length - 1].type === 'panel panel-warning') {
      this.commentTypes[3].total++;
    } else if (this.comments[this.comments.length - 1].type === 'panel panel-danger') {
      this.commentTypes[4].total++;
    } else if (this.comments[this.comments.length - 1].type === 'panel panel-default') {
      this.commentTypes[5].total++;
    }
  }

  onRemoveComment(){
    if (this.comments[this.comments.length - 1].type === 'panel panel-primary') {
      this.commentTypes[0].total--;
    } else if (this.comments[this.comments.length - 1].type === 'panel panel-success') {
      this.commentTypes[1].total--;
    } else if (this.comments[this.comments.length - 1].type === 'panel panel-info') {
      this.commentTypes[2].total--;
    } else if (this.comments[this.comments.length - 1].type === 'panel panel-warning') {
      this.commentTypes[3].total--;
    } else if (this.comments[this.comments.length - 1].type === 'panel panel-danger') {
      this.commentTypes[4].total--;
    } else if (this.comments[this.comments.length - 1].type === 'panel panel-default') {
      this.commentTypes[5].total--;
    }
    this.comments.pop();
  }
}
