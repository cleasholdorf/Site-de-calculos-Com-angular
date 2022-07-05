import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    usuario: User = new User();
    listaUsuarios: User[] = [];
    numero: number;
    x: number;
    y: number;
    

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        this.listarUsuarios()
    }
    listarUsuarios(): void {
        this.http.get<User[]>(this.baseUrl + "api/calculo/list")
            .subscribe(users => {

                this.listaUsuarios = users;
            })
    }
    
    
   
   
}


class User {
    name: string;
    senha: string;
}
