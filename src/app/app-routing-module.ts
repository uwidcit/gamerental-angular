import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesPage } from './games-page/games-page';
import { LoginPage } from './login-page/login-page';
import { RentalsPage } from './rentals-page/rentals-page';
import { ProfilePage } from './profile-page/profile-page';
import { AuthGuard } from './auth/auth-guard'; // Route guard for authentication

const routes: Routes = [
  { path: '', component: GamesPage }, // Default route
  { path: 'login', component: LoginPage }, // Login route
  { path: 'rentals', component: RentalsPage, canActivate: [AuthGuard] }, // Protected route
  { path: 'profile', component: ProfilePage, canActivate: [AuthGuard] } // Protected route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
