import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cust_id: any;
  cust_name: any;
  cust_email: any;
  password: any;
  customers: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.tableclick();

    // Assuming you have a way to get the logged-in user's details
    this.cust_name = 'John Doe'; // Replace with actual logic to get the logged-in user's name
    this.cust_email = 'john.doe@example.com'; // Replace with actual logic to get the logged-in user's email

    localStorage.setItem('userName', this.cust_name);
    localStorage.setItem('userEmail', this.cust_email);
  }

  tableclick() {
    this.http.get('https://localhost:7190/Loan/GetAllCustomer').subscribe((result: any) => {
      console.log(result);
      this.customers = result;
    });
  }

  onDelete(cust_id: number) {
    this.http.delete(`https://localhost:7190/Loan/DeleteStudent/${cust_id}`).subscribe((result: any) => {
      alert("Data is deleted");
      this.tableclick(); // Refresh the table data after deletion
    });
  }

  onEdit(cust_id: number) {
    this.router.navigate(['/editassociate', cust_id]);
  }
  onUpload(cust_id: number) {
    this.router.navigate(['/upload', cust_id]);
  }
  logout() {
    // Implement logout functionality here
    // Clear any session or token data if stored
    this.router.navigate(['/login']);
  }
}
