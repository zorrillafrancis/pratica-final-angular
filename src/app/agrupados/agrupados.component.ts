import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Consulta, ConsultaDTO, Operacion, productos } from 'src/app/models/models.model';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-agrupados',
  templateUrl: './agrupados.component.html',
  styleUrls: ['./agrupados.component.scss']
})

export class AgrupadosComponent implements OnInit {
  public dataList: ConsultaDTO[] = [];
  public dataListFind: ConsultaDTO[] = [];
  public findText: string = "";

  constructor(private srv: MyserviceService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.srv.getOperacionAgrupados().subscribe(e => {
      console.log(e);

      this.dataList = e.value;
      this.dataListFind = e.value;
    })
  }

  find() {
    this.dataListFind = this.dataList.filter(e => {
      return e.monto.toString().includes(this.findText) || e.fecha.toString().includes(this.findText)
    })
  }
}