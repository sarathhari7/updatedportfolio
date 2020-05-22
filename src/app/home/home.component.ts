import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../app.component.css'],
})
export class HomeComponent implements OnInit {

  name = "Sarath Hari";
  services : any;
  constructor() { 
    this.services =
      [
        {
          service_name:"Web Development",
          desc:"Working with the skill set of HTML5, CSS3, jQuery, Bootstrap, PHP & Angualr",
          image:"website.jpg"
        },
        {
          service_name:"Graphic Design",
          desc:"Creates attractive Banners, Logos and Info graphics for all kind of events and business",
          image:"logo.jpg"
        },
        {
          service_name:"Video Animations",
          desc:"Using After Effects to create beautiful Logo, App  presentations and explanatory videos",
          image:"video.jpg"
        },
        {
          service_name:"Photography",
          desc:"Captures your most beautiful evens, portraits, products etc . . .",
          image:"photography.jpg"
        },
        {
          service_name:"SEO / SEM",
          desc:"Help you boost your business through the advertising platforms like google, facebook etc",
          image:"seo-sem.jpg"
        },
        {
          service_name:"Web Hosting",
          desc:"Host your website on any top servers and never let it go down.",
          image:"hosting.jpg"
        }       
      ]
    
  }

  ngOnInit() {
  }

}
