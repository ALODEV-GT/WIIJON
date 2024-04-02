import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContainerComponent } from './pages/container/container.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ReportedPostsComponent } from './pages/reported-posts/reported-posts.component';
import { StandbyPostsComponent } from './pages/standby-posts/standby-posts.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  }, {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "wj",
    component: ContainerComponent,
    children: [
      {
        path: "posts",
        component: PostsComponent
      },
      {
        path: "sales",
        component: SalesComponent
      },
      {
        path: "chats/:idChat",
        component: ChatComponent
      },
      {
        path: "reported-posts",
        component: ReportedPostsComponent
      },
      {
        path: "standby-posts",
        component: StandbyPostsComponent
      },
      {
        path: "users",
        component: UsersComponent
      },
      {
        path: "",
        redirectTo: "posts",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "**",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
