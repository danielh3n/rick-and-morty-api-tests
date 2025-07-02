describe('Rick and Morty API - Episodes Endpoint', () => {
  it('GET /episode should return status 200 and correct structure', () => {
    cy.request('/episode').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('results').and.be.an('array');

      const ep = response.body.results[0];
      expect(ep).to.include.all.keys('id', 'name', 'air_date', 'episode', 'characters', 'url', 'created');
      expect(ep.characters).to.be.an('array');
    });
  });

  it('GET /episode/1 should return Pilot', () => {
    cy.request('/episode/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Pilot');
    });
  });

  it('GET /episode/999999 should return 404', () => {
    cy.request({
      url: '/episode/999999',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('GET /episode?page=1000 should return 404', () => {
    cy.request({
      url: '/episode?page=1000',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('Response time less than 1 second', () => {
    cy.request('/episode').then((response) => {
      expect(response.duration).to.be.lessThan(1000);
    });
  });
});
