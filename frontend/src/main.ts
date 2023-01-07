import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { datadogRum } from '@datadog/browser-rum';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


datadogRum.init({
    applicationId: '4369c439-97c1-4a86-bb3f-4c1c6b47f18a',
    clientToken: 'pub92ada4348a7d2cef74b19f1186ad6a1a',
    site: 'datadoghq.com',
    service:'test',
    env:'test',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    sessionReplaySampleRate: 20,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();
