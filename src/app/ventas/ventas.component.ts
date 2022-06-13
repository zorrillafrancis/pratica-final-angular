import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Consulta, Operacion, productos } from 'src/app/models/models.model';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  public dataList: Consulta[] = [];
  public dataListFind: Consulta[] = [];
  public data = {} as Operacion
  public dataProducto: productos[] = [];
  public findText: string = "";

  constructor(private srv: MyserviceService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.data.tipo = 1
    this.data.conceptoId = 0;
    this.srv.getOperacion().subscribe(e => {
      this.dataList = e.value;
      this.dataListFind = e.value;
    })

    this.srv.getProductos().subscribe(e => {
      this.dataProducto = e.value;
    })
  }

  save() {
    if (this.data.monto == 0) {
      this.toast.warning('Debe agregar un monto')
      return
    }
    if (this.data.conceptoId == 0) {
      this.toast.warning('Debe seleccionar un concepto')
      return
    }

    this.data.fecha = new Date();
    this.data.conceptoId = Number(this.data.conceptoId)
    this.data.id = 0;
    this.data.monto = (this.data.cantidad || 1) * this.data.monto

    this.srv.postOperacion(this.data).subscribe(e => {
      if (e.succeeded == true) {
        this.toast.success('Proceso Terminado');
        this.clear()
        this.srv.getOperacion().subscribe(e => {
          this.dataList = e.value;
          this.dataListFind = e.value;
        })
      }
    })
  }

  clear() {
    this.data = {
      id: 0,
      cantidad: 0,
      descripcion: '',
      monto: 0,
      fecha: new Date,
      conceptoId: 0,
      tipo: 1
    }
  }

  findMonto() {
    this.data.monto = this.dataProducto.filter(e => e.id == this.data.conceptoId)[0].monto;
  }

  find() {
    this.dataListFind = this.dataList.filter(e => {
      return e.concepto.includes(this.findText) || e.monto.toString().includes(this.findText) || e.fecha.toString().includes(this.findText) || e.descripcion.toString().includes(this.findText)
    })
  }

}
