const linkedlist = new LinkedList();
linkedlist.push([1, 2, 3]);
linkedlist.push([5, 6, 7, 8]);
linkedlist.push({
    name: `Alex`,
    age: 30
});
linkedlist.push(`hello`);
linkedlist.push(999999);
linkedlist.push(`bool`);
linkedlist.push(null);
linkedlist.push(undefined);

describe('LinkedListNode', () => {
    it('should create linkedlist node with node.data: undefined', () => {
        const node = new Node();

        assert.strictEqual(node.data, undefined);

    });
    it('should create linkedlist node with node.next: null', () => {
        const node = new Node();

        assert.strictEqual(node.next, null);

    });
    it('should create linkedlist node with node.data value([1,2,3])', () => {
        const node = new Node([1, 2, 3]);

        assert.deepEqual(node.data, [1, 2, 3]);
        assert.deepEqual(node.next, null);

    });
    it('should create linkedlist node with object value ({key: 3456, map:`Hello`})', () => {
        const node = new Node({
            key: 3456,
            map: `Hello`
        });

        assert.deepEqual(node.data.key, 3456);
        assert.deepEqual(node.data.map, `Hello`);
        assert.deepEqual(node.next, null);

    });
});


describe("LinkedList constructor", function () {

    const linkedlist = new LinkedList();
    it("should create empty linked list", function () {
        assert.equal(linkedlist.head, null);
        assert.equal(linkedlist._length, 0);
    });

    const testData = [{
        expected: `indexOf`
    }, {
        expected: `push`
    }, {
        expected: `unshift`
    }, {
        expected: `pop`
    }, {
        expected: `shift`
    }, {
        expected: `insertAt`
    }, {
        expected: `searchNodeAt`
    }, {
        expected: `remove`
    }, {
        expected: `removeElement`
    }, {
        expected: `length`
    }, {
        expected: `toString`
    }, {
        expected: `isArray`
    }, {
        expected: `printList`
    }, {
        expected: `toArray`
    }, {
        expected: `isEmpty`
    }, {
        expected: `some`
    }, {
        expected: `every`
    }, {
        expected: `splice`
    }, ];
    testData.forEach(function (data) {
        const {
            expected
        } = data;
        it(`should has LinkedList method --> ${expected}`, function () {
            assert.property(linkedlist, expected);

        });
    });
});

describe(`LinkedList Methods`, function () {
    describe(`LinkedList method --> Index Of(element)`, function () {
        const testData = [{
            element: [1, 2, 3],
            expected: 0
        }, {
            element: [5, 6, 7, 8],
            expected: 1
        }, {
            element: {
                name: `Alex`,
                age: 30
            },
            expected: 2
        }, {
            element: `hello`,
            expected: 3
        }, {
            element: 999999,
            expected: 4
        }, {
            element: 'bool',
            expected: 5
        }, {
            element: null,
            expected: 6
        }, {
            element: undefined,
            expected: 7
        }, {
            element: `world`,
            expected: -1
        }];

        testData.forEach(function (data) {
            const {
                element,
                expected
            } = data;
            it(`should return index = ${expected} of argument node ${element} in LinkedList --> ${linkedlist.printList()}`, function () {

                const actual = linkedlist.indexOf(element);

                assert.deepEqual(actual, expected);

            });
        });
    });

    describe(`LinkedList method --> Pop()`, function () {
        const testData = [{
            expected: null

        }, {
            expected: [1, 2, 3]

        }, {
            expected: [5, 6, 7, 8]

        }, {
            expected: {
                name: `Alex`,
                age: 30
            }

        }, {
            expected: `hello`

        }, {
            expected: 999999

        }, {
            expected: 'bool'

        }, {
            expected: null

        }, {
            expected: undefined

        }];

        testData.reverse();

        testData.forEach(function (data) {
            const {
                expected
            } = data;
            it(`should return element = ${expected} in LinkedList --> ${linkedlist.printList()}`, function () {

                const actual = linkedlist.pop();

                assert.deepEqual(actual, expected);

            });
        });
    });

    describe(`LinkedList method --> Shift()`, function () {

        const linkedlist = new LinkedList();
        linkedlist.push([1, 2, 3]);
        linkedlist.push([5, 6, 7, 8]);
        linkedlist.push({
            name: `Alex`,
            age: 30
        });
        linkedlist.push(`hello`);
        linkedlist.push(999999);
        linkedlist.push(`bool`);
        linkedlist.push(null);
        linkedlist.push(undefined);

        const testData = [{
            expected: [1, 2, 3],
            expectedLength: 7
        }, {
            expected: [5, 6, 7, 8],
            expectedLength: 6
        }, {
            expected: {
                name: `Alex`,
                age: 30
            },
            expectedLength: 5
        }, {
            expected: `hello`,
            expectedLength: 4
        }, {
            expected: 999999,
            expectedLength: 3
        }, {
            expected: 'bool',
            expectedLength: 2
        }, {
            expected: null,
            expectedLength: 1
        }, {
            expected: undefined,
            expectedLength: 0
        }, {
            expected: null,
            expectedLength: 0
        }];


        testData.forEach(function (data) {
            const {
                expected,
                expectedLength
            } = data;
            it(`should return element = ${expected} in LinkedList --> ${linkedlist.printList()}`, function () {

                const actual = linkedlist.shift();
                const actualLength = linkedlist._length;

                assert.deepEqual(actual, expected);
                assert.deepEqual(actualLength, expectedLength);

            });
        });
    });

    describe(`LinkedList method --> Insert At(element, index)`, function () {

        const linkedlist = new LinkedList();
        linkedlist.push([1, 2, 3]);
        linkedlist.push([5, 6, 7, 8]);
        linkedlist.push({
            name: `Alex`,
            age: 30
        });
        linkedlist.push(`hello`);
        linkedlist.push(999999);
        linkedlist.push(`bool`);
        linkedlist.push(null);
        linkedlist.push(undefined);

        const testData = [{
            expected: [1, 2, 3],
            expectedLength: 9,
            index: 0
        }, {
            expected: `hellllooo`,
            expectedLength: 10,
            index: 1
        }, {
            expected: 9999,
            expectedLength: 11,
            index: 2
        }];


        testData.forEach(function (data) {
            const {
                expected,
                expectedLength,
                index
            } = data;
            it(`should return length ${expectedLength} after insert element = ${expected} in LinkedList --> ${linkedlist.printList()}`, function () {

                const actual = linkedlist.insertAt(expected, index);
                const actualLength = linkedlist._length;

                assert.deepEqual(actual, expectedLength);

            });
        });
    });

    describe(`LinkedList method --> Search Node At (position)`, function () {
        describe(`Search Node At (position) with normal position`, function () {
            const linkedlist = new LinkedList();
            linkedlist.push([1, 2, 3]);
            linkedlist.push([5, 6, 7, 8]);
            linkedlist.push({
                name: `Alex`,
                age: 30
            });
            linkedlist.push(`hello`);
            linkedlist.push(999999);
            linkedlist.push(`bool`);
            linkedlist.push(null);
            linkedlist.push(undefined);

            const testData = [{
                expected: [1, 2, 3],
                position: 1

            }, {
                expected: 999999,
                position: 5
            }, {
                expected: null,
                position: 7
            }];


            testData.forEach(function (data) {
                const {
                    expected,
                    position
                } = data;
                it(`should return node ${expected} with position ${position} in LinkedList --> ${linkedlist.printList()}`, function () {

                    const actual = linkedlist.searchNodeAt(position);
                    assert.deepEqual(actual.data, expected);

                });
            });
        });



        describe(`Search Node At (position) with wrong position`, function () {
            testData = [-120, 0, null, undefined];

            testData.forEach(function (data) {
                it(`should throw Error when position is ${data}`, function () {
                    assert.throw(function () {
                        linkedlist.searchNodeAt(data);
                    }, 'Failure: non-existent node in this list.');
                });
            });
        });



    });

    describe(`LinkedList method --> Remove (position)`, function () {
        describe(`Remove (position) with normal position`, function () {
            const linkedlist = new LinkedList();
            linkedlist.push([1, 2, 3]);
            linkedlist.push([5, 6, 7, 8]);
            linkedlist.push({
                name: `Alex`,
                age: 30
            });
            linkedlist.push(`hello`);
            linkedlist.push(999999);
            linkedlist.push(`bool`);
            linkedlist.push(null);
            linkedlist.push(undefined);

            const testData = [{
                expected: [1, 2, 3],
                position: 1

            }, {
                expected: 999999,
                position: 4
            }, {
                expected: null,
                position: 5
            }];


            testData.forEach(function (data) {
                const {
                    expected,
                    position
                } = data;
                it(`should return delete node ${expected} with position ${position} in LinkedList --> ${linkedlist.printList()}`, function () {

                    const actual = linkedlist.remove(position);
                    assert.deepEqual(actual.data, expected);

                });
            });

        });
        describe('Remove (position) with wrong position', () => {
            testData = [-120, 0, null, undefined];

            testData.forEach(function (data) {
                it(`should throw Error when position is ${data}`, function () {
                    assert.throw(function () {
                        linkedlist.remove(data);
                    }, 'Failure: non-existent node in this list.');
                });
            });
        });

    });

    describe(`LinkedList method --> Remove Element (element)`, function () {
        const linkedlist = new LinkedList();
        linkedlist.push([1, 2, 3]);
        linkedlist.push([5, 6, 7, 8]);
        linkedlist.push({
            name: `Alex`,
            age: 30
        });
        linkedlist.push(`hello`);
        linkedlist.push(999999);
        linkedlist.push(`bool`);
        linkedlist.push(null);
        linkedlist.push(undefined);

        const testData = [{
            expected: [1, 2, 3],
            expectedLength: 7

        }, {
            expected: 999999,
            expectedLength: 6
        }, {
            expected: null,
            expectedLength: 5
        }];


        testData.forEach(function (data) {
            const {
                expected,
                expectedLength
            } = data;
            it(`should return remove element ${expected} in LinkedList --> ${linkedlist.printList()}`, function () {

                const actual = linkedlist.removeElement(expected);
                assert.deepEqual(actual, expected);
                assert.deepEqual(linkedlist._length, expectedLength);

            });
        });
    });

    describe(`LinkedList method --> Length()`, function () {
        const linkedlist = new LinkedList();

        const testData = [{
            element: [1, 2, 3],
            expected: 1
        },
            {
                element: [1, 2, 3, 5],
                expected: 2
            }, {
                element: `[1,2,3,5]`,
                expected: 3
            }
        ];

        testData.forEach(function (data) {
            const {element, expected} = data;
            it(`should return length = ${expected} of LinkedList`, function () {
                linkedlist.push(element);
                assert.deepEqual(expected, linkedlist._length);
            });
        });
    });

    describe(`LinkedList method --> isArray(element)`, function () {
        const linkedlist = new LinkedList();

        const testData = [{
            element: [1, 2, 3],
            expected: true
        },
            {
                element: {name: 123, age: 455},
                expected: false
            }, {
                element: `[1,2,3,5]`,
                expected: false
            }, {
                element: 7777,
                expected: false
            }, {
                element: undefined,
                expected: false
            }
        ];
        let x = 1;

        testData.forEach(function (data) {
            const {element, expected} = data;
            it(`should return boolean = ${expected} of element ${element} is Array in LinkedList`, function () {
                linkedlist.push(element);

                const actual = linkedlist.isArray(linkedlist.searchNodeAt(x++));

                assert.deepEqual(expected, actual);
            });
        });
    });

    describe(`LinkedList method --> toString()`, function () {
        const linkedlist = new LinkedList();

        const testData = [{
            element: [1, 2, 3],
            expected: '1,2,3'
        },
            {
                element: {name: 123, age: 455},
                expected: '1,2,3,[object Object]'
            }, {
                element: `[1,2,3,5]`,
                expected: '1,2,3,[object Object],[1,2,3,5]'
            }, {
                element: 7777,
                expected: '1,2,3,[object Object],[1,2,3,5],7777'
            }, {
                element: undefined,
                expected: '1,2,3,[object Object],[1,2,3,5],7777,'
            }
        ];


        testData.forEach(function (data) {
            const {element, expected} = data;
            it(`should return string of element in LinkedList`, function () {
                linkedlist.push(element);

                const actual = linkedlist.toString();

                assert.deepEqual(expected, actual);
            });
        });
    });

    describe(`LinkedList method --> toArray()`, function () {
        const linkedlist = new LinkedList();

        const testData = [{
            element: [1, 2, 3],
            expected: [[1, 2, 3]]
        },
            {
                element: {name: 123, age: 455},
                expected: [[1, 2, 3], {name: 123, age: 455}]
            }, {
                element: `[1,2,3,5]`,
                expected: [[1, 2, 3], {name: 123, age: 455}, `[1,2,3,5]`]
            }, {
                element: 7777,
                expected: [[1, 2, 3], {name: 123, age: 455}, `[1,2,3,5]`, 7777]
            }, {
                element: undefined,
                expected: [[1, 2, 3], {name: 123, age: 455}, `[1,2,3,5]`, 7777, undefined]
            }
        ];


        testData.forEach(function (data) {
            const {element, expected} = data;
            it(`should return Array of element in LinkedList`, function () {
                linkedlist.push(element);

                const actual = linkedlist.toArray();

                assert.deepEqual(expected, actual);
            });
        });
    });

    describe(`LinkedList method --> printList()`, function () {
        const linkedlist = new LinkedList();

        const testData = [{
            element: [1, 2, 3],
            expected: `1,2,3 / `
        },
            {
                element: {name: 123, age: 455},
                expected: `1,2,3 / [object Object] / `
            }, {
                element: `[1,2,3,5]`,
                expected: `1,2,3 / [object Object] / [1,2,3,5] / `
            }, {
                element: 7777,
                expected: `1,2,3 / [object Object] / [1,2,3,5] / 7777 / `
            }, {
                element: undefined,
                expected: `1,2,3 / [object Object] / [1,2,3,5] / 7777 / undefined / `
            }
        ];


        testData.forEach(function (data) {
            const {element, expected} = data;
            it(`should return liststring of element in LinkedList`, function () {
                linkedlist.push(element);

                const actual = linkedlist.printList();

                assert.deepEqual(expected, actual);
            });
        });
    });

    describe(`LinkedList method --> some(callback)`, function () {
        const linkedlist = new LinkedList();
        it(`should return true if one or more element LinkedList return true in callback`, function () {
            linkedlist.push([1, 2, 3]);
            linkedlist.push([5, 6, 7, 8]);
            linkedlist.push({
                name: `Alex`,
                age: 30
            });
            linkedlist.push(`hello`);
            linkedlist.push(999999);
            linkedlist.push(`bool`);
            linkedlist.push(null);
            linkedlist.push(undefined);
            const actual = linkedlist.some(node => node.data == `hello`);
            let flag = true;
            assert.deepEqual(flag, actual);
        });
        it(`should return false if no one element LinkedList return true in callback`, function () {
            linkedlist.remove(1);
            const actual = linkedlist.some(node => node.data == `XXXXXXXXXX`);
            let flag = false;
            assert.deepEqual(flag, actual);
        });

    });

    describe(`LinkedList method --> every(callback)`, function () {
        const linkedlist = new LinkedList();
        it(`should return true if ALL element LinkedList return true in callback`, function () {
            linkedlist.push([1, 2, 3]);
            linkedlist.push([5, 6, 7, 8]);
            linkedlist.push({
                name: `Alex`,
                age: 30
            });
            linkedlist.push(`hello`);
            linkedlist.push(999999);
            linkedlist.push(`bool`);
            linkedlist.push(null);
            linkedlist.push(undefined);
            const actual = linkedlist.every(node => node.data != null);
            let flag = true;
            assert.deepEqual(flag, actual);
        });
        it(`should return false if one element LinkedList return false in callback`, function () {
            linkedlist.remove(1);
            const actual = linkedlist.every(node => node.data == `XXXXXXXXXX`);
            let flag = false;
            assert.deepEqual(flag, actual);
        });

    });

    describe(`LinkedList method --> isEmpty()`, function () {
        const linkedlist = new LinkedList();
        it(`should return True if LinkedList is Empty`, function () {

            const actual = linkedlist.isEmpty();
            let flag = true;
            assert.deepEqual(flag, actual);
        });
        it(`should return False if LinkedList is !Empty`, function () {
            linkedlist.push([1, 2, 3]);
            linkedlist.push([5, 6, 7, 8]);
            linkedlist.push({
                name: `Alex`,
                age: 30
            });
            linkedlist.push(`hello`);
            linkedlist.push(999999);
            linkedlist.push(`bool`);
            linkedlist.push(null);
            linkedlist.push(undefined);
            linkedlist.remove(1);
            const actual = linkedlist.isEmpty();
            let flag = false;
            assert.deepEqual(flag, actual);
        });

    });

    describe(`LinkedList method --> Push(element)`, function () {
        const testData = [{
            element: [1, 2, 3],
            expected: [1, 2, 3]
        }, {
            element: [5, 6, 7, 8],
            expected: [5, 6, 7, 8]
        }, {
            element: {
                name: `Alex`,
                age: 30
            },
            expected: {
                name: `Alex`,
                age: 30
            }
        }, {
            element: `hello`,
            expected: `hello`
        }, {
            element: 999999,
            expected: 999999
        }, {
            element: 'bool',
            expected: 'bool'
        }, {
            element: null,
            expected: null
        }, {
            element: undefined,
            expected: undefined
        }];

        testData.forEach(function (data) {
            const {
                element,
                expected
            } = data;
            it(`should return element = ${expected} after push in LinkedList`, function () {

                const actual = linkedlist.push(element);

                assert.deepEqual(actual, expected);

            });
        });
    });

    describe(`LinkedList method --> ToLinkedList()`, function () {
        const linkedlist = new LinkedListSecond();
        it(`should return this LinkedList`, function () {

            linkedlist.push([1, 2, 3]);
            linkedlist.push([5, 6, 7, 8]);
            linkedlist.push({
                name: `Alex`,
                age: 30
            });
            linkedlist.push(`hello`);
            linkedlist.push(999999);
            linkedlist.push(`bool`);
            linkedlist.push(null);
            linkedlist.push(undefined);
            const actual = linkedlist.toLinkedList();
            assert.deepEqual(linkedlist, actual);
        });
    });

    describe(`LinkedList method --> Sort()`, function () {
        describe(`Sorting LinkedList when data --> typeof number`, function () {
            const linkedlist = new LinkedListSecond();
            linkedlist.push(1);
            linkedlist.push(123);
            linkedlist.push(2);
            linkedlist.push(null);
            linkedlist.push(999999);
            linkedlist.push(12);
            linkedlist.push(988);
    
            it(`should return new sorted LinkedList when Node data --> number`, function () {
                const expected = new LinkedListSecond();
                expected.push(null);
                expected.push(1);
                expected.push(2);
                expected.push(12);
                expected.push(123);
                expected.push(988);
                expected.push(999999);
    
                const actual = linkedlist.sort();
                assert.deepEqual(expected, actual);
            });
        });

        describe(`Sorting LinkedList when data --> type of string`, function () {
            const linkedlist = new LinkedListSecond();
            linkedlist.push(`j`);
            linkedlist.push(`a`);
            linkedlist.push(`A`);
            linkedlist.push(`Ab`);
            linkedlist.push(`c`);
            linkedlist.push(`12`);
            linkedlist.push(`988`);

            it(`should return new sorted LinkedList when Node data --> string`, function () {
                const expected = new LinkedListSecond();
                expected.push(`12`);
                expected.push(`988`);
                expected.push(`A`);
                expected.push(`Ab`);
                expected.push(`a`);
                expected.push(`c`);
                expected.push(`j`);

                const actual = linkedlist.sort();
                assert.deepEqual(expected, actual);
            });
        });
    });

    describe(`LinkedList method --> Unshift(element)`, function () {
        const testData = [{
            element: [1, 2, 3],
            expected: 1
        }, {
            element: [5, 6, 7, 8],
            expected: 2
        }, {
            element: {
                name: `Alex`,
                age: 30
            },
            expected: 3
        }, {
            element: `hello`,
            expected: 4
        }, {
            element: 999999,
            expected: 5
        }, {
            element: 'bool',
            expected: 6
        }, {
            element: null,
            expected: 7
        }, {
            element: undefined,
            expected: 8
        }];

        const linkedlist = new LinkedList();

        testData.forEach(function (data) {
            const {
                element,
                expected
            } = data;
            it(`should return LinkedList length = ${expected} after add element --> ${element}`, function () {

                const actual = linkedlist.unshift(element);

                assert.deepEqual(actual, expected);

            });
        });
    });

    describe(`LinkedList method --> Splice(index, deleteCount, elem1, ...elem[N])`, function () {
        const testData = [{
            index: 0,
            deleteCount: 0,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 0,
            expectedNode: null
        }, {
            index: 0,
            deleteCount: 0,
            insertEl1: '',
            insertEl2: '',
            expected: 0,
            expectedNode: null
        }, {
            index: 0,
            deleteCount: 1,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 1,
            expectedNode: [1,2,3,4]
        }, {
            index: 0,
            deleteCount: 2,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 2,
            expectedNode: [1,2,3]
        }, {
            index: 0,
            deleteCount: 5,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 5
        },  {
            index: 1,
            deleteCount: 2,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 2
        }, {
            index: 3,
            deleteCount: 0,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 0
        }, {
            index: 5,
            deleteCount: 2,
            insertEl1: 'Hello',
            insertEl2: 'World!!!',
            expected: 2
        },];

        testData.forEach(function (data) {
            const {
                index,
                deleteCount,
                insertEl1,
                insertEl2,
                expected,
                expectedNode
            } = data;
            const linkedlist = new LinkedList();
            linkedlist.push([1, 2, 3]);
            linkedlist.push([5, 6, 7, 8]);
            linkedlist.push({
                name: `Alex`,
                age: 30
            });
            linkedlist.push(`hello`);
            linkedlist.push(999999);
            linkedlist.push(`bool`);
            linkedlist.push(null);
            linkedlist.push(undefined);

            it(`should return new LinkedList (length=${expected}) with remove element of index = (${index}) if deleteCount = (${deleteCount}), and add (${insertEl1}) and add (${insertEl2})`, function () {
                const actual = linkedlist.splice(index, deleteCount, insertEl1, insertEl2);
                assert.deepEqual(actual._length, expected);
            });
        });
    });
});
