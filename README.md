# CoopSaaS Frontend

A modern, responsive React frontend for the CoopSaaS cooperative management platform. Built with Material-UI and designed to provide an excellent user experience for cooperative administrators and members.

## Features

### 🎨 Modern Design

- Clean, professional interface inspired by modern SaaS platforms
- Responsive design that works on desktop, tablet, and mobile devices
- Consistent color scheme and typography using Material-UI theming
- Smooth animations and hover effects

### 🔐 Authentication

- Secure login and registration system
- JWT token-based authentication
- Protected routes for authenticated users
- Social login support (Google, Facebook)
- Password reset functionality

### 📊 Dashboard

- Real-time dashboard with key metrics
- Member statistics and growth tracking
- Loan and contribution overview
- Recent activity feeds
- Quick action buttons for common tasks

### 🏢 Landing Page

- Professional landing page showcasing platform features
- Feature highlights with icons and descriptions
- Security section highlighting enterprise-grade protection
- Transparent pricing plans
- Call-to-action sections for user conversion

### 👥 User Management

- Member profile management
- Role-based access control
- Bulk member upload capabilities
- Member search and filtering

### 💰 Financial Management

- Loan application and management
- Contribution tracking and processing
- Payment method management
- Financial reporting and analytics

## Tech Stack

- **React 19** - Modern React with hooks and functional components
- **Material-UI (MUI) 7** - Comprehensive UI component library
- **React Router 7** - Client-side routing
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Backend API running on `http://localhost:3000`

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Environment Configuration

Create a `.env` file in the Frontend directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_APP_NAME=CoopSaaS
```

## Project Structure

```
Frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── auth/          # Authentication components
│   │   │   ├── LoginPage.jsx
│   │   │   ├── SignupPage.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   └── landing/       # Landing page components
│   │       └── LandingPage.jsx
│   ├── pages/             # Page components
│   │   └── DashboardPage.jsx
│   ├── services/          # API services
│   │   └── api.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## API Integration

The frontend integrates with the CoopSaaS backend API through the `api.js` service file. Key endpoints include:

### Authentication

- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `GET /auth/profile` - Get user profile
- `PUT /auth/change-password` - Change password

### Dashboard

- `GET /dashboard/member` - Get member dashboard data
- `GET /dashboard/tenant` - Get tenant dashboard data (admin)

### Members

- `GET /members` - Get all members
- `POST /members` - Create new member
- `GET /members/:id` - Get member details

### Loans

- `GET /loans` - Get all loans
- `POST /loans` - Create new loan
- `GET /loans/:id` - Get loan details

### Contributions

- `GET /contributions` - Get all contributions
- `POST /contributions` - Create new contribution
- `GET /contributions/:id` - Get contribution details

## Key Components

### LandingPage

The main landing page featuring:

- Hero section with call-to-action
- Feature highlights
- Security section
- Pricing plans
- Footer with links

### LoginPage

Authentication page with:

- Split layout design
- Promotional content on the left
- Login form on the right
- Social login options
- Form validation

### SignupPage

Registration page with:

- Multi-step registration process
- Form validation
- Tenant ID requirement
- Social signup options

### DashboardPage

Main dashboard featuring:

- Welcome message
- Key metrics cards
- Recent activity feeds
- Quick action buttons
- User menu with logout

### ProtectedRoute

Route protection component that:

- Checks authentication status
- Redirects to login if not authenticated
- Renders protected content if authenticated

## Styling and Theming

The application uses Material-UI's theming system with a custom theme that includes:

### Color Palette

- Primary: Blue (#3B82F6)
- Secondary: Green (#10B981)
- Background: Light gray (#F9FAFB)
- Text: Dark gray (#111827)

### Typography

- Modern sans-serif font stack
- Consistent font weights
- Responsive font sizes

### Components

- Rounded corners (8px border radius)
- Subtle shadows
- Hover effects
- Consistent spacing

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Code Style

The project uses ESLint for code linting. Key rules include:

- React hooks rules
- Consistent import ordering
- No unused variables
- Proper JSX formatting

### Adding New Features

1. **Create new components** in the appropriate directory
2. **Add API methods** to `services/api.js`
3. **Update routing** in `App.jsx` if needed
4. **Add tests** for new functionality
5. **Update documentation** as needed

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the `dist` folder to an S3 bucket
- **Traditional hosting**: Upload files to your web server

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:

- Check the documentation
- Open an issue on GitHub
- Contact the development team

---

Built with ❤️ for cooperative management
