# Rick and Morty API Tests with Cypress

This project contains automated API tests for the [Rick and Morty API](https://rickandmortyapi.com/) using Cypress.

## Features

- Test all main endpoints: `/character`, `/location`, `/episode`
- Validate HTTP status codes, response body structure, and data content
- Test filtering, pagination, and query parameters
- Verify error handling with invalid requests and non-existent resources
- Check response time performance (<1 second)
- Test invalid HTTP methods to verify API behavior

## Project Structure

- `cypress/e2e/api/characters.spec.js` - Tests for Characters endpoint
- `cypress/e2e/api/locations.spec.js` - Tests for Locations endpoint
- `cypress/e2e/api/episodes.spec.js` - Tests for Episodes endpoint
- `cypress/e2e/api/methods.spec.js` - Tests for invalid HTTP methods

## Setup

1. Clone the repo:

```bash
git clone https://github.com/yourusername/rick-and-morty-api-tests.git
cd rick-and-morty-api-tests
```

2. Install dependencies:

```bash
npm install
```

## Running Tests

- Open Cypress Test Runner:

```bash
npm run open
```

- Run tests headlessly:

```bash
npm headless
```

## Notes

- This project demonstrates API testing skills focusing on response validation, error handling, and performance checks.
- The Rick and Morty API is a public API with no authentication required.
