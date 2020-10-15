# React Component Test

## Requirements

Your goal is to create three React components. All of them are located in **/src/components**, and include a design mock in a file co-located with the component named **design-mock.png**.

### Donate

- This component should present UI where the user can select a pre-defined donation amount, then click a "Donate" button.
- Once one of the pre-defined amounts is clicked, it should look "selected".
- Once the user clicks "Donate", the selected amount should appear as either a `console.log()` or `alert()`.
- There's no need to do anything for "Other". It can return the word "other" instead of a pre-defined amount.
- This UI should be responsive. There is not a design for what it should look like on smaller screens, so use your best judgement.
- Displaying icons for google/apple are not required.

### Form

- This is a form to allow a user to input their email.
- Once a user inputs their email and submits the form, either `console.log()` or `alert()` the submitted email.

### Table

- This component should utilize a fake API call located in **/src/components/Table/api.js**. It returns data after a time out. You should be able to call `getDataAsync()` like you would call any asynchronous function. It will return an array of items, which you should present in a table.
- Don't worry about the fake API call failing. We'll assume it will always return data.

## Get started

This repo was initialized with create-react-app.

You can get started with:

```bash
yarn install
yarn start
```

You can run tests with:

```bash
yarn test

# or

yarn test --watch
```
