describe('List Component', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should have limits ul', () => {
        expect(element(by.css('ul.pagination')).isPresent()).toEqual(true);
    });
});
