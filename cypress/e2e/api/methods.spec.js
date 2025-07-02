const endpoints = ['/character', '/location', '/episode'];
const invalidMethods = ['POST', 'PUT', 'PATCH', 'DELETE'];

describe('Rick and Morty API - Invalid HTTP Methods', () => {
  endpoints.forEach((endpoint) => {
    invalidMethods.forEach((method) => {
      it(`${method} ${endpoint} should return 404 or 405`, () => {
        cy.request({
          method,
          url: endpoint,
          failOnStatusCode: false,
        }).then((response) => {
          expect([404, 405]).to.include(response.status);
        });
      });
    });
  });
});
