import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}
  
  cust_id: any;
  cust_name: any;
  cust_email: any;
  password:any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cust_id = params.get('cust_id');
      this.http.get(`https://localhost:7190/Loan/GetAllCustomer/${this.cust_id}`).subscribe((result: any) => {
      
        
        console.log(result);
        this.cust_name = result.cust_name;
        this.cust_email = result.cust_email;
        this.password = result.password;

      });
    });
  }

  updateData() {
    this.http.put(`https://localhost:7190/Loan/EditCustomer/${this.cust_id}`, { cust_name: this.cust_name, cust_email: this.cust_email ,password:this.password}).subscribe((result: any) => {
      
      this.router.navigate(['/registration']);
    });
  }

}
