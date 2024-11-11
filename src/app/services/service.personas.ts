import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
// import { Global } from "../global";

@Injectable()

export class ServicePersonas {
    constructor(private _http: HttpClient) { }

    getPersonas(): Observable<any> {
        let url = 'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas';

        return this._http.get(url);
    }

    getPersonasPromesa(): Promise<any> {
        let request = 'api/personas';
        let url = environment.urlApiPersonas + request;
        let promise = new Promise((resolve) => {
            this._http.get(url).subscribe(response => {
                resolve(response);
            })
        })

        return promise;
    }
}