import { Component, OnInit } from '@angular/core';
import { httpService } from '../http.services';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  public products;  any: any []
 
  constructor(public HttpService:httpService) { }

  ngOnInit() {
    this.HttpService.getProducts().subscribe(
        res=>{
            console.log(res)
            this.products = res
          },
        err=>console.log(err)
    )
}

}
