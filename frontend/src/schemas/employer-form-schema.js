export const employeeOnboardingFormSchema = {
  title: "Employee Onboarding Form",
  submitText: "Complete Onboarding",
  fields: [
    {
      label: "Offer Letter Acceptance",
      type: "file",
      name: "offerLetter",
      required: true,
      accept: ".pdf, .doc, .docx",
    },
    {
      label: "Aadhar Card/SSN",
      type: "file",
      name: "idProof",
      required: true,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "PAN Card",
      type: "file",
      name: "panCard",
      required: true,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Passport (if applicable)",
      type: "file",
      name: "passport",
      required: false,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Driver's License/Voter ID",
      type: "file",
      name: "secondaryId",
      required: false,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Degree/Graduation Certificates",
      type: "file",
      name: "degreeCertificates",
      required: true,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Marksheets (10th, 12th, Graduation/Post-Graduation)",
      type: "file",
      name: "marksheets",
      required: true,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Additional Certifications",
      type: "file",
      name: "additionalCertifications",
      required: false,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Offer Letter (signed copy)",
      type: "file",
      name: "signedOfferLetter",
      required: true,
      accept: ".pdf, .doc, .docx",
    },
    {
      label: "Relieving Letter (if applicable)",
      type: "file",
      name: "relievingLetter",
      required: false,
      accept: ".pdf, .doc, .docx",
    },
    {
      label: "Experience Certificate",
      type: "file",
      name: "experienceCertificate",
      required: true,
      accept: ".pdf, .doc, .docx",
    },
    {
      label: "Salary Slips (last 3 months, if applicable)",
      type: "file",
      name: "salarySlips",
      required: false,
      accept: ".pdf, .doc, .docx",
    },
    {
      label: "Bank Account Details",
      type: "file",
      name: "bankDetails",
      required: true,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Cancelled Cheque/Passbook Copy",
      type: "file",
      name: "cancelledCheque",
      required: true,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Tax-related forms (e.g., Form 16/W-4)",
      type: "file",
      name: "taxForms",
      required: true,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Work Authorization (if applicable)",
      type: "file",
      name: "workAuthorization",
      required: false,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Visa and Work Permit (for foreign employees)",
      type: "file",
      name: "visaPermit",
      required: false,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Employment Agreement (signed contract)",
      type: "file",
      name: "employmentAgreement",
      required: true,
      accept: ".pdf, .doc, .docx",
    },
    {
      label: "Medical Fitness Certificate (if required)",
      type: "file",
      name: "medicalCertificate",
      required: false,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Health Insurance Details (if applicable)",
      type: "file",
      name: "healthInsurance",
      required: false,
      accept: ".pdf, .jpg, .jpeg, .png",
    },
    {
      label: "Passport-size Photographs",
      type: "file",
      name: "photos",
      required: true,
      accept: ".jpg, .jpeg, .png",
    },
    {
      label: "Emergency Contact Details",
      type: "textarea",
      name: "emergencyContact",
      required: true,
    },
    {
      label: "Non-Disclosure Agreement (NDA)",
      type: "file",
      name: "nda",
      required: true,
      accept: ".pdf, .doc, .docx",
    },
  ],
};
