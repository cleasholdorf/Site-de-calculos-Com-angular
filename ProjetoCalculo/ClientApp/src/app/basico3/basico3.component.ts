import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-basico3',
  templateUrl: './basico3.component.html',
  styleUrls: ['./basico3.component.css']
})
export class Basico3Component implements OnInit {

    numero: number;
    resultado: number;
    x: number;
    y: number;
    z: number;

    potencia(x): void {
        this.http.get<number>(this.baseUrl + `api/metodos/potencia?x=${x}`).subscribe(mul => {
            this.numero = mul;
            console.log(mul)
        })
    }
    raiz(z): void {
        this.http.get<number>(this.baseUrl + `api/metodos/raiz?z=${z}`).subscribe(sub => {
            this.resultado = sub;
            console.log(sub)
        })
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

  ngOnInit() {
  }

}
