describe('Rick and Morty API - Characters Endpoint', () => {
  it('GET /character should return status 200 and correct structure', () => {
    cy.request('/character').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('results').and.be.an('array');

      const char = response.body.results[0];
      expect(char).to.include.all.keys(
        'id', 'name', 'status', 'species', 'type', 'gender',
        'origin', 'location', 'image', 'episode', 'url', 'created'
      );

      // origin and location are objects with name and url
      expect(char.origin).to.have.all.keys('name', 'url');
      expect(char.location).to.have.all.keys('name', 'url');
    });
  });

  it('GET /character/1 should return Rick Sanchez', () => {
    cy.request('/character/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Rick Sanchez');
    });
  });

  it('GET /character/999999 should return 404 for non-existent character', () => {
    cy.request({
      url: '/character/999999',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('GET /character with filter name=Rick should return filtered results', () => {
    cy.request('/character?name=Rick').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results.every(char => char.name.includes('Rick'))).to.be.true;
    });
  });

  it('GET /character?page=1000 should return 404 for page out of range', () => {
    cy.request({
      url: '/character?page=1000',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('GET /character with filters status=alive and gender=female should filter correctly', () => {
    cy.request('/character?status=alive&gender=female').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results.every(char => char.status === 'Alive' && char.gender === 'Female')).to.be.true;
    });
  });

  it('GET /character with invalid method POST should return 405 or 404', () => {
    cy.request({
      method: 'POST',
      url: '/character',
      failOnStatusCode: false,
    }).then((response) => {
      expect([404, 405]).to.include(response.status);
    });
  });

  it('Response time should be less than 1 second', () => {
    cy.request('/character').then((response) => {
      expect(response.duration).to.be.lessThan(1000);
    });
  });
});
