# ShortLink - Frontend

A modern, responsive URL shortener frontend built with React + Vite. This application allows users to create, manage, and track their short links with a clean and intuitive user interface.

## Project Overview

ShortLink is a full-featured URL shortening service frontend that provides:

- User authentication (Login/Register)
- Dashboard to manage all your links
- Create custom short links with slugs
- Deleted links list
- User profile management

### Home Page

![Home Page](https://github.com/nopalllfd/shortlink-client/blob/main/public/assets/overview/home.png)

### Dashboard

![Dashboard](https://github.com/nopalllfd/shortlink-client/blob/main/public/assets/overview/dashboard.png)

### Profile Page

![Profile](https://github.com/nopalllfd/shortlink-client/blob/main/public/assets/overview/profile.png)

## Technology Stack

| Technology      | Version | Description                 |
| --------------- | ------- | --------------------------- |
| React           | ^19.2.4 | Frontend library            |
| Vite            | ^8.0.1  | Build tool and dev server   |
| React Router    | ^7.13.2 | Client-side routing         |
| Redux Toolkit   | ^2.11.2 | State management            |
| React Redux     | ^9.2.0  | Redux bindings for React    |
| Tailwind CSS    | ^4.2.2  | Utility-first CSS framework |
| React Hook Form | ^7.72.1 | Form handling               |
| React Hot Toast | ^2.6.0  | Notifications               |
| Chart.js        | ^4.5.1  | Data visualization          |
| Lucide React    | ^1.20.0 | Icons                       |

## Project Structure

```
shortlink/
├── public/
│   └── assets/
│       └── home/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── auth/           # Authentication components
│   │   ├── dashboard/      # Dashboard components
│   │   ├── home/           # Home page components
│   │   ├── notfound/       # 404 component
│   │   ├── profile/        # Profile components
│   │   ├── AuthButtons.jsx
│   │   ├── Button.jsx
│   │   ├── ConfirmDeleteModal.jsx
│   │   ├── CreateLinkButton.jsx
│   │   ├── Footer.jsx
│   │   ├── InputField.jsx
│   │   ├── NavLinks.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── UserMenu.jsx
│   ├── layout/
│   │   ├── AuthLayout.jsx
│   │   └── HomeLayout.jsx
│   ├── page/
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   ├── CreateLinkPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ProfilePage.jsx
│   │   └── RedirectPage.jsx
│   ├── redux/
│   │   ├── slice/
│   │   │   ├── authSlice.js
│   │   │   ├── linkSlice.js
│   │   │   └── profileSlice.js
│   │   └── store.js
│   ├── utils/
│   │   ├── env.js
│   │   └── fetchWithAuth.js
│   ├── App.css
│   ├── AppRoute.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running at `http://localhost:8080`

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nopalllfd/shortlink-client.git
   cd shortlink-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment**

   Open `.env.example` and verify the API base URL:

   `cp .env.example .env`

   ```.env.example
   VITE_BASE_API=http://localhost:8080
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open the application**

   The app will be available at `http://localhost:5173`

### Available Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## Features

### Authentication

- **Register**: Create a new user account
- **Login**: Access your account with email and password
- **Logout**: Securely end your session
- **Protected Routes**: Routes that require authentication

### Link Management

- **Create Short Links**: Generate custom short URLs with optional slugs
- **View All Links**: See all your created links in the dashboard
- **Delete Links**: Remove links you no longer need
- **Deleted Links**: View deleted links

### Profile Management

- **View Profile**: Display user information

### Redirection

- **Short Link Redirection**: Visit `/:slug` to be redirected to the original URL
- **404 Handling**: Graceful error page for invalid slugs

## API Documentation

### Base URL

All API endpoints are relative to:

```
http://localhost:8080
```

### Authentication Endpoints

#### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "display_name": "John Doe"
}
```

**Response (201 Created):**

```json
{
  "message": "User registered successfully",
  "data": {
    "id": 1,
    "email": "user@example.com",
    "display_name": "John Doe"
  }
}
```

#### Login User

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200 OK):**

```json
{
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }
}
```

#### Logout User

```http
DELETE /api/auth/logout
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "message": "Logged out successfully"
}
```

#### Get User Detail

```http
GET /api/auth/user/{userId}
Authorization: Bearer <token>
```

### Link Endpoints

#### Get All Links

```http
GET /api/links
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "message": "Links retrieved successfully",
  "data": [
    {
      "id": 1,
      "slug": "my-link",
      "original_url": "https://example.com",
      "clicks": 42,
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### Create Link

```http
POST /api/links
Authorization: Bearer <token>
Content-Type: application/json

{
  "original_url": "https://example.com",
  "slug": "my-custom-slug"
}
```

**Response (201 Created):**

```json
{
  "message": "Link created successfully",
  "data": {
    "id": 1,
    "slug": "my-custom-slug",
    "original_url": "https://example.com",
    "short_url": "http://localhost:8080/my-custom-slug",
    "clicks": 0,
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

#### Delete Link

```http
DELETE /api/links/{id}
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "message": "Link deleted successfully"
}
```

#### Get Deleted Links

```http
GET /api/links/deleted
Authorization: Bearer <token>
```

#### Check Slug & Redirect

```http
GET /api/links/{slug}
```

**Response (200 OK):**

```json
{
  "data": {
    "original_url": "https://example.com"
  }
}
```

### Profile Endpoints

#### Get Profile

```http
GET /api/profiles
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "message": "Profile retrieved successfully",
  "data": {
    "id": 1,
    "user_id": 1,
    "display_name": "John Doe",
    "photo": "https://example.com/photo.jpg",
    "bio": "Hello, I'm John!"
  }
}
```

## Design Decisions & Architecture

### State Management with Redux

The application uses **Redux Toolkit** for state management with three main slices:

1. **authSlice** (`src/redux/slice/authSlice.js`):
   - Manages user authentication state
   - Handles login, logout, registration
   - Stores user info and JWT token in localStorage

2. **linkSlice** (`src/redux/slice/linkSlice.js`):
   - Manages link CRUD operations
   - Handles link creation, deletion, and retrieval
   - Manages deleted links

3. **profileSlice** (`src/redux/slice/profileSlice.js`):
   - Manages user profile data

### Authentication Flow

- JWT tokens are stored in `localStorage`
- `fetchWithAuth` utility automatically adds the Authorization header
- 401 responses trigger automatic logout and state cleanup
- Protected routes check authentication status before rendering

### File Upload (Coming Soon)

- Profile photo upload
- Link preview images

### Styling Approach

- **Tailwind CSS**: Utility-first CSS for rapid development
- **Responsive Design**: Mobile-first approach
- **Consistent Components**: Reusable Button, InputField, etc.

## Assumptions & Notes

1. **Backend API**: Assumes backend is running at `http://localhost:8080`
2. **Token Persistence**: JWT tokens are stored in localStorage (not HTTP-only cookies)
3. **User Data**: User data is stored in Redux and persisted in localStorage
4. **Error Handling**: Basic error handling with toast notifications
5. **Form Validation**: Uses React Hook Form for form management
6. **Image Storage**: Profile photos are expected to be URLs (not file uploads)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

### Adding New Features

1. Create components in `src/components/`
2. Create pages in `src/page/`
3. Add routes in `src/AppRoute.jsx`
4. Create/update Redux slices as needed
5. Use `fetchWithAuth` for authenticated API calls

### Code Style

- Follow ESLint configuration
- Use functional components with hooks
- Keep components small and focused
- Use Tailwind CSS utility classes

## Future Improvements

- [ ] Add link editing functionality
- [ ] Implement link analytics with charts
- [ ] Add batch link operations
- [ ] Custom domains support
- [ ] QR code generation
- [ ] Link expiration
- [ ] Password protection for links
- [ ] Export links as CSV
- [ ] Dark mode support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License
