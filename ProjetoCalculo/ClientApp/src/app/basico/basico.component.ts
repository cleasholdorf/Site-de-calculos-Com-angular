import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent implements OnInit {
    
    numero: number;
    x: number;
    y: number;
    a: number;
    b: number;
    resultado: number;

    somar(x, y): void {
        this.http.get<number>(this.baseUrl + `api/metodos/somar?x=${x}&y=${y}`).subscribe(soma => {
            this.numero = soma;
            
        })
    }
    subtracao(x, y): void {
        this.http.get<number>(this.baseUrl + `api/metodos/subtracao?x=${x}&y=${y}`).subscribe(sub => {
            this.resultado = sub;
            console.log(sub)
        })
    }
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

  ngOnInit() {
  }

}
