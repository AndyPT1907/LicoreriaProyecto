import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { PuntosComponent } from './pages/puntos/puntos.component';
import { LoginComponent } from './components/login/login.component';
import { LocationComponent } from './components/location/location.component';


export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component:HomeComponent},
    {path: 'products', component:ProductsComponent},
    {path: 'puntos', component:PuntosComponent},
    {path: 'login', component:LoginComponent},
    {path: 'locacion', component:LocationComponent},
];
