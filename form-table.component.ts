// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-form-table',
//   imports: [],
//   templateUrl: './form-table.component.html',
//   styleUrl: './form-table.component.css'
// })
// export class FormTableComponent {

// }


// import { Component } from '@angular/core';
//  import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//  interface User {
//    name: string;
//    phone: string;
//    idNumber: string;
//   picture: string;
//  }

//  @Component({
//    selector: 'app-form-table',
//    standalone: true,
//    imports: [ReactiveFormsModule],
//    templateUrl: './form-table.component.html',
//   styleUrls: ['./form-table.component.css']
//  })

// export class FormTableComponent {



//   userForm: FormGroup;
//   users: User[] = [];
//   editingIndex: number | null = null;

//   constructor(private fb: FormBuilder) {
//     this.userForm = this.fb.group({
//       name: ['', Validators.required],
//       phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
//       idNumber: ['', Validators.required],
//       picture: [null, Validators.required]
//     });
//   }

//   onFileChange(event: any) {
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         this.userForm.patchValue({ picture: reader.result });
//       };
//     }
//   }

//   saveUser() {
//     if (this.userForm.valid) {
//       if (this.editingIndex !== null) {
//         this.users[this.editingIndex] = this.userForm.value;
//         this.editingIndex = null;
//       } else {
//         this.users.push(this.userForm.value);
//       }
//       this.userForm.reset();
//     }
//   }

//   editUser(index: number) {
//     this.userForm.setValue(this.users[index]);
//     this.editingIndex = index;
//   }

//   deleteUser(index: number) {
//     this.users.splice(index, 1);
//   }
// }

// src/app/form-table/form-table.component.ts
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
  standalone: true,  // ✅ Mark component as standalone
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css'],
  imports: [CommonModule, ReactiveFormsModule] // ✅ Import necessary modules
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
    if (this.userForm.valid) {
      if (this.editingIndex !== null) {
        this.users[this.editingIndex] = this.userForm.value;
        this.editingIndex = null;
      } else {
        this.users.push(this.userForm.value);
      }
      this.userForm.reset();
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
