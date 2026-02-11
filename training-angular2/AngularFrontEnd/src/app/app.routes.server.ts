import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {path:'customers/:city', renderMode: RenderMode.Server},
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
