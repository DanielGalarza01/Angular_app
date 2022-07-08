import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './comunication/parent/parent.component';
import { ChildComponent } from './comunication/child/child.component';

const routes: Routes = [
  {
    path: 'inputs',
    component: ParentComponent
  },
  {
    path: 'child',
    component: ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
