import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminForm from '../AdminForm';
import DataGrid from '../DataGrid';

// ✅ App test (already fixed)
test('renders welcome text', () => {
  render(<App />);
  const welcomeText = screen.getByText(/welcome/i);
  expect(welcomeText).toBeInTheDocument();
});

// ✅ Fix: wrap in <Router> because DataGrid uses useLocation()
test('renders AdminForm and DataGrid correctly', () => {
  render(
    <Router>
      <>
        <AdminForm />
        <DataGrid />
      </>
    </Router>
  );

  const adminForm = screen.getByTestId('admin-form');
  expect(adminForm).toBeInTheDocument();

  const dataGrid = screen.getByTestId('data-grid');
  expect(dataGrid).toBeInTheDocument();
});
