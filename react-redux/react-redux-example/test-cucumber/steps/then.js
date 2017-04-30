import checkListItem from '../support/check/checkListItem';

export default function then() {
  this.Then(
    /^I expect that "([^"]*)" is "([^"]*)"$/,
    checkListItem
  )
};