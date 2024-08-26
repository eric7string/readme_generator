// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GPL") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "BSD") {
        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return "https://opensource.org/licenses/MIT";
    } else if (license === "Apache") {
        return "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "GPL") {
        return "https://www.gnu.org/licenses/gpl-3.0";
    } else if (license === "BSD") {
        return "https://opensource.org/licenses/BSD-3-Clause";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    } else {
        return `## License
        This project is licensed under the ${license} license.`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
##Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Test
${data.test}
${renderLicenseSection(data.license)}
## Questions
If you have any questions, you can reach me through my GitHub [github/${data.username}](https://www.github.com/${data.username}) or via email at ${data.email}.
`;
}

export default generateMarkdown;
