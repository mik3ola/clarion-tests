Feature: Login and Logout using POM

    Scenario: Valid user can log in and log out
        Given I open the login page
        When I login with credentials from environment
        Then I should land on the secure area
        When I log out
        Then I should be redirected to the login page