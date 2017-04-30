    describe('render form component', () => {

    beforeAll(() => {
        browser.url('/');
    });

    it('render new contact form', () => {

        browser.setValue('#firstName', 'Bhavik');
        browser.setValue('#lastName', 'Kheni');
        browser.setValue('#email', 'kheni@gmail.com');

        $('#button').click();
        browser.pause(4000);
        expect($('.item .content .header').getText()).toContain('Bhavik');
        expect($('.item .content .description a').getText()).toContain('kheni@gmail.com');
        
    });
});