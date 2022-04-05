import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home-resto',
  templateUrl: './home-resto.component.html',
  styleUrls: ['./home-resto.component.css']
})
export class HomeRestoComponent implements OnInit {

  token:string;
  resto_id:string;

  per_page = 10;
  page_number = 1;
  plats : any = [];

  error = "";

  constructor(
    private restaurantService : RestaurantService,
    private cookie : CookieService,
    private router : Router
  ) { 
    this.token = this.cookie.get('token');
    this.resto_id = this.cookie.get('restaurant_id');
  }

  ngOnInit(): void {
    this.getPlat();
  }

  makeVisible(plat:any){
    let result = this.restaurantService.makeVisible(
      this.token, 
      this.resto_id,
      plat._id
    );
    result.subscribe((data:any) => {
      //console.log(data);
      if(data.status != 200){
        alert("lors de la mise a jour de la commande");
      }else{
        //use cookie there
        plat.etat = 10;
        
      }
    });
  }

  makeInvisible(plat:any){
    let result = this.restaurantService.makeInVisible(
      this.token, 
      this.resto_id,
      plat._id
    );
    result.subscribe((data:any) => {
      //console.log(data);
      if(data.status != 200){
        alert("lors de la mise a jour de la commande");
      }else{
        //use cookie there
        plat.etat = -10;
        
      }
    });
  }

  getPlat(){
    let result = this.restaurantService.getPlatByrestoOwner(this.token, this.resto_id, this.per_page, this.page_number);
      result.subscribe((data:any) => {
        if(data.status != 200){
          this.error = "erreur lors du cosulation du serveur";
        }else{
          //use cookie there
          this.plats = data.data;
          console.log(this.plats);
        }
      });
  }

  next(){
    this.page_number ++;
    let result = this.restaurantService.getPlatByrestoOwner(this.token, this.resto_id, this.per_page, this.page_number);
      result.subscribe((data:any) => {
        if(data.status != 200){
          this.error = "erreur lors du cosulation du serveur";
        }else{
          //use cookie there
          this.plats = data.data;
          console.log(this.plats);
        }
      });
  }

  previous(){
    this.page_number --;
    let result = this.restaurantService.getPlatByrestoOwner(this.token, this.resto_id, this.per_page, this.page_number);
      result.subscribe((data:any) => {
        if(data.status != 200){
          this.error = "erreur lors du cosulation du serveur";
        }else{
          //use cookie there
          this.plats = data.data;
          console.log(this.plats);
        }
      });
  }

}
