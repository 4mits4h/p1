import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-addrestro',
  templateUrl: './addrestro.component.html',
  styleUrls: ['./addrestro.component.scss'],
})
export class AddrestroComponent implements OnInit {
  alert: boolean = false;
  fillup: boolean = false;
  addResto = new FormGroup({
    // name: new FormControl(''),
    // email: new FormControl(''),
    // address: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),

    email: new FormControl('', [Validators.required, Validators.email]),

    address: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });
  collection: any;
  get f() {
    return this.addResto.controls;
  }

  submit() {
    console.log(this.addResto.value);
  }

  '';
  // name: any = '';
  // email: any = '';
  // address: any = '';
  constructor(private resto: ApiserviceService) {}

  ngOnInit(): void {
    this.resto.getList().subscribe((data) => {
      console.log(data);
      this.collection = data;
    });
  }
  deleteResto(item) {
    this.collection.splice(item - 1, 1);
    this.resto.deleteResto(item).subscribe((result) => {
      console.log('result', result);
    });
  }

  collectResto() {
    if (this.addResto.valid) {
      this.resto.saveResto(this.addResto.value).subscribe((result) => {
        console.log('rsult ishere ', result);
        this.alert = true;
        this.addResto.reset({});
        this.fillup = false;
      });
    } else {
      //console.log('please fill the details');
      this.fillup = true;
    }

    //console.log(this.addResto.value);
  }
}
