// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'conteudo', component: ConteudoComponent },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
