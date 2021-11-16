import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvidersService } from '../services/providers.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public providers;

  public proList = [
    {
      name: "Kilian Mbappé",
      email: 23,
      adress: 7,

    },
    {
      name: "Marco Verratti",
      email: 29,
      adress: 6,

    },
    {
      name: "Presnel Kimpembe",
      email: 26,
      address: 3,

    }
  ]



  constructor(private activatedRoute: ActivatedRoute, private service: ProvidersService) { }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.service.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
  }

  /* constructor(private activatedRoute: ActivatedRoute) { }
 
   ngOnInit() {
     this.folder = this.activatedRoute.snapshot.paramMap.get('id');
     this.providers = this.proList;
   }*/

}
