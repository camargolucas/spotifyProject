import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  musics = [ 
    {
      'name':'Cheap Thrills',
      'autor':'Sia',
      'time':'3:00'
    },
    {
      'name':'GoodByes',
      'autor':'PostMalone',
      'time':'3:50'
    },
    {
      'name':'Dance Monkey',
      'autor':'Other s',
      'time':'2:00'
    },
    {
      'name':'Old Town Road',
      'autor':'Black Sabath',
      'time':'3:00'
    },
    {
      'name':'Sopranos Family',
      'autor':'Roma',
      'time':'3:00'
    },
    {
      'name':'Cheap Thrills',
      'autor':'Sia',
      'time':'3:00'
    },
    {
      'name':'Piratas do Caribe',
      'autor':'Devil my cry',
      'time':'3:00'
    },
    
  
  ]


  constructor() { }

  ngOnInit() {
    
  }

}
