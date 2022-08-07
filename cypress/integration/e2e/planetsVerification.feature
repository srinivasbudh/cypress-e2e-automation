Feature: Start Wars Planet search

  Background:
    Given A user is able to access the application

  @smoke
  Scenario Outline: verify all valid planet '<planetName>' details are displayed correctly
    When user search for the planet '<planetName>'
    Then user should see the planet with a population of <population>
    And user should see the planet with a climate of '<climate>'
    Examples:
      | planetName | population | climate   |
      | Tatooine   | 200000     | arid      |
      | Naboo      | 4500000000 | temperate |
      | Kamino     | 1000000000 | temperate |

  @smoke
  Scenario Outline: Verify no results are found when searched for a invalid planet '<planetName>'
    When user search for the planet '<planetName>'
    Then user should not see any results
    Examples:
      | planetName   |
      | Invalid Name |

  @bug
  Scenario: Verify no results are found when searched for a empty string planet
    When user search for the planet ' '
    Then user should not see any results
