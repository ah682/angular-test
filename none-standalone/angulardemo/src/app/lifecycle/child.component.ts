import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [UpperCasePipe, JsonPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()
  country:string ='uk';
  @Input()
  employee = {"name":""}

  data:any[] =[
 {"country":"uk","states":["London"]},
 {"country":"india","states":["maharashtra", "UP","MP"]},
 {"country":"ireland","states":["ire1","ire2"]},
 {"country":"usa","states":["Illinois","SFO"]}
 ]
 countrystates:any[]=[]

}
