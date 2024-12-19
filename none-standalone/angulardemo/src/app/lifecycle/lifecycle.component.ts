import { Component, OnInit, OnChanges, DoCheck, OnDestroy, Input, SimpleChanges } from '@angular/core';


@Component({
  standalone: false,
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'] // Corrected "styleUrl" to "styleUrls"
})
export class LifecycleComponent implements OnInit {
  pcountry: string = 'usa';
  show: boolean = false; // Add this property
  emp = { name: 'Shalini' };

  constructor() {
    console.log('Parent constructor');
  }

  ngOnInit(): void {
    console.log('Parent ngOnInit');
  }
}

// Child Component
@Component({
  standalone: false,
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'] // Corrected styleUrl
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() country: string = '';
  @Input() employee: { name: string } = { name: '' };
  countrystates: any[] = [];
  data: any[] = [];

  constructor() {
    console.log(`Child constructor ${this.country}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Child ngOnChanges ${this.country} : ${this.employee.name}`);
    this.countrystates = this.data.filter(item => item.country === this.country);
  }

  ngOnInit(): void {
    console.log(`Child ngOnInit ${this.country}`);
  }

  ngDoCheck(): void {
    console.log(`Child ngDoCheck ${this.country} : ${this.employee.name}`);
  }

  ngOnDestroy(): void {
    console.log(`Child ngOnDestroy`);
  }
}
