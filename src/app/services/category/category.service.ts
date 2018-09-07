import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable()
export class CategoryService {

  subRoute = '/categories';
  constructor(private http:HttpService) { }

  public list(){
    return this.http.get(this.subRoute + "/list.php");
  }

  public view(id){
    return this.http.get(this.subRoute + "/view.php?id=" + id);
  }

  public add(params){
    return this.http.post(this.subRoute + "/add.php",params);
  }

  public update(params){
    return this.http.post(this.subRoute + "/update.php",params);
  }

}
