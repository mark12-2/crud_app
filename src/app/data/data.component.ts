import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Data } from '../data.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  @Input() index: number = 0;
  @Input() data?: Data;
    constructor(private dataService: DataService, private router: Router){
  
    }
   
    //function for the buttons
    ngOnInit(): void{
      console.log(this.data);
    }
    deleting(){
      this.dataService.deleteBut(this.index);
    }
    onEdit(){
      this.router.navigate(['/edit', this.index]);
    }
  
}
