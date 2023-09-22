import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BookComponent},
  {path: 'observable', component: ObservableTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
