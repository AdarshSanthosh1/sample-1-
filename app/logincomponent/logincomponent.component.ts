import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
  cust_email: string = '';
  password: string = '';
  customers: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('https://localhost:7190/Loan/GetAllCustomer').subscribe((result: any) => {
      this.customers = result;
      console.log(this.customers);
    });
  }

  loginform() {
    const user = this.customers.find(customer => customer.cust_email === this.cust_email && customer.password === this.password);

    if (user) {
      alert("Login Successful");
      if (this.cust_email === 'admin@gmail.com' && this.password === 'admin123') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/user-dashboard']);
      }
    } else {
      alert("Invalid Credentials");
    }
  }
}
