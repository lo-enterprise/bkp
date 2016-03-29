var bkp = require('../index.js');

var assert = require('assert');

describe('Problem of the coffee machine', function() {
    describe('Return the maximum number of coins with change 1x1, 1x2, 1x3, 1x4 and 1x5', function() {
        var list = [
            { name: '1', weight: 1, value: 1, pieces: 1 },
            { name: '2', weight: 2, value: 2, pieces: 1 },
            { name: '3', weight: 3, value: 3, pieces: 1 },
            { name: '4', weight: 4, value: 4, pieces: 1 },
            { name: '5', weight: 5, value: 5, pieces: 1 },
        ];

        it('If ask 8 should be 1x1, 1x3 and 1x4', function() {
            var expected = {
                "totalWeight": 8,
                "totalValue": 8,
                "items": [
                    { "count": 1, "item": "1" },
                    { "count": 1, "item": "3" },
                    { "count": 1, "item": "4" },
                ]
            };

            assert.deepEqual(expected, bkp.Bounded(list, 8));
        });
    });
});

describe('A tourist wants to make a good trip at the weekend with his friends. They will go to the mountains to see the wonders of nature. So he needs some items during the trip. Food, clothing, etc. He has a good knapsack for carrying the things, but he knows that he can carry only 4 kg weight in his knapsack, because they will make the trip from morning to evening. He creates a list of what he wants to bring for the trip, but the total weight of all items is too much. He adds a value to each item. The value represents how important the thing for the tourist. The list contains which items are the wanted things for the trip, what is the weight and value of an item, and how many units does he have from each items. ', function() {
    describe('The tourist can choose to take any combination of items from the list, and some number of each item is available (see the column "Piece(s)" of the list!). He may not cut the items, so he can only take whole units of any item.', function() {
        var list = [
            { name: 'map', weight: 9, value: 150, pieces: 1 },
            { name: 'compass', weight: 13, value: 35, pieces: 1 },
            { name: 'water', weight: 153, value: 200, pieces: 2 },
            { name: 'sandwich', weight: 50, value: 60, pieces: 2 },
            { name: 'glucose', weight: 15, value: 60, pieces: 2 },
            { name: 'tin', weight: 68, value: 45, pieces: 3 },
            { name: 'banana', weight: 27, value: 60, pieces: 3 },
            { name: 'apple', weight: 39, value: 40, pieces: 3 },
            { name: 'cheese', weight: 23, value: 30, pieces: 1 },
            { name: 'beer', weight: 52, value: 10, pieces: 3 },
            { name: 'suntan, cream', weight: 11, value: 70, pieces: 1 },
            { name: 'camera', weight: 32, value: 30, pieces: 1 },
            { name: 'T-shirt', weight: 24, value: 15, pieces: 2 },
            { name: 'trousers', weight: 48, value: 10, pieces: 2 },
            { name: 'umbrella', weight: 73, value: 40, pieces: 1 },
            { name: 'waterproof, trousers', weight: 42, value: 70, pieces: 1 },
            { name: 'waterproof, overclothes', weight: 43, value: 75, pieces: 1 },
            { name: 'note-case', weight: 22, value: 80, pieces: 1 },
            { name: 'sunglasses', weight: 7, value: 20, pieces: 1 },
            { name: 'towel', weight: 18, value: 12, pieces: 2 },
            { name: 'socks', weight: 4, value: 50, pieces: 1 },
            { name: 'book', weight: 30, value: 10, pieces: 2 }
        ];

        describe('Which items does the tourist carry in his knapsack so that their total weight does not exceed 4 kg, and their total value is maximised?', function() {
            var expected = {
                "totalWeight": 396,
                "totalValue": 1010,
                "items": [
                    { "count": 1, "item": "map" },
                    { "count": 1, "item": "compass" },
                    { "count": 1, "item": "water" },
                    { "count": 2, "item": "glucose" },
                    { "count": 3, "item": "banana" },
                    { "count": 1, "item": "cheese" },
                    { "count": 1, "item": "suntan, cream" },
                    { "count": 1, "item": "waterproof, overclothes" },
                    { "count": 1, "item": "note-case" },
                    { "count": 1, "item": "sunglasses" },
                    { "count": 1, "item": "socks" }
                ]
            };
            it('Given ' + JSON.stringify(list) + '\nShould be ' + JSON.stringify(expected), function() {
                assert.deepEqual(expected, bkp.Bounded(list, 400));
            });
        });
    });
});
