import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient){}
env = environment.LocalUrl;
  title = 'angul';
ngOnInit(): void {
  console.log(this.env);
  this.http.get(this.env+'assets/main.json').subscribe(res=>{
    console.log(res)
  })
}
}
