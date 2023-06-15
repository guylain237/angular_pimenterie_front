import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PimentDetailsComponent } from './piment-details/piment-details.component';
import { PimentIndexComponent } from './piment-index/piment-index.component';

const routes: Routes = [
  {
   path:'',pathMatch:'full',redirectTo:'piment-index' 
  },
  {
    path:'piment-index',component:PimentIndexComponent
  },
  {
   path:'piment-details',component:PimentDetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
