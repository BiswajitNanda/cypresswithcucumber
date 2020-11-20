import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

    Given("I am on the homepage", function () {
        cy.visit('')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    });
    When(/^I click on "([^"]*)"$/, function () {
        cy.get(":nth-child(4) > a").click();
    });

    Then(/^I should be redirected to the correct page$/, function () {
        cy.get('title').should('contain.text', 'Talk');
    })


