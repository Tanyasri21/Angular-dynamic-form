# Dynamic Form Table

## 📌 Project Overview
This is an Angular project that allows users to add, edit, and delete user information in a form table. The project uses **Reactive Forms** for validation and handles file uploads for user profile pictures.

## 📂 Project Structure
```
- src/
  - app/
    - components/
      - form-table/
        - form-table.component.ts
        - form-table.component.html
        - form-table.component.css
    - app.component.ts
    - app.component.html
    - app.component.css
  - assets/
  - environments/
```

## 🚀 Getting Started

### 1️⃣ Install Dependencies
Make sure you have **Node.js** and **Angular CLI** installed. If not, install them:
```sh
npm install -g @angular/cli
```
Then, navigate to your project folder and install dependencies:
```sh
cd C:\Users\HP\dynamic-form-table
npm install
```

### 2️⃣ Run the Application
To start the Angular development server, run:
```sh
ng serve --open
```
This will automatically open the project in your default browser.

---

## 🛠 Fixing Common Issues

### ❌ "Component imports must be standalone components..."
✅ **Solution:** Ensure `FormTableComponent` is marked as `standalone` and imports required Angular modules.
Modify **`form-table.component.ts`**:
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-table',
  standalone: true,
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormTableComponent {
  // Component logic
}
```

### ❌ "Could not find template or stylesheet file"
✅ **Solution:** Ensure all component files are in the correct location:
```
C:\Users\HP\dynamic-form-table\src\app\components\form-table\
  - form-table.component.ts
  - form-table.component.html
  - form-table.component.css
```
If they are missing, move them to the correct path:
```sh
mkdir src\app\components\form-table
move form-table\form-table\form-table.component.ts src\app\components\form-table\
move form-table\form-table\form-table.component.html src\app\components\form-table\
move form-table\form-table\form-table.component.css src\app\components\form-table\
```

### ❌ "Could not find module './components/form-table/form-table.component'"
✅ **Solution:** Make sure the import path in **`app.component.ts`** is correct:
```typescript
import { Component } from '@angular/core';
import { FormTableComponent } from './components/form-table/form-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormTableComponent]
})
export class AppComponent {
  title = 'dynamic-form-table';
}
```

### 3️⃣ Restart the Server
After making these fixes, clear the Angular cache and restart the server:
```sh
ng cache clean
ng serve --open
```

---

## 📖 Features
- ✅ Add users with **name, phone number, ID number, and profile picture**.
- ✅ **Edit** user details.
- ✅ **Delete** users from the table.
- ✅ **Form validation** for required fields and correct phone number format.
- ✅ Uses **standalone components** in Angular.


---


