import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DynamicForm from "./components/DynamicForm";
import EmployeeView from "./components/EmployeeView";
import { employeeOnboardingFormSchema } from "./schemas/employer-form-schema";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Router>
        <nav
          style={{
            padding: "16px",
            backgroundColor: "#2563eb",
            color: "white",
            display: "flex",
            gap: "16px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
          <Link
            to="/onboarding"
            style={{ textDecoration: "none", color: "white" }}
          >
            Employee Onboarding
          </Link>
          <Link
            to="/feedback"
            style={{ textDecoration: "none", color: "white" }}
          >
            Employer Feedback
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/onboarding"
            element={
              <DynamicForm
                schema={employeeOnboardingFormSchema}
                onSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/feedback"
            element={
              <EmployeeView
                schema={employeeOnboardingFormSchema}
                onSubmit={handleSubmit}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

// Home Page Component
const Home = () => (
  <div style={{ padding: "24px", textAlign: "center" }}>
    <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
      Welcome to the Employee Portal
    </h1>
    <p style={{ marginTop: "8px", color: "#4b5563" }}>
      Use the navigation bar to access forms.
    </p>
  </div>
);

// Form Submission Handler
const handleSubmit = (data) => {
  console.log("Form Submitted:", data);
};

export default App;
