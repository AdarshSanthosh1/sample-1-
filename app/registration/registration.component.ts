import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private http: HttpClient, private router: Router) {}

  cust_id: any;
  cust_name: any;
  cust_email: any;
  password:any;
  customers: any[] = [];

  submitdata() {
    this.http.post('https://localhost:7190/Loan/CUSTOMER-Registration', {
      cust_id: this.cust_id,
      cust_name: this.cust_name,
      cust_email: this.cust_email,
      password:this.password
    }).subscribe((result: any) => {
      console.log(result);
      this.router.navigate(['/login']);
       // Refresh the table data after submission
    });
  }
  
}
