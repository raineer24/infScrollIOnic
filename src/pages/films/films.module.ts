import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmsPage } from './films';
import { ComponentsModule } from "./../../components/components.module";
@NgModule({
  declarations: [FilmsPage],
  imports: [IonicPageModule.forChild(FilmsPage), ComponentsModule]
})
export class FilmsPageModule {}
