# Jones Automation Task

This repository contains the automation test solution for the Junior Automation Engineer position at Jones. 
The task was implemented using **Playwright** with **JavaScript** and the `@playwright/test` runner.

## Features
* **Automated Form Submission**: Locates and fills out all mandatory fields, including dynamic dropdown selections.
* **Visual Evidence**: Automatically captures and saves a screenshot of the form just before submission.
* **Cross-Browser Execution**: Configured to run tests across Chromium, Firefox, and WebKit seamlessly.
* **Security-Minded QA**: Designed alongside a comprehensive QA analysis report addressing usability, functionality, and critical web vulnerabilities (such as SQLi and XSS prevention).

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/YourUsername/Jones-Automation-Task.git](https://github.com/YourUsername/Jones-Automation-Task.git)
Navigate to the project directory and install dependencies:

Bash
cd Jones-Automation-Task
npm install
Install the required Playwright browsers:

Bash
npx playwright install
 Running the Tests
To run the automation test in headed mode (so you can see the browser interactions visually):

Bash
npx playwright test --headed
To run the tests in headless mode (default for CI/CD environments):

Bash
npx playwright test About the Developer
Maor Sheiman
A highly motivated Computer Science student at HIT (GPA: 89) combining a strong foundation in software engineering with practical experience in hardware testing and bug validation. Passionate about leveraging modern technologies to solve complex problems and build scalable automation infrastructure.
