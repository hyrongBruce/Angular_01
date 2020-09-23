import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ClockComponent } from './clock/clock.component';
import { CRUDComponent } from './crud/crud.component';
import { FirstComponentComponent } from './first-component/first-component.component';


const routes: Routes =[
     {path:"",component: FirstComponentComponent},
     {path:"clock",component:ClockComponent},
     {path:"crud",component:CRUDComponent},
     {path:"**",redirectTo:""}
];
   
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
export class AppRoutingModule {}