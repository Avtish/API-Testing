import '../support/commands';

describe('API Testing with Cypress', () => {
  it('should validate the API response', () => {
    cy.request({
      method: 'GET',
      url: '/v1/Categories/6327/Details.json?catalogue=false',
      timeout: 10000
    }).then((response) => {
      cy.validateApiResponse(response);
    });
  });
});
