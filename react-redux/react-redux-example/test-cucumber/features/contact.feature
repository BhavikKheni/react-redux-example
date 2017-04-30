Feature: Test the functions of a Contact App Component
    As a front end developer
    I want to be able to test the CRUD Functionalities of Contact Application

    Scenario:
        Given I open the site "/"

    Scenario Outline: should fill form, insert data into table
        When I writing "<FirstName>" to "First Name"
        And I writing "<LastName>" to "Last Name"
        And I writing "<Email>" to "Email"
        And I click on Submit
        Then I expect that "Bhavik   Kheni" is "firstName"
        Then I expect that "<Email>" is "Email"
        

    Examples:
      | Sr  | FirstName   | LastName      | Email              |
      | 1   |   Bhavik    | Kheni         | Bhavik@gmail.com    |
      | 2   |   Piyush    | Kheni         | Bhavik@gmail.com   | 
