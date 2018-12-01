import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  phones = [
    {name: "test", price:"2000"},
    {name: "ssss", price:"22300"},
    {name: "test2", price:"200"},
    {name: "test2", price:"200"},
    {name: "test2", price:"200"},
    {name: "test2", price:"200"},
  ]

  isChecked = false
  phoneName = "";

  addPhone(name, price)
  {
    console.log("phone add click");
    this.phones.push({name, price});
  }

  checkBoxChecked(event)
  {
    console.log("checked")
    this.isChecked = event.target.checked
  }

  constructor() { }

  ngOnInit() {
  }

}
