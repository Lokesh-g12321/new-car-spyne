import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../services/carservice.service'; // Ensure this service is correctly implemented


@Component({
  selector: 'app-listcars',
  templateUrl: './listcars.component.html',
  styleUrl: './listcars.component.css'
})
export class ListcarsComponent {
  carForm: FormGroup;
  images: string[] = []; // Array to hold image previews

  constructor(private formBuilder: FormBuilder, private carService: CarService) {
    this.carForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      tags: ['']
    });
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push(e.target?.result as string); // Add image preview to the array
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      });
    }
  }

  onSubmit() {
    if (this.carForm.valid) {
      const formData = this.carForm.value;
      console.log('Form Data:', formData);
      console.log('Images:', this.images);
      
      // Here you can call your CarService to submit the form data
      // this.carService.addCar(formData, this.images).subscribe(response => {
      //   console.log('Car added successfully', response);
      // }, error => {
      //   console.error('Error adding car', error);
      // });
    } else {
      console.log('Form is invalid');
    }
  }
}

