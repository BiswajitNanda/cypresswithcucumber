Feature: HomePage Functionality

  @execution
  Scenario: Landing on home page
    Given I am on the homepage
    When I click on "lets talk tea"
    Then I should be redirected to the correct page