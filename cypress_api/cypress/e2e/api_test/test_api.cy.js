describe('API Testing', () => {
  it('Should return status code 200', () => {
    cy.request('http://www.httpstat.us/200')
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });
});