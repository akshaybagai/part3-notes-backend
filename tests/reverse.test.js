const reverse = require('../utils/for_testing').reverse

test('reverse of a', () => {
    const result = reverse('a')

    expect(result).toBe('a')
})


test('reverse of abc', () => {
    const result = reverse('abc')

    expect(result).toBe('cba')
})