import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Data } from '../data.model';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent {
  form!: FormGroup;
  index: number = 0
  brands = [{'id':1, 'brand':'Niek'}, {'id':2, 'brand': 'Adids'}, {'id':3, 'brand': 'Conversion'}];
  statuss = [{'id':1, 'status':'Out of Stock'}, {'id':2, 'status': 'Available'}, {'id':3, 'status': 'Soon'}];
  editMode = false;
  
  constructor(private dataService: DataService, private router: Router,
    private actRoute: ActivatedRoute){}

  ngOnInit(): void{

// let editId = '';
let editname = "";
let editbrand = "";
let editcolor = "";
let editprice = "";
let editimage = "";
let editstatus = "";

      this.actRoute.params.subscribe((params: Params) => {
         if(params['index']){
          console.log(params['index']);
          this.index = params['index'];
         
          const data = this.dataService.getSpecPost(this.index);

          // editId = data.id;
          editname = data.name;
          editbrand = data.brand;
          editcolor = data.color;
          editprice = data.price;
          editimage = data.image;
          editstatus = data.status;

          this.editMode = true;

        }
      }
      );

      
    this.form = new FormGroup({
      
      // id: new FormControl(editId,[Validators.required]),
      name: new FormControl(editname, [Validators.required]),
      color: new FormControl(editcolor, [Validators.required]),
      brand: new FormControl(editbrand, [Validators.required]),
      price: new FormControl(editprice, [Validators.required]),
      image: new FormControl(editimage, [Validators.required]),
      status: new FormControl(editstatus, [Validators.required]),


     })
    }

  //submit function on creating 
    onsubmit(){
      
      const id = crypto.randomUUID();
      const name = this.form.value.name;
      const color = this.form.value.color;
      const brand = this.form.value.brand;
      const price = this.form.value.price;
      const image = this.form.value.image;
      const status = this.form.value.status;

      const data: Data = new Data(
        id, name, color, brand, price, image, status 
        );
        if(this.editMode == true) {
            this.dataService.update(this.index, data);

          }else{
            this.dataService.add(data);
          }

        this.router.navigate(['home']);
     }
}


