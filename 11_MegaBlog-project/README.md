# 📝 Mega Blog Post Project

A **React-based blog post application** powered by **Appwrite (BaaS)**, with secure **authentication**, feature-rich **TinyMCE visual editor**, and complete **user-specific blog management**. Built using modern tools like Redux Toolkit, React Hook Form, and React Router.

---

## 🚀 Features

### 🔐 Authentication & Authorization

- ✅ User **Sign Up** and **Login** using Appwrite
- 🚪 Auto redirect to home page on login/signup
- 🛡️ Protected routes and components (only logged-in users can write or modify posts)
- ✏️ Users can **create**, **edit**, and **delete only their own** posts

### 📝 Blog Functionality

- 🏠 Home page shows **all blog previews**
- 🔍 **Individual post pages** with full content
- ➕ **Add** posts with media using TinyMCE
- ♻️ **Update/Delete** your own posts
- 🖼️ Upload and embed images using Appwrite storage
- 🌐 Parse and render HTML safely using `html-react-parser`

---

## 🧰 Tech Stack

### ⚛️ Frontend:

- **React** – Component-based UI
- **React Router DOM** – Client-side routing
- **Redux Toolkit** – State management
- **React-Redux** – Redux bindings for React
- **React Hook Form** – Easy, performant form handling

### 🔧 Editor & Parsing:

- **@tinymce/tinymce-react** – WYSIWYG rich text editor
- **html-react-parser** – Convert HTML strings to React components

### 🗄️ Backend as a Service:

- **Appwrite** – Authentication, Database, and File Storage

---

## 📦 Dev Dependencies

```bash
npm install react-router-dom
npm install @reduxjs/toolkit react-redux
npm install @tinymce/tinymce-react
npm install html-react-parser
npm install react-hook-form
npm install appwrite
```

## 🧑‍💻 Tech Stack

| Layer        | Technology/Library              |
| ------------ | ------------------------------- |
| Frontend     | React, Vite                     |
| Editor       | @tinymce/tinymce-react          |
| Backend      | Appwrite (Cloud or Self-hosted) |
| Forms        | react-hook-form                 |
| HTML Parsing | html-react-parser               |
| Routing      | react-router-dom                |

---

---

## 📦 Installation

1. **Clone the repository**

```bash
  git clone https://github.com/your-username/mega-blog-post-project.git
  cd mega-blog-post-project
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Appwrite Backend**

   - Create a project at https://cloud.appwrite.io
   - Enable Authentication (email/password)
   - Set up:

     - Database → posts collection with necessary permissions
     - Storage → For media/image uploads

   - Update your **.env** file:

```env
   VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

4. Start development server

```bash
npm run dev
```
