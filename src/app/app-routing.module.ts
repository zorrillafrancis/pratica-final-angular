import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgrupadosComponent } from 'src/app/agrupados/agrupados.component';
import { AppComponent } from 'src/app/app.component';
import { ProductosComponent } from 'src/app/productos/productos.component';
import { VentasComponent } from 'src/app/ventas/ventas.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent, },
  { path: 'ventas', component: VentasComponent },
  { path: 'agrupados', component: AgrupadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
