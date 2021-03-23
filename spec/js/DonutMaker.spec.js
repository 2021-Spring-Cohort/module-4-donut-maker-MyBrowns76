describe('FEATURE : Have a way to count donuts.', () => {
    describe('Can add to donut count:', () => {
        // refactor
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker;
        });
        it('Should start with a click count of 0.', () => {
            // const underTest = new DonutMaker();
            expect(underTest.clickCount).toBe(0);
        });
        it('Should add one click to the click count when it records a click.', () => {
           
            underTest.recordClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('Should have a click count of 2 when it records 2 clicks.', () => {
            
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.clickCount).toBe(2);
    });
});
});