import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  ngOnInit(): void {}

    edit(){
    this.updateDetails.emit(this.merging)
    }
    delete(id:any){
      this.deletefn.emit(this.merging)
    }
  
  
  
  @Input() merging:any
  @Output() updateDetails = new EventEmitter<any>()
  @Output() deletefn = new EventEmitter<any>()

}
