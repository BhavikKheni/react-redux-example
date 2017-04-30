export default (element, done) => {
  browser.submitForm(element);
  done();
};