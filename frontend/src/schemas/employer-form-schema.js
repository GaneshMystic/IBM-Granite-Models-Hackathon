export const employeeOnboardingFormSchema = {
  title: 'Employee Onboarding Form',
  fields: [
    { label: 'Full Name', type: 'text', name: 'fullName', required: true },
    { label: 'Email Address', type: 'email', name: 'email', required: true },
    { label: 'Phone Number', type: 'text', name: 'phone', required: true },
    { label: 'Date of Birth', type: 'date', name: 'dob', required: true },
    { label: 'Gender', type: 'select', name: 'gender', options: ['Male', 'Female', 'Other'], required: true },
    { label: 'Address', type: 'textarea', name: 'address', required: true },
    { label: 'Position', type: 'text', name: 'position', required: true },
    { label: 'Department', type: 'select', name: 'department', options: ['Engineering', 'Marketing', 'HR', 'Sales', 'Finance'], required: true },
    { label: 'Start Date', type: 'date', name: 'startDate', required: true },
    { label: 'Employment Type', type: 'select', name: 'employmentType', options: ['Full-Time', 'Part-Time', 'Contract'], required: true },
    { label: 'Emergency Contact Name', type: 'text', name: 'emergencyContactName', required: true },
    { label: 'Emergency Contact Number', type: 'text', name: 'emergencyContactNumber', required: true },
    { label: 'Additional Notes', type: 'textarea', name: 'notes', required: false }
  ],
  submitText: 'Complete Onboarding'
};
