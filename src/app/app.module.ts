import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepeatDirective } from './repeat.directive';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { TimerComponent } from './timer/timer.component';
import { BookComponent } from './book/book.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepeatDirective,
    CourseListComponent,
    ChildComponent,
    TimerComponent,
    BookComponent,
    ObservableTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
