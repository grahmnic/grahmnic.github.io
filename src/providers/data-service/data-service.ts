import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataServiceProvider {
    data;
    private baseUrl = 'http://localhost:8100/';

    constructor(private http: Http) {

    }

    private handleError(error: Response | any, entityDataStore?: string, entity?: any) {
        console.error(error);

        return Observable.throw(error);
    }

    saveResult(result) {
        if (result) {
            this.http.post(this.baseUrl + 'api/tblResults', result)
                .catch((response: Response) => {
                    return this.handleError(response);
                });
        }
    }

    loadAnalytes() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get(this.baseUrl + 'api/tblAnalytes')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    loadUnits() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get(this.baseUrl + 'api/tblUnits')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    loadMethods() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get(this.baseUrl + 'api/tblMethods')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    loadResults() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get(this.baseUrl + 'api/tblResults')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    loadTechnologies() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get(this.baseUrl + 'api/tblTechnologies')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }

    loadSources() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get(this.baseUrl + 'api/tblSources')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }
}