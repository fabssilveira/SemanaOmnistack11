const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate a Unique ID', () => {
    it('Should generate a unique id', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});