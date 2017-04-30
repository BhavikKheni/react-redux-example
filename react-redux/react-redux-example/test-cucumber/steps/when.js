import clickElement from '../support/action/clickElement';
import clickElementWithText from '../support/action/clickElementWithText';
import submitForm from '../support/action/submitForm';

const writingText = (value, element, done) => {
  let target = `[placeholder="${element}"]`;
  browser.element(target).setValue(value);
  done();
}

export default function when() {
 this.When(
    /^I click on element "([^"]*)?"$/,
    clickElement
  );
  this.When(
    /^I click on ([^"]*)$/,
    clickElementWithText
  );

  this.When(
    /^I submit the form "([^"]*)?"$/,
    submitForm
  );

  this.When(
    /^I writing "([^"]*)" to "([^"]*)"$/,
    writingText
  )
};