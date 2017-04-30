
export default  (value, element, done) => {
  let targetValue = browser.element(`.item .content .${element}`).getText();

  expect(targetValue).toEqual(value);
  done();
};