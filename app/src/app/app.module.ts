import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TerrainComponent } from './terrain/terrain.component';
import { CelluleComponent } from './terrain/cellule/cellule.component';

@NgModule({
  declarations: [
    AppComponent,
    TerrainComponent,
    CelluleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
