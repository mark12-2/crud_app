import { Injectable } from '@angular/core';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    dataLists: Data[]=[
        new Data( crypto.randomUUID() , "Sapatos", "Palladium",
         "Navy Blue", "P 20000", "https://th.bing.com/th/id/OIP.VJvFqRmLtSQB1O0oWerdZAHaEF?w=313&h=180&c=7&r=0&o=5&pid=1.7",
          "Availabable")
    ];

  // constructor() { }
//functionalitites
        getPost(){
          return this.dataLists;
        }
        deleteBut(index: number){
          this.dataLists.splice(index, 1);
        }
        add(post: Data){
          this.dataLists.push(post);
        }
        update(index: number, post: Data ){
          this.dataLists[index] = post;
        }
        getSpecPost(index: number){
          return this.dataLists[index];
        }

}
