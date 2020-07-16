# cypress-gql-stubbing

Sample repo demonstrating how to stub GraphQL requests in Cypress. It is basically just create-react-app, apollo and cypress.

```
yarn
yarn start
yarn cypress
```

As there is no real GraphQL server, the application will only display users when running via Cypress.

Using the experimental fetch polyfill for Cypress as described here: https://www.cypress.io/blog/2020/06/29/experimental-fetch-polyfill/

Reference: https://github.com/cypress-io/cypress-documentation/issues/122#issuecomment-634693934
