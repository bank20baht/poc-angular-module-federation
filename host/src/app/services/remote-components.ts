import { loadRemoteModule } from '@angular-architects/module-federation';
import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';

export interface RemoteComponentOptions {
  remoteName: string;
  componentName: string;
  inputs?: { [key: string]: any };
  timeout?: number;
}

export interface RemoteComponentResult {
  success: boolean;
  componentRef?: ComponentRef<any>;
  error?: string;
}


@Injectable({
  providedIn: 'root'
})
export class RemoteComponents {

  constructor() { }

  async loadRemoteComponent(port: number, remoteName: string) {
    try {
      return await import(`remote/CardComponent`).then(m => m.Card);
    } catch (error) {
      console.error('Error loading remote component:', error);
      throw new Error('Failed to load remote component');
    }
  }
}
