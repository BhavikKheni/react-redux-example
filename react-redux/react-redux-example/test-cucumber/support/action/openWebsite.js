export default (type, page, done) => {
  const url = (type === 'url') ? page : browser.options.baseUrl + page;

  browser.windowHandleSize({ width: 1024, height: 960 });

  browser.url(url);

  done();
};