export default (element, done) => {
  browser.click(`button=${element}`);
  done();
};