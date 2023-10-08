import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    redirectTo: 'inicio/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'comunidad',
    loadChildren: () => import('./comunidad/comunidad.module').then( m => m.ComunidadPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil-bg',
    loadChildren: () => import('./perfil-bg/perfil-bg.module').then( m => m.PerfilBgPageModule)
  },
  {
    path: 'perfil-jd',
    loadChildren: () => import('./perfil-jd/perfil-jd.module').then( m => m.PerfilJdPageModule)
  },
  {
    path: 'perfil-jc',
    loadChildren: () => import('./perfil-jc/perfil-jc.module').then( m => m.PerfilJcPageModule)
  },
  {
    path: 'perfil-jt',
    loadChildren: () => import('./perfil-jt/perfil-jt.module').then( m => m.PerfilJtPageModule)
  },  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
