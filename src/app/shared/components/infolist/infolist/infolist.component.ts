import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infolist',
  templateUrl: './infolist.component.html',
  styleUrl: './infolist.component.scss',
  standalone: false
})
export class InfolistComponent {
  @Input() content: any = ""; 
}
