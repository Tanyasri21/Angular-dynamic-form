

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface User {
  name: string;
  phone: string;
  idNumber: string;
  picture: string;
}

@Component({
  selector: 'app-form-table',
  standalone: true,
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormTableComponent {
  userForm: FormGroup;
  users: User[] = [];
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      idNumber: ['', Validators.required],
      picture: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.userForm.patchValue({ picture: reader.result });
      };
    }
  }

  saveUser() {
    // Logging form status for debugging
    console.log(this.userForm.status); // Form status

    if (this.userForm.valid) {
      if (this.editingIndex !== null) {
        // Update existing user
        this.users[this.editingIndex] = this.userForm.value;
        this.editingIndex = null;
      } else {
        // Add new user
        this.users.push(this.userForm.value);
      }
      this.userForm.reset(); // Reset form after saving
    }
  }

  editUser(index: number) {
    this.userForm.setValue(this.users[index]);
    this.editingIndex = index;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
