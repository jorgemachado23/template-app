import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {DialogCloseResult, DialogRef, DialogService} from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public gridData: any[] = [];
  public test = '';
  public id = 1;
  public value = ['Basketball', 'Cricket'];
  public result = null;
  public listItems: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];

  constructor(private productService: ProductService, private dialogService: DialogService) { }

  ngOnInit() {
    this.getProducts();
    this.getValue();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.gridData = products);
  }

  showConfirmation(): void {
    const dialog: DialogRef = this.dialogService.open({
      title: 'Please confirm',
      content: 'Are you sure?',
      actions: [
        { text: 'No' },
        { text: 'Yes', primary: true }
      ],
      width: 450,
      height: 200,
      minWidth: 250
    });

    dialog.result.subscribe((result) => {
      if (result instanceof DialogCloseResult) {
        console.log('close');
      } else {
        console.log('action', result);
      }
      this.result = JSON.stringify(result);
    });
  }

  getValue(): void {
    this.productService.getValue().subscribe(result => console.log(result));
  }
}
