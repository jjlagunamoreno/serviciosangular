import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient) { }
    getCoches(): Observable<any> {
        let request = 'webresources/coches';
        let url = environment.urlApiCoches + request;

        return this._http.get(url);
    }
}