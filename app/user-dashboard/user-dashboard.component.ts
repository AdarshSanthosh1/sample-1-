import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {


 
  cust_id: any;
  cust_name: any;
  cust_email: any;
  password: any;
  customers: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.tableclick();



    localStorage.setItem('userName', this.cust_name);
    localStorage.setItem('userEmail', this.cust_email);
  }

  tableclick() {
    this.http.get('https://localhost:7190/Loan/GetAllCustomer').subscribe((result: any) => {
      console.log(result);
      this.customers = result;
    });
  }




  onUpload(cust_id: number) {
    this.router.navigate(['/upload', cust_id]);
  }

  logout() {

    this.router.navigate(['/login']);
  }

}
