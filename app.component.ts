import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div class="app-shell">
      <nav class="sidebar">
        <div class="logo">
          <span class="logo-icon">🧠</span>
          <span class="logo-text">NLP<strong>Studio</strong></span>
        </div>
        <ul class="nav-links">
          <li *ngFor="let item of navItems">
            <a [routerLink]="item.path" routerLinkActive="active" class="nav-item">
              <span class="nav-icon">{{item.icon}}</span>
              <span class="nav-label">{{item.label}}</span>
            </a>
          </li>
        </ul>
        <div class="sidebar-footer">
          <span>NLP Studio v1.0</span>
        </div>
      </nav>
      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .app-shell { display: flex; height: 100vh; overflow: hidden; }
    .sidebar {
      width: 240px; min-width: 240px; background: var(--sidebar-bg);
      display: flex; flex-direction: column; padding: 0;
      border-right: 1px solid var(--border);
    }
    .logo {
      padding: 24px 20px; display: flex; align-items: center; gap: 10px;
      border-bottom: 1px solid var(--border); font-size: 1.25rem;
    }
    .logo-icon { font-size: 1.5rem; }
    .logo-text { color: var(--text-muted); }
    .logo-text strong { color: var(--accent); }
    .nav-links { list-style: none; margin: 0; padding: 12px 0; flex: 1; }
    .nav-item {
      display: flex; align-items: center; gap: 12px;
      padding: 12px 20px; text-decoration: none; color: var(--text-muted);
      transition: all 0.2s; border-left: 3px solid transparent; font-size: 0.9rem;
    }
    .nav-item:hover { background: var(--hover-bg); color: var(--text); }
    .nav-item.active { background: var(--active-bg); color: var(--accent); border-left-color: var(--accent); font-weight: 600; }
    .nav-icon { font-size: 1.1rem; width: 20px; text-align: center; }
    .sidebar-footer { padding: 16px 20px; font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid var(--border); }
    .main-content { flex: 1; overflow-y: auto; background: var(--bg); }
  `]
})
export class AppComponent {
  navItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/sentiment', icon: '💬', label: 'Sentiment Analysis' },
    { path: '/ner', icon: '🏷️', label: 'Named Entity Recognition' },
    { path: '/summarizer', icon: '📝', label: 'Text Summarizer' },
    { path: '/pos-tagger', icon: '🔤', label: 'POS Tagger' }
  ];
}
