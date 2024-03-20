import { Component } from '@angular/core';

import 'zone.js';
import { AppModule } from './app/app.module';
import { platformBrowser } from '@angular/platform-browser';




platformBrowser().bootstrapModule(AppModule).then((re)=> {
  console.log(re)
})
