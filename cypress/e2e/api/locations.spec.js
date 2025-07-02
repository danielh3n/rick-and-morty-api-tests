describe('Rick and Morty API - Locations Endpoint', () => {
  it('GET /location should return status 200 and correct structure', () => {
    cy.request('/location').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('results').and.be.an('array');

      const loc = response.body.results[0];
      expect(loc).to.include.all.keys('id', 'name', 'type', 'dimension', 'residents', 'url', 'created');
      expect(loc.residents).to.be.an('array');
    });
  });

  it('GET /location/3 should return Citadel of Ricks', () => {
    cy.request('/location/3').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Citadel of Ricks');
    });
  });

  it('GET /location/999999 should return 404', () => {
    cy.request({
      url: '/location/999999',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('GET /location?page=1000 should return 404', () => {
    cy.request({
      url: '/location?page=1000',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('Response time less than 1 second', () => {
    cy.request('/location').then((response) => {
      expect(response.duration).to.be.lessThan(1000);
    });
  });
});
