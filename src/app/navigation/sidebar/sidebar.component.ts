import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() closed = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    this.closed.emit();
  }
}
