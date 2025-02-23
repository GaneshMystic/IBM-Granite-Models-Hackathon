import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DynamicForm from './components/DynamicForm';
import { employeeOnboardingFormSchema } from './schemas/employer-form-schema';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-600 text-white flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/onboarding" className="hover:underline">Employee Onboarding</Link>
        <Link to="/feedback" className="hover:underline">Employer Feedback</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<DynamicForm schema={employeeOnboardingFormSchema} onSubmit={handleSubmit} />} />
      </Routes>
    </Router>
  );
}

// Home Page Component
const Home = () => (
  <div className="p-6 text-center">
    <h1 className="text-3xl font-bold">Welcome to the Employee Portal</h1>
    <p className="mt-2 text-gray-600">Use the navigation bar to access forms.</p>
  </div>
);

// Form Submission Handler
const handleSubmit = (data) => {
  console.log('Form Submitted:', data);
};

export default App;
