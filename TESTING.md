## ✅ `TESTING.md`

# 🧪 Automated Testing Documentation

This document outlines unit, integration, and end-to-end testing for the Shape Data Application.

## 🔧 Tools Used

- **Jest** & **React Testing Library** – Unit & integration tests
- **Cypress** – End-to-end testing (admin flow)

### 🔹 Run Tests

## 📦 Unit & Integration Tests

### 🔹 Location

/frontend/src/tests/

## How to Run Unit & Integration Tests

1. Navigate to the frontend directory:
   cd frontend

2. Install dependencies:
   npm install

3. Run test:
   npm test

By default, Jest runs in watch mode, which waits for file changes. You might see:

No tests found related to files changed since last commit.
Press `a` to run all tests...
👉 Press a in your terminal to run all tests now.
👉 You will now see that all the test are running successfully.

## 🧪 End-to-End Testing (Cypress)

🔹 Location
/frontend/cypress/e2e/login_flow.cy.js

## How to Run End-to-End (E2E) Tests with Cypress

1. Navigate to the frontend directory:
   cd frontend

2. Install dependencies (if not already installed):
   npm install

3. Run Cypress in interactive mode:
   npx cypress open

4. Once the Cypress UI opens:

- Select “E2E Testing”.
- Choose a browser (e.g., Chrome or Electron).
- Cypress will launch a test window.
- You should see the test file:
  👉 login_flow.cy.js

5. Click on login_flow.cy.js to run the full admin login and shape flow test.

✅ Additional Notes
Make sure the backend server (python manage.py runserver) and frontend dev server (npm start) are running before launching Cypress, or the test will fail to connect.

If your frontend runs on a port other than 3000, adjust the test URLs accordingly in login_flow.cy.js.

### You can find my test result images here:

![ShapeIconTest](/images/unit_test.png)
![AdminFormTest](/images/adminform_test.png)
![E2E_CypressTest](/images/e2e_cypress_test.png)
