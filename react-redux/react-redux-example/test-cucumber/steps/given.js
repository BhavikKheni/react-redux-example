import openWebsite from '../support/action/openWebsite';

// 1 ()
export default function given() {
  this.Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
  );
};