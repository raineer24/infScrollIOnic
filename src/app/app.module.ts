import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TabsPage } from "../pages/tabs/tabs";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import { EmailComposer } from '@ionic-native/email-composer';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { IonicStorageModule } from '@ionic/storage';

import { ComponentsModule } from "../components/components.module";


@NgModule({
  declarations: [
    MyApp,
      
    
  ],  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    FavoriteProvider
  ]
})
export class AppModule {}
