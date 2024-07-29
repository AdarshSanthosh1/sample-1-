import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  productName: string = '';
  selectedFile: File | null = null;
  uploadedImageUrl: string | null = null;
  uploadedFileName: string | null = null;
  userName: string | null = null;
  userEmail: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.userEmail = localStorage.getItem('userEmail');
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        this.selectedFile = file;
      } else {
        alert('Please select only jpeg and png');
      }
    }
  }

  onSubmit() {
    if (this.selectedFile && this.productName) {
      const formData = new FormData();
      formData.append('ImageFile', this.selectedFile);  // Ensure this matches the expected field name on the server
      formData.append('ProductName', this.productName); // Ensure this matches the expected field name on the server

      this.http.post('https://localhost:7077/api/products', formData).subscribe({
        next: (res: any) => {
          console.log('Upload successful:', res);
          this.uploadedImageUrl = `https://localhost:7077/Resources/${res.productImage}`; // Adjust the URL as needed
          this.uploadedFileName = res.productImage;
        },
        error: (err: HttpErrorResponse) => {
          console.error('Upload failed:', err);
          console.error('Validation errors:', err.error.errors);
          alert('Upload failed. Check the console for more details.');
        }
      });
    } else {
      alert('Please select a file and enter a product name');
    }
  }
}
