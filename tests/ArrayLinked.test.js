describe('ArrayList Methods', () => {

    describe('Push method in Array List', () => {

        it(`should return array length 6 includes added element in array : [1,2,3,4,5,6]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 6;
            const actual = alis.push(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 7 includes added elements in array : [1,2,3,4,5,1,2]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.push(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 8 includes added elements in array : [1,2,3,4,5,1,2,3]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.push(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 includes added elements in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = 1;
            const actual = alis.push(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 5 includes added elements in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.push();
            assert.strictEqual(actual, expected);
        });

        it(`should return array [1,2,3,4,5,2,2] includes added elements 2,2 in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5, 2, 2];
            alis.push(2, 2);
            const actual = alis.arr;
            assert.deepEqual(actual, expected);
        });
    });

    describe('Pop method in Array List', () => {

        it(`should return first element equals 5 includes added element in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });
        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });

        it(`should return undefined in empty array`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = undefined;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });


    });

    describe('Shift method in Array List', () => {

        it(`should return first element equals 1 in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 1;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

        it(`should return undefined in empty array`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = undefined;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

    });

    describe('Unshift method in Array List', () => {

        it(`should return array length 6 includes added element in array : [1,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 6;
            const actual = alis.unshift(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 7 includes added elements in array : [1,2,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.unshift(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 8 includes added elements in array : [1,2,3,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 8;
            const actual = alis.unshift(1, 2, 3);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 includes added elements in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = 0;
            const actual = alis.unshift();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 5 includes added elements in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.unshift();
            assert.strictEqual(actual, expected);
        });

        it(`should adds '0' to the beginning of array and returns length of array : [0,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1,2,3,4,5];
            const expected = 6;
            const actual = alis.unshift(0);
            assert.strictEqual(actual, expected);
        });

        it(`should adds '-2,-1' elements to the beginning of array and returns length of array : [-2,-1,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1,2,3,4,5];
            const expected = 7;
            const actual = alis.unshift(-2,-1);
            assert.strictEqual(actual, expected);
        });

        it(`should adds array [-3] to the beginning of an array and returns length of array : [[-3],1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1,2,3,4,5];
            const expected = 6;
            const actual = alis.unshift([-3]);
            assert.strictEqual(actual, expected);
        });

    });

    describe('Length method in Array List', () => {

        it(`should return array length 5 in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });
        it(`should returns length 0 of array : []`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = 0;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 0 in array : []`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = 0;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

    });

    describe('iSArray method in Array List', () => {


        it(`should return true if Array`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = true;
            const actual = alis.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if Object`, () => {
            const alis = new ArrayList();
            const expected = false;
            const actual = alis.isArray(alis);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if Number`, () => {
            const alis = new ArrayList();
            const i = 5;
            const expected = false;
            const actual = alis.isArray(i);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if String`, () => {
            const alis = new ArrayList();
            const i = "5";
            const expected = false;
            const actual = alis.isArray(i);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if Function`, () => {
            const alis = new ArrayList();
            const i = new Function();
            const expected = false;
            const actual = alis.isArray(i);
            assert.strictEqual(actual, expected);
        });
        it(`should return false if determines whether the passed value is an array : {}`, () => {
            const alis = new ArrayList();
            alis.arr = {};
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if determines whether the passed value is an array : null`, () => {
            const alis = new ArrayList();
            alis.arr = null;
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if determines whether the passed value is an array : undefined`, () => {
            const alis = new ArrayList();
            alis.arr = undefined;
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });


        it(`should return false if determines whether the passed value is an array : "Array"`, () => {
            const alis = new ArrayList();
            alis.arr = "Array";
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if determines whether the passed value is an array : true`, () => {
            const alis = new ArrayList();
            alis.arr = true;
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if determines whether the passed value is an array : false`, () => {
            const alis = new ArrayList();
            alis.arr = false;
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });


    });

    describe('Remove method in Array List', () => {

        it(`should returns 3 if deleted element with index 2 of array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 3;
            const actual = alis.remove(2);
            assert.strictEqual(actual, expected);
        });

        it(`should returns undefined if turn to a non-existent index 5 of array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = undefined;
            const actual = alis.remove(5);
            assert.strictEqual(actual, expected);
        });

        it(`should returns undefined if turn to a non-existent index 2 of empty array : []`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = undefined;
            const actual = alis.remove(0);
            assert.deepEqual(actual, expected);
        });

    });

    describe('Some method in Array List', () => {


        it(`should return true if Array`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];

            function greaterThan(a) {
                if (a > this) return true;
                else return false;
            }

            const expected = true;
            const actual = alis.some(alis.arr, greaterThan, 4);
            assert.strictEqual(actual, expected);
        });
        it(`should return false if whether all elements in the array [0,1,2,3,1] not passes the test (i<4)`, () => {
            const alis = new ArrayList();
            alis.arr = [0, 1, 2, 3, 1];

            function greaterThan(a) {
                if (a >= this) return true;
                else return false;
            }

            const expected = false;
            const actual = alis.some(alis.arr, greaterThan, 4);
            assert.strictEqual(actual, expected);
        });

    });

    describe('Every method in Array List', () => {

        it(`should return true if whether all elements in the array [9,8,7,6,5] passes the test (i<4)`, () => {
            const alis = new ArrayList();
            alis.arr = [9, 8, 7, 6, 5];

            function greaterThan(a) {
                if (a >= this) return true;
                else return false;
            }

            const expected = true;
            const actual = alis.every(alis.arr, greaterThan, 4);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if whether all elements in the array [0,1,2,3,4] not passes the test (i<4)`, () => {
            const alis = new ArrayList();
            alis.arr = [0, 1, 2, 3, 3];

            function greaterThan(a) {
                if (a > this) return true;
                else return false;
            }

            const expected = false;
            const actual = alis.every(alis.arr, greaterThan, 4);
            assert.strictEqual(actual, expected);
        });

    });

    describe('Splice method in Array List', () => {

    it(`should returns deleted  two elements from index 2 of array : [1,2,3,4,5]`, () => {
        const alis = new ArrayList();
        alis.arr = [1, 2, 3, 4, 5];
        const expected = [];
        const actual = alis.splice(0, 0, 3);
        assert.deepEqual(actual, expected);
    });

    it(`should returns deleted  two elements from index 2 of array : [1,2,3,4,5]`, () => {
        const alis = new ArrayList();
        alis.arr = [1, 2, 3, 4, 5];
        const expected = [3, 4];
        const actual = alis.splice(2, 2);
        assert.deepEqual(actual, expected);
    });

    it(`should returns three elements from index 0 of array : [1,2,3,4,5]`, () => {
        const alis = new ArrayList();
        alis.arr = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3];
        const actual = alis.splice(0, 3);
        assert.deepEqual(actual, expected);
    });

    it(`should returns all deleted elements from index 2 of array : [1,2,3,4,5]`, () => {
        const alis = new ArrayList();
        alis.arr = [1, 2, 3, 4, 5];
        const expected = [3, 4, 5];
        const actual = alis.splice(2);
        assert.deepEqual(actual, expected);
    });

    it(`should returns three deleted elements from 5 index of the end of array : [1,2,3,4,5]`, () => {
        const alis = new ArrayList();
        alis.arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const expected = [4, 5, 6];
        const actual = alis.splice(-5, 3);
        assert.deepEqual(actual, expected);
    });

    it(`should returns all deleted elements from 0 index of array : [1,2,3,4,5]`, () => {
        const alis = new ArrayList();
        alis.arr = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3, 4, 5];
        const actual = alis.splice(0);
        assert.deepEqual(actual, expected);
    });

    it(`should returns all deleted elements from 3 index of the end array : [1,2,3,4,5]`, () => {
        const alis = new ArrayList();
        alis.arr = [1, 2, 3, 4, 5];
        const expected = [3, 4, 5];
        const actual = alis.splice(-3);
        assert.deepEqual(actual, expected);
    });

});

    describe('toArrayList method in Array List', () => {

        it(`should return first element equals 5 includes added element in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5];
            const actual = alis.toArrayList();
            assert.deepEqual(actual, expected);
        });
        /*it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });

        it(`should return undefined in empty array`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = undefined;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });*/


    });
});
describe('SecondArrayList Methods', () => {

    describe('Push method in Array List', () => {

        it(`should return array length 6 includes added element in array : [1,2,3,4,5,6]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 6;
            const actual = alis.push(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 7 includes added elements in array : [1,2,3,4,5,1,2]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.push(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 8 includes added elements in array : [1,2,3,4,5,1,2,3]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.push(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 includes added elements in array : [1]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [];
            const expected = 1;
            const actual = alis.push(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 5 includes added elements in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.push();
            assert.strictEqual(actual, expected);
        });

        it(`should return array [1,2,3,4,5,2,2] includes added elements 2,2 in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5, 2, 2];
            alis.push(2, 2);
            const actual = alis.arr;
            assert.deepEqual(actual, expected);
        });
    });

    describe('Pop method in Array List', () => {

        it(`should return first element equals 5 includes added element in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });
        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });

        it(`should return undefined in empty array`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = undefined;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });


    });

    describe('Shift method in Array List', () => {

        it(`should return first element equals 1 in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 1;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

        it(`should return undefined in empty array`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = undefined;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

    });

    describe('Unshift method in Array List', () => {

        it(`should return array length 6 includes added element in array : [1,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 6;
            const actual = alis.unshift(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 7 includes added elements in array : [1,2,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.unshift(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 8 includes added elements in array : [1,2,3,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 8;
            const actual = alis.unshift(1, 2, 3);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 includes added elements in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = 0;
            const actual = alis.unshift();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 5 includes added elements in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.unshift();
            assert.strictEqual(actual, expected);
        });

        it(`should adds '0' to the beginning of array and returns length of array : [0,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1,2,3,4,5];
            const expected = 6;
            const actual = alis.unshift(0);
            assert.strictEqual(actual, expected);
        });

        it(`should adds '-2,-1' elements to the beginning of array and returns length of array : [-2,-1,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1,2,3,4,5];
            const expected = 7;
            const actual = alis.unshift(-2,-1);
            assert.strictEqual(actual, expected);
        });

        it(`should adds array [-3] to the beginning of an array and returns length of array : [[-3],1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1,2,3,4,5];
            const expected = 6;
            const actual = alis.unshift([-3]);
            assert.strictEqual(actual, expected);
        });

    });

    describe('Length method in Array List', () => {

        it(`should return array length 5 in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });
        it(`should returns length 0 of array : []`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = 0;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 0 in array : []`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = 0;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

    });

    describe('iSArray method in Array List', () => {


        it(`should return true if Array`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = true;
            const actual = alis.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if Object`, () => {
            const alis = new ArrayList();
            const expected = false;
            const actual = alis.isArray(alis);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if Number`, () => {
            const alis = new ArrayList();
            const i = 5;
            const expected = false;
            const actual = alis.isArray(i);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if String`, () => {
            const alis = new ArrayList();
            const i = "5";
            const expected = false;
            const actual = alis.isArray(i);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if Function`, () => {
            const alis = new ArrayList();
            const i = new Function();
            const expected = false;
            const actual = alis.isArray(i);
            assert.strictEqual(actual, expected);
        });
        it(`should return false if determines whether the passed value is an array : {}`, () => {
            const alis = new ArrayList();
            alis.arr = {};
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if determines whether the passed value is an array : null`, () => {
            const alis = new ArrayList();
            alis.arr = null;
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if determines whether the passed value is an array : undefined`, () => {
            const alis = new ArrayList();
            alis.arr = undefined;
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });


        it(`should return false if determines whether the passed value is an array : "Array"`, () => {
            const alis = new ArrayList();
            alis.arr = "Array";
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if determines whether the passed value is an array : true`, () => {
            const alis = new ArrayList();
            alis.arr = true;
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if determines whether the passed value is an array : false`, () => {
            const alis = new ArrayList();
            alis.arr = false;
            const expected = false;
            const actual = Array.isArray(alis.arr);
            assert.strictEqual(actual, expected);
        });


    });

    describe('Remove method in Array List', () => {

        it(`should returns 3 if deleted element with index 2 of array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 3;
            const actual = alis.remove(2);
            assert.strictEqual(actual, expected);
        });

        it(`should returns undefined if turn to a non-existent index 5 of array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = undefined;
            const actual = alis.remove(5);
            assert.strictEqual(actual, expected);
        });

        it(`should returns undefined if turn to a non-existent index 2 of empty array : []`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = undefined;
            const actual = alis.remove(0);
            assert.deepEqual(actual, expected);
        });

    });

    describe('Some method in Array List', () => {


        it(`should return true if Array`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];

            function greaterThan(a) {
                if (a > this) return true;
                else return false;
            }

            const expected = true;
            const actual = alis.some(alis.arr, greaterThan, 4);
            assert.strictEqual(actual, expected);
        });
        it(`should return false if whether all elements in the array [0,1,2,3,1] not passes the test (i<4)`, () => {
            const alis = new ArrayList();
            alis.arr = [0, 1, 2, 3, 1];

            function greaterThan(a) {
                if (a >= this) return true;
                else return false;
            }

            const expected = false;
            const actual = alis.some(alis.arr, greaterThan, 4);
            assert.strictEqual(actual, expected);
        });

    });

    describe('Every method in Array List', () => {

        it(`should return true if whether all elements in the array [9,8,7,6,5] passes the test (i<4)`, () => {
            const alis = new ArrayList();
            alis.arr = [9, 8, 7, 6, 5];

            function greaterThan(a) {
                if (a >= this) return true;
                else return false;
            }

            const expected = true;
            const actual = alis.every(alis.arr, greaterThan, 4);
            assert.strictEqual(actual, expected);
        });

        it(`should return false if whether all elements in the array [0,1,2,3,4] not passes the test (i<4)`, () => {
            const alis = new ArrayList();
            alis.arr = [0, 1, 2, 3, 3];

            function greaterThan(a) {
                if (a > this) return true;
                else return false;
            }

            const expected = false;
            const actual = alis.every(alis.arr, greaterThan, 4);
            assert.strictEqual(actual, expected);
        });

    });

    describe('Splice method in Array List', () => {

        it(`should returns deleted  two elements from index 2 of array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [];
            const actual = alis.splice(0, 0, 3);
            assert.deepEqual(actual, expected);
        });

        it(`should returns deleted  two elements from index 2 of array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [3, 4];
            const actual = alis.splice(2, 2);
            assert.deepEqual(actual, expected);
        });

        it(`should returns three elements from index 0 of array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3];
            const actual = alis.splice(0, 3);
            assert.deepEqual(actual, expected);
        });

        it(`should returns all deleted elements from index 2 of array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [3, 4, 5];
            const actual = alis.splice(2);
            assert.deepEqual(actual, expected);
        });

        it(`should returns three deleted elements from 5 index of the end of array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5, 6, 7, 8];
            const expected = [4, 5, 6];
            const actual = alis.splice(-5, 3);
            assert.deepEqual(actual, expected);
        });

        it(`should returns all deleted elements from 0 index of array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5];
            const actual = alis.splice(0);
            assert.deepEqual(actual, expected);
        });

        it(`should returns all deleted elements from 3 index of the end array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [3, 4, 5];
            const actual = alis.splice(-3);
            assert.deepEqual(actual, expected);
        });

    });

    describe('toArrayList method in Array List', () => {

        it(`should return first element equals 5 includes added element in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5];
            const actual = alis.toArrayList();
            assert.deepEqual(actual, expected);
        });
        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1];
            const expected = [1];
            const actual = alis.toArrayList();
            assert.deepEqual(actual, expected);
        });

        it(`should return undefined in empty array`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [];
            const expected = [];
            const actual = alis.toArrayList();
            assert.deepEqual(actual, expected);
        });

        it(`should return array [333,50,[],'array',{}] equal array : [333,50,[],'array',{}]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [333,50,[],'array',{}];
            const expected = [333,50,[],'array',{}];
            const actual = alis.toArrayList();
            assert.deepEqual(actual, expected);
        });

        it(`should return array [333,50,[],'array',{}] equal array : [333,50,[],'array',{}]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [333,50,[],'array',{}];
            const expected = [333,50,[],'array',{}];
            const actual = alis.toArrayList();
            assert.deepEqual(actual, expected);
        });


    });

    describe('toLinkedList method in Array List', () => {
        const alis = new ArrayListSecond();
        alis.push(1);
        alis.push(123);
        alis.push(2);
        alis.push(null);
        alis.push(999999);
        alis.push(12);
        alis.push(988);
        it(`Linked list with same values`, () => {
            const expected = new LinkedListSecond();
            expected.push(1);
            expected.push(123);
            expected.push(2);
            expected.push(null);
            expected.push(999999);
            expected.push(12);
            expected.push(988);

            const actual = alis.toLinkedList();
            assert.deepEqual(expected, actual);
        });

    });

    describe('toString method in Array List', () => {

        it(`should return string "333,50,,array,[object Object]" equal array : [333,50,[],'array',{}]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [333,50,[],'array',{}];
            const expected = '333,50,,array,[object Object]';
            const actual = alis.toString();
            assert.deepEqual(actual, expected);
        });

        it(`should return string "1,2,3,4,5" equal array : [1,2,3,4,5]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = '1,2,3,4,5';
            const actual = alis.toString();
            assert.deepEqual(actual, expected);
        });

        it(`should return string "aaa,Empty,cc,Bb" equal array : ['aaa','Empty','cc','Bb']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['aaa','Empty','cc','Bb'];
            const expected = 'aaa,Empty,cc,Bb';
            const actual = alis.toString();
            assert.deepEqual(actual, expected);
        });

        it(`should return string "1" equal array : [1]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1];
            const expected = '1';
            const actual = alis.toString();
            assert.deepEqual(actual, expected);
        });

        it(`should return emptiness equal array ; []`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [];
            const expected = '';
            const actual = alis.toString();
            assert.deepEqual(actual, expected);
        });


    });

    describe('sort method in Array List', () => {


        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1];
            const expected = [1];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return empty array of empty array`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [];
            const expected = [];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array [1, 2, 3, 4, 5] of array : [5, 4, 3, 2, 1]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [5, 4, 3, 2, 1];
            const expected = [1, 2, 3, 4, 5];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array [1, 2, 3, 4, 5] of array : [5, 4, 3, 2, 1, 0]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [3, 5, 0, 1, 4, 2];
            const expected = [0, 1, 2, 3, 4, 5];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array [1, 2, 3, 4, 5] of array : [1, 2, 3, 4, 5]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array ['a', 'b', 'c', 'd', 'e'] of array : ['a', 'b', 'c', 'd', 'e']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['a', 'b', 'c', 'd', 'e'];
            const expected = ['a', 'b', 'c', 'd', 'e'];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array ['a', 'b', 'c', 'd', 'e'] of array : ['b', 'a', 'd', 'e', 'c']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['b', 'a', 'd', 'e', 'c'];
            const expected = ['a', 'b', 'c', 'd', 'e'];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array ['C', 'a', 'b', 'd', 'e'] of array : ['b', 'a', 'd', 'e', 'C']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['b', 'a', 'd', 'e', 'C'];
            const expected = ['C', 'a', 'b', 'd', 'e'];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array ['array', 'is', 'not', 'sorted'] of array : ['is', 'not', 'sorted', 'array']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['is', 'not', 'sorted', 'array'];
            const expected = ['array', 'is', 'not', 'sorted'];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array ['Sorted', 'array', 'is', 'not'] of array : ['is', 'not', 'Sorted', 'array']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['is', 'not', 'Sorted', 'array'];
            const expected = ['Sorted', 'array', 'is', 'not'];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });



    });


});