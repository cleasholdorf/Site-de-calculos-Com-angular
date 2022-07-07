import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
    x: number;
    resultado: number;

    areacirculo(x): void {
        this.http.get<number>(this.baseUrl + `api/metodos/raiz?x=${x}`).subscribe(sub => {
            this.resultado = sub;
            console.log(sub)
        })
    }


    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    }

  ngOnInit() {
  }

}
