import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
import { DataEditComponent } from './data-edit/data-edit.component';

const routes: Routes = [
  // { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'home', component: DatatableComponent },
  { path: 'add', component:  DataEditComponent},
  { path: 'edit/:index', component:  DataEditComponent},
  // { path: '', component:  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
