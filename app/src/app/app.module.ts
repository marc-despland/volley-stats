import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TerrainComponent } from './terrain/terrain.component';
import { CelluleComponent } from './terrain/cellule/cellule.component';
import { SideComponent } from './terrain/side/side.component';
import { OutComponent } from './terrain/out/out.component';
import { PlaygroundComponent } from './terrain/playground/playground.component';
import { ZoneComponent } from './terrain/zone/zone.component';
import { ZoneAttackComponent } from './terrain/zone-attack/zone-attack.component';
import { ZoneDefenseComponent } from './terrain/zone-defense/zone-defense.component';

@NgModule({
  declarations: [
    AppComponent,
    TerrainComponent,
    CelluleComponent,
    SideComponent,
    OutComponent,
    PlaygroundComponent,
    ZoneComponent,
    ZoneAttackComponent,
    ZoneDefenseComponent
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
