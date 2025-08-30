import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'remote-counter',
    loadChildren: () => {
      // Check if remote app is available first
      return fetch('http://localhost:4201/remoteEntry.js', { method: 'HEAD' })
        .then(() => {
          // Remote is available, load the module
          return import('remote/CounterComponent').then(m => m.CounterModule);
        })
        .catch(err => {
          console.warn('Remote application not available:', err.message);
          // Return fallback module
          return import('./fallback/fallback-module').then(m => m.FallbackModule);
        });
    }},
  {
    path: 'fallback',
    loadChildren: () => import('./fallback/fallback-module').then(m => m.FallbackModule)
  },
  {
    path: '**', // catch-all fallback
    redirectTo: 'fallback'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export function safeLoadChildren<T>(
  loader: () => Promise<T>,
  fallback: () => Promise<T>
): () => Promise<T> {
  return () =>
    loader().catch(err => {
      console.error('Remote load failed, using fallback...', err);
      return fallback();
    });
}