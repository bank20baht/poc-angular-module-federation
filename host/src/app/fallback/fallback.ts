import { Component } from '@angular/core';

@Component({
  selector: 'app-fallback',
  standalone: false,
  templateUrl: './fallback.html',
  styleUrl: './fallback.css'
})
export class Fallback {
  goBack() {
    window.history.back();
  }

  retry() {
    window.location.reload();
  }

}
