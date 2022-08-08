# Solution

### Environment
<details>
  <summary>Environment setup</summary>

##### Needed softwares should be installed
* [Git][1]
* [Node.js][2]

To check all these items installed properly, run one by one in your terminal:
```shell
node -v;
git --version;
java --version;
```

You should see versions for all these items, without any errors.
</details>

***

### Installation
<details>
  <summary>How to install dependencies</summary>

1. Navigate to the folder in which framework will be stored, and run in your terminal copied link (with HTTPS path):
```shell
git clone https://github.com/srinivasbudh/cypress-e2e-automation.git
```
2. Navigate into the downloaded "cypress-e2e-automation" repository folder
```shell
cd cypress-e2e-automation/
```
3. Install all required dependencies:
```shell
npm install
```
</details>

***

### Test run
<details>
  <summary>How to run tests</summary>

#### Before tests run
Before running the e2e cypress tests you need to **start the application** <br>
Please run in your terminal:
```shell
npm run start
```

#### Cypress run
To run the cypress tests you can use the command:
```shell
npm run test
```
 - run cucumber only tests:
```shell
npm run test:e2e
```
- run integration only tests:
```shell
npm run test:integration
```

</details>

### Report
<details>
  <summary>How to view test reports</summary>

  Cypress by defaults captures videos and also screenshots for failed scenarios and store it under cypress folder.

  I have used `cypress-mochawesome-reporter` for capturing test results and these reports can be accessed in path `cypress/reports/index.html`
</details>

### Bugs
* Found 3 Bugs and listed them under [Issues][3] in the git repository
* Also have 1 remark which might be a bug also listed it under [Issues][3]

# Assessment Solution

* The whole solution was done in 5 hours including documentation and bug reporting. Also spent ~1 hour on cleanup
* Additionally, was implemented Github Actions workflow for continues testing
* Cleaned-up the framework from unused dependencies and frameworks (Karma, e.g)
* The scenarios for the Planets validations are developed in Cucumber using Gherkin approach
* The scenarios for the People validations are developed using Jasmine parametrized approach
* The scenarios for poples API are also developed using Cypress & Jasmine


[1]: https://git-scm.com/downloads
[2]: https://nodejs.org/en/
[3]: https://github.com/srinivasbudh/cypress-e2e-automation/issues
