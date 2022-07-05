import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-litar-calculos',
  templateUrl: './litar-calculos.component.html',
  styleUrls: ['./litar-calculos.component.css']
})
export class LitarCalculosComponent implements OnInit {
    usuario: Calculo = new Calculo();
    listaUsuarios: Calculo[] = [];

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        this.listarUsuarios()
    }
    listarUsuarios(): void {
        this.http.get<Calculo[]>(this.baseUrl + "api/calculo/listcalculo")
            .subscribe(users => {
                this.listaUsuarios = users;
            })
    }
  ngOnInit() {
  }

}
class Calculo {
    nome: string;
    formula: string;
    resultado: string;
}
