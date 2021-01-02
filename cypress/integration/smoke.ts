describe('Advent of Code', () => {
    describe('smoke', function () {
        it('can tell the truth', () => {
            expect(true).to.be.true;
        });

        it('can find page content', () => {
            cy.visit('/');
            cy.get('a').should('contain.text', 'Learn React')
        });
    });
});

export {}
