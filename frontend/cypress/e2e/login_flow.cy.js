describe('Admin Login and Shape Flow', () => {
  it('logs in and submits a new shape', () => {
    cy.visit('http://localhost:3000/login');

    // Login
    cy.get('input[placeholder="Username"]').type('dema');
    cy.get('input[placeholder="Password"]').type('demayuden146');
    cy.get('button[type="submit"]').click();

    // Confirm redirect to admin dashboard
    cy.url().should('include', '/admin');

    // Fill out Add New Shape form
    cy.get('input[placeholder="Enter Name"]').type('CypressTest');
    cy.get('select').select('circle');
    cy.get('input[type="color"]').invoke('val', '#00ff00').trigger('input');

    // Submit the form
    cy.contains('Add Data').click();

    // Confirm shape appears in the data table
    cy.contains('CypressTest'); // Check by name
    cy.contains('circle');      // Optional: verify shape type
    cy.contains('#ff0000');     // Optional: verify color
  });
});
