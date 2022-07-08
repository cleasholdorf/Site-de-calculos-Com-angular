import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
    x: number;
    c: number;
    y: number;
    z: number;
    a: number;
    b: number;
    resultado2: number;
    resultado3: number;
    resultado: number;

    areacirculo(x): void {
        this.http.get<number>(this.baseUrl + `api/metodos/raiz?x=${x}`).subscribe(sub => {
            this.resultado = sub;
            console.log(sub)
        })
    }
    arearetangulo(y,z): void {
        this.http.get<number>(this.baseUrl + `api/metodos/arearetangulo?y=${y}&z=${z}`).subscribe(sub => {
            this.resultado2 = sub;
            console.log(sub)
        })
    }
    AreaTrianguloRetangulo(a, b): void {
        this.http.get<number>(this.baseUrl + `api/metodos/AreaTrianguloRetangulo?a=${a}&z=${b}`).subscribe(sub => {
            this.resultado3 = sub;
            console.log(sub)
        })
    }


    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

  ngOnInit() {
  }

}
