import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'sentiment',
    loadComponent: () => import('./components/sentiment/sentiment.component').then(m => m.SentimentComponent)
  },
  {
    path: 'ner',
    loadComponent: () => import('./components/ner/ner.component').then(m => m.NerComponent)
  },
  {
    path: 'summarizer',
    loadComponent: () => import('./components/summarizer/summarizer.component').then(m => m.SummarizerComponent)
  },
  {
    path: 'pos-tagger',
    loadComponent: () => import('./components/pos-tagger/pos-tagger.component').then(m => m.PosTaggerComponent)
  },
  { path: '**', redirectTo: 'dashboard' }
];
