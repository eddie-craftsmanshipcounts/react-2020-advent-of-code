describe('Advent of Code', () => {
    it('smokes', () => {
        expect(true).to.be.true;
    });

    it('loads the starter page', () => {
       cy.visit('/');
       cy.get('a').should('contain.text', 'Learn React')
    });
});

export {}
