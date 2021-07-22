// arrange
// describe("My First Test", function () {
//   //act
//   it("Does not do much", function () {
//     //assert
//     expect(true).to.equal(true);
//   });
// });

// describe("My First Test", function () {
//   it("Visits the Kitchen Sink", function () {
//       cy.visit('https://example.cypress.io')
//   });
// });

// describe("My First Test", function () {
//       it("Finds and Element", function () {
//           cy.visit('https://example.cypress.io')
//           cy.contains('type')
//       });
//     });

// describe("My First Test", function () {
//     it("Clicks an Element", function () {
//         cy.visit('https://example.cypress.io')
//         cy.contains('type').click()
//     });
//   });

// describe("My First Test", function () {
//     it("Makes an assertion", function () {
//         cy.visit('https://example.cypress.io')

//         cy.contains('type').click()

//         cy.url()
//         .should('include', '/commands/actions')
//     })
//   })

//   describe("My First Test", function () {
//     it("Get, types and asserts", function () {
//         cy.visit('https://example.cypress.io')

//         cy.contains('type').click()

//         cy.url()
//         .should('include', '/commands/actions')

//         cy.get('.action-email')
//         .type('fake@email.com')
//         .should('have.value', 'fake@email.com')
//     })
//   })

//   describe("My First Test", function () {
//     it("Get, types and asserts", function () {
//         cy.visit('https://example.cypress.io')

//         cy.pause()

//         cy.contains('type').click()

//         cy.url()
//         .should('include', '/commands/actions')

//         cy.get('.action-email')
//         .type('fake@email.com')
//         .should('have.value', 'fake@email.com')
//     })
//   })


// describe('My First Test', function () {
//     //act
//         it('Does not do much', function() {

//             expect(true).to.equal(true);
//         })
//     })

describe('My Second Test', function () {

    it('Visits a new site', function() {
    // Act
    cy.visit("index.html");
    })
})

describe('Header Text', function() {
    it('Checks if header text exists', function () {
    cy.visit("index.html");
    cy.get('.logo-heading').contains('Fun Bus');
    })
})

// describe('Header Text', function() {
//     it('Checks if header text exists', function () {
//         cy.visit("index.html");
//         cy.get('.logo-heading').contains('Fun Bus!');

//     })
// })
