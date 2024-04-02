import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './pages/container/container.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ReportedPostsComponent } from './pages/reported-posts/reported-posts.component';
import { StandbyPostsComponent } from './pages/standby-posts/standby-posts.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
    ContainerComponent,
    PostsComponent,
    SalesComponent,
    ChatComponent,
    ReportedPostsComponent,
    StandbyPostsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
