// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ConteudoComponent } from './conteudo/conteudo.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'conteudo', component: ConteudoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
