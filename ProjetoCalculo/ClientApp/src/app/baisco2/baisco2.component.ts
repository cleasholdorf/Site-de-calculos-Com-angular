import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-baisco2',
  templateUrl: './baisco2.component.html',
  styleUrls: ['./baisco2.component.css']
})
export class Baisco2Component implements OnInit {

    numero: number;
    x: number;
    y: number;
    resultado: number;

    multipicar(x, y): void {
        this.http.get<number>(this.baseUrl + `api/metodos/multipicar?x=${x}&y=${y}`).subscribe(mul => {
            this.numero = mul;
            console.log(mul)
        })
    }
    dividir(x, y): void {
        this.http.get<number>(this.baseUrl + `api/metodos/divisao?x=${x}&y=${y}`).subscribe(sub => {
            this.resultado = sub;
            console.log(sub)
        })
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

  ngOnInit() {
  }

}
