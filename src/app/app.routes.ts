import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { PuntosComponent } from './pages/puntos/puntos.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component:HomeComponent},
    {path: 'products', component:ProductsComponent},
    {path: 'puntos', component:PuntosComponent},
    {path: 'login', component:LoginComponent},
];
