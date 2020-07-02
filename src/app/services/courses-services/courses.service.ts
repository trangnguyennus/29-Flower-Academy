import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICourses } from '../../courses';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _url:string = 'assets/data/courses-data.json';

  constructor(private http:HttpClient) { }

  getEmployees(){
    
        return this.http.get<ICourses[]>(this._url)
                        .pipe(catchError(this.ErrorHandler));
}
    ErrorHandler(error:HttpErrorResponse){
      return observableThrowError(error.message || "Server Error");

    }
}
