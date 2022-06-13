import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { productos } from 'src/app/models/models.model';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public data: productos[] = [];
  public singleData = {
    descripcion: '',
    monto: 0
  } as productos

  constructor(private srv: MyserviceService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.srv.getProductos().subscribe(e => {
      this.data = e.value;
    })
  }

  save() {
    if (this.singleData.descripcion == '') { this.toast.warning('Debe agregar una descipcion'); return }
    if (this.singleData.monto == 0) { this.toast.warning('Debe agregar un monto'); return }

    this.srv.postProductos(this.singleData).subscribe(e => {
      if (e.succeeded == true) {
        this.clear()
        this.toast.success('Producto Guardado.')
      }
      this.ngOnInit();
    })
  }

  delete() {
    if (this.singleData.id == 0) { this.toast.warning('Debe seleccionar el producto que desea borrar '); return }

    this.srv.deleteProductos(this.singleData.id).subscribe(e => {
      if (e.succeeded == true) {
        this.clear()
        this.toast.success('Registro Borrado');
        this.ngOnInit();
      }
    })
  }

  setProducto(m: productos) {
    this.singleData = m
  }

  clear() {
    this.singleData = {
      id: 0,
      descripcion: '',
      monto: 0
    }
  }

}
