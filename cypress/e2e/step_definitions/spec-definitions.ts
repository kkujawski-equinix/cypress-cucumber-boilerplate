import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I open starting page {string}', (url: string) => {
  cy.visit(url);
});

Given(/^I select (.*) from (.*)$/, (value: string) => {
  cy.getByDataClass('dropdown-toggle').click();
  cy.get('li').contains(value).click();
});
