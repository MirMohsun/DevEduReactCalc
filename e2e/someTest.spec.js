describe('Example', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have welcome screen', async () => {
        await element(by.id('1')).tap();
        await element(by.text('+')).tap();
        // await element(by.id('2')).tap();
        // await element(by.id('3')).tap();
        // await element(by.id('4')).tap();
        // await element(by.id('5')).tap();
        // await element(by.id('6')).tap();
        // await element(by.id('7')).tap();
        // await element(by.id('8')).tap();
        await element(by.id('9')).tap();
        await element(by.text('.')).tap();
        await element(by.id('0')).tap();
        await element(by.text('=')).tap();

        await expect(element(by.id('result'))).toHaveText('10');
    });
});