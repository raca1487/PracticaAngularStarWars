import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ShellComponent,
    NotFoundComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [ShellComponent]
})
export class CoreModule { }
