import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBlockComponent } from './header-block/header-block.component';
import { LeftBlockComponent } from './left-block/left-block.component';
import { RightBlockComponent } from './right-block/right-block.component';
import { ContentBlockComponent } from './content-block/content-block.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderBlockComponent,
    LeftBlockComponent,
    RightBlockComponent,
    ContentBlockComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UnderstandingCompenent';
  isLooggedIn = true;
  user_role = 'guest';
  students = [
    { id: 1, name: 'John Doe', age: 20, gender: 'male' },
    { id: 2, name: 'Jane Dana', age: 22, gender: 'female' },
  ];
  products = [
    { id: 1, name: 'Product 1', price: 100, 'description': 'This is a product', 'image': 'https://www.istockphoto.com/resources/images/HomePage/FourPack/C1-Video-iStock-1471847063.jpg'},
    { id: 2, name: 'Product 2', price: 200, 'description': 'This is a product', 'image': 'https://www.istockphoto.com/resources/images/HomePage/FourPack/C1-Video-iStock-1471847063.jpg'},
    { id: 3, name: 'Product 3', price: 300, 'description': 'This is a product', 'image': 'https://www.istockphoto.com/resources/images/HomePage/FourPack/C1-Video-iStock-1471847063.jpg'},
    { id: 4, name: 'Product 4', price: 400, 'description': 'This is a product', 'image': 'https://www.istockphoto.com/resources/images/HomePage/FourPack/C1-Video-iStock-1471847063.jpg'},
    { id: 5, name: 'Product 5', price: 500, 'description': 'This is a product', 'image': 'https://www.istockphoto.com/resources/images/HomePage/FourPack/C1-Video-iStock-1471847063.jpg'},
    { id: 6, name: 'Product 6', price: 600, 'description': 'This is a product', 'image': 'https://www.istockphoto.com/resources/images/HomePage/FourPack/C1-Video-iStock-1471847063.jpg'},

  ];
}
