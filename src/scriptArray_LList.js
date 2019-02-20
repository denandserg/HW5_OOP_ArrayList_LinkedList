function List() {

}
List.prototype.pop = function () {};
List.prototype.push = function () {};
List.prototype.shift = function () {};
List.prototype.unshift = function () {};
List.prototype.length = function () {};
List.prototype.remove = function () {};
List.prototype.some = function () {};
List.prototype.every = function () {};
List.prototype.splice = function () {};
List.prototype.isArray = function () {};

// --------- Класс-потомок -----------
function Alisto() {
    this.arr = [];
    List.apply(this, arguments);
}
// Унаследовать
Alisto.prototype = Object.create(List.prototype);
// Желательно и constructor сохранить
Alisto.prototype.constructor = Alisto; //Нахера??
// Методы потомка

Alisto.prototype.pop = function () {
    List.prototype.pop.apply(this);
    if (this.arr.length === 0) {
        return undefined;
    }
    let lastElement = this.arr[this.arr.length - 1]
    this.arr.length = this.arr.length - 1;
    return lastElement;
}

Alisto.prototype.push = function () {
    List.prototype.push.apply(this);
    for (let i = 0; i < arguments.length; i++) {
        this.arr[this.arr.length] = arguments[i];
    }
    return this.arr.length;
}

Alisto.prototype.shift = function () {
    List.prototype.shift.apply(this);
    if (this.arr.length === 0) {
        return undefined;
    }
    let firstEl = this.arr[0];
    for (let i = 0; i < this.arr.length; i++) {
        this.arr[i] = this.arr[i + 1];
    }
    this.arr.length = this.arr.length - 1;
    return firstEl;
}

Alisto.prototype.unshift = function () {
    List.prototype.unshift.apply(this);
    for (let i = 0; i < arguments.length; i++) {
        for (let j = this.arr.length; j > 0; j--) {
            this.arr[j] = this.arr[j - 1];
        }
        this.arr[0] = arguments[i];
    }
    return this.arr.length;
}

Alisto.prototype.length = function () {
    List.prototype.length.apply(this);
    let i = -1;
    for (let key in this.arr) {
        i = key;
    }
    return +i + 1;
}

Alisto.prototype.isArray = function (obj) {
    List.prototype.isArray.apply(this);
    if (obj.constructor === Array) return true;
    else return false;
}

Alisto.prototype.remove = function (element) {
    List.prototype.remove.apply(this);
    if (this.arr.length - 1 < element) {
        return undefined;
    }
    let removeElement = this.arr[element];
    for (let i = element; this.arr.length > i; i++) {
        this.arr[i] = this.arr[i + 1];
    }
    this.arr.length = this.arr.length - 1;
    return removeElement;
}

Alisto.prototype.some = function (arr, callback, arg) {
    List.prototype.some.apply(this);
    var i, length = this.arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (callback.call(arg, this.arr[i], i, this.arr)) {
            return true;
        }
    }
    return false;
}

Alisto.prototype.every = function (arr, callback, arg) {
    List.prototype.every.apply(this);
    var i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (!callback.call(arg, arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

Alisto.prototype.splice = function () {
    List.prototype.splice.apply(this);
    let removedElements = [];
    if (arguments[1] === undefined && arguments[0] > 0) {
        let j = 0;
        for (let i = arguments[0]; i < this.arr.length; i++) {
            removedElements[j] = this.arr[i];
            j++;
        }
        this.arr.length = arguments[0];
        return removedElements;
    }
    if (arguments[1] === undefined && arguments[0] < 0) {
        let j = 0;
        for (let i = this.arr.length + arguments[0]; i < this.arr.length; i++) {
            removedElements[j] = this.arr[i];
            j++;
        }
        this.arr.length = this.arr.length + arguments[0];
        return removedElements;
    }
    if (arguments[1] === undefined && arguments[0] === 0) {
        for (let i = 0; i < this.arr.length; i++) {
            removedElements[i] = this.arr[i];
        }
        this.arr.length = 0;
        return removedElements;
    }

    if (arguments[0] >= 0) {
        if (arguments[1] > 0) {
            let k = 0;
            for (let i = arguments[0]; i < arguments[0] + arguments[1]; i++) {
                removedElements[k] = this.arr[i];
                k++;
            }
            for (let i = 0; i < arguments[1]; i++) {
                for (let j = arguments[0]; j < this.arr.length; j++) {
                    this.arr[j] = this.arr[j + 1];
                }
                this.arr.length = this.arr.length - 1;
            }

        }
        if (arguments[2] !== undefined) {
            for (let i = arguments.length - 3; i >= 0; i--) {
                for (let j = this.arr.length; j > arguments[0]; j--) {
                    this.arr[j] = this.arr[j - 1];
                }
                this.arr[arguments[0]] = arguments[i + 2];
            }
        }
    }
    if (arguments[0] < 0) {
        var arg = this.arr.length + arguments[0];
        if (arguments[1] > 0) {
            let k = 0;
            for (let i = arg; i < arg + arguments[1]; i++) {
                removedElements[k] = this.arr[i];
                k++;
            }
            for (let i = 0; i < arguments[1]; i++) {
                for (let j = arg; j < this.arr.length; j++) {
                    this.arr[j] = this.arr[j + 1];
                }
                this.arr.length = this.arr.length - 1;
            }

        }
        if (arguments[2] !== undefined) {
            for (let i = arguments.length - 3; i >= 0; i--) {
                for (let j = this.arr.length; j > -arguments[0]; j--) {
                    this.arr[j] = this.arr[j - 1];
                }
                this.arr[arg] = arguments[i + 2];
            }
        }
    }
    return removedElements;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
    List.apply(this, arguments);
}

SinglyList.prototype = Object.create(List.prototype);

SinglyList.prototype.constructor = SinglyList; //Нахера??

SinglyList.prototype.push = function (data) {

    let node = new Node(data),
        currentNode = this.head;
    // 1-ый случай: пустой список
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node.data;
    }
    // 2-ой случай: не пустой список
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
    return node.data;
}

SinglyList.prototype.unshift = function (data) {
    let tempNode = this.head;
    this.head = new Node(data);
    this.head.next = tempNode;
    this._length++;
    return this._length;
}

SinglyList.prototype.pop = function () {

    let lastNode = this.head;
    let beforeLastNode = this.head;
    let deleteNode;

    if (this._length == 0) {
        return null;
    }

    if (this._length == 1) {
        deleteNode = this.head;
        this.head = null;
        this._length = 0;
        return deleteNode.data;
    }

    for (let i = 1; i < this._length; i++) {
        lastNode = lastNode.next;
    }
    for (let i = 1; i < this._length - 1; i++) {
        beforeLastNode = beforeLastNode.next;
    }
    beforeLastNode.next = null;
    deleteNode = lastNode;
    lastNode = null;
    this._length--;
    return deleteNode.data;

}

SinglyList.prototype.shift = function () {

    if (this._length == 0) {
        return null;
    }

    let firstNode = this.head;
    this.head = this.head.next;
    let deleteNote = firstNode;
    firstNode = null;
    this._length--;
    return deleteNote.data;
}

SinglyList.prototype.length = function () {
    return this._length;
}

SinglyList.prototype.isArray = function (arg) {
    if (typeof arg[`data`] === 'object' &&
        ('join' in arg[`data`] && typeof arg[`data`].join === 'function') &&
        ('length' in arg[`data`] && typeof arg[`data`].length === 'number')) {
        return true;
    }
    return false;
}

SinglyList.prototype.toString = function () {

    let outStringArr = [];
    let currentNode = this.head;
    for (let i = 0; i < this._length; i++) {
        outStringArr.push(currentNode[`data`]);
        currentNode = currentNode.next;
    }
    return outStringArr.toString();
}

SinglyList.prototype.remove = function (position) {


    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {
            failure: 'Failure: non-existent node in this list.'
        },
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1-ый случай: неверная позиция
    if (position <= 0 || position > length || position == null || position == undefined) {
        throw new Error(message.failure);
    }

    // 2-ой случай: первый узел удален
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    if (position > 1) {
        for (let i = 1; i < position - 1; i++) {
            currentNode = currentNode.next;
        }

        // 3-ий случай: все другие узлы удалены
        while (count < position) {
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this._length--;

        return deletedNode;
    }

}

SinglyList.prototype.some = function (callback) {

    if (this == null) {
        throw new TypeError('Linked List ==> null');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(`Callback is not function!!!`);
    }

    // let t = Object(this);
    let length = this._length;
    let currentNode = this.head;

    let thisArg = arguments.length >= 2 ? arguments[1] : void 0;

    for (let i = 0; i < length; i++) {
        if (i > 0) {
            currentNode = currentNode.next;
        }

        if (callback.call(thisArg, currentNode, this.indexOf(currentNode.data), this)) {
            return true;
        }
    }

    return false;
}

SinglyList.prototype.every = function (callback) {

    if (this == null) {
        throw new TypeError('Linked List ==> null');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(`Callback is not function!!!`);
    }

    let length = this._length;
    let currentNode = this.head;
    let boolFlag = 0;

    let thisArg = arguments.length >= 2 ? arguments[1] : void 0;

    for (let i = 1; i < length; i++) {

        if (i > 1) {
            currentNode = currentNode.next;
        }

        if (callback.call(thisArg, currentNode, this.indexOf(currentNode.data), this)) {
            boolFlag += 1;
        }

        if (i == length - 1) return true;

        if (boolFlag != i) return false;

    }
    return false;
}

SinglyList.prototype.splice = function () {
    let removedElements = new SinglyList();
    if (this.head === null) {

        if (arguments.length < 3) return removedElements;
        this.head = new Node(arguments[2]);
        let lastEl = this.head;
        this._length = 1;
        for (let i = 3; i < arguments.length; i++) {
            lastEl.next = new Node(arguments[i]);
            lastEl = lastEl.next;
            this._length++;
        }
        return removedElements;
    }
    let elBeforeSeg = this.head;
    let elAfterSeg;
    let startIndex = arguments[0] >= 0 ? arguments[0] : this._length - arguments[0];

    let i = 0;
    while (i < startIndex - 1) {
        elBeforeSeg = elBeforeSeg.next;
        i++;
    }

    if (arguments[0] == 0) {
        elAfterSeg = elBeforeSeg;
    }

    if (arguments[0] > 0) {
        elAfterSeg = elBeforeSeg.next;
    }


    if (startIndex === 0) {
        elBeforeSeg = null;
    }

    i = 0;
    if (arguments[1] > 0) {
        removedElements.head = elAfterSeg;
        let lastEl = elAfterSeg;

        while (i < arguments[1]) {
            if (elAfterSeg === null) {
                elAfterSeg = new Node();
                lastEl = elAfterSeg;
                break;
            };
            lastEl = elAfterSeg;
            removedElements._length++;
            elAfterSeg = elAfterSeg.next;
            this._length--;
            i++;
        }
        lastEl.next = null;
    }

    if (arguments.length < 3) {
        if (elBeforeSeg !== null) {
            elBeforeSeg.next = elAfterSeg;
            return removedElements;
        } else { //нету хэда
            this.head = elAfterSeg;
            return removedElements;
        }
    }

    let firstElSeg = new Node(arguments[2]);
    this._length++;
    if (elBeforeSeg == null) {
        this.head = firstElSeg;
    } else {
        elBeforeSeg.next = firstElSeg;
    }

    let lastElSeg = firstElSeg;

    for (let i = 3; i < arguments.length; i++) {
        lastElSeg.next = new Node(arguments[i]);
        this._length++;
        lastElSeg = lastElSeg.next;
    }
    lastElSeg.next = elAfterSeg;
    return removedElements;
}

SinglyList.prototype.indexOf = function (element) {

    let count = 0;
    let current = this.head;
    let flag = 0;

    // iterae over the list
    while (current != null && flag != 1) {
        // compare each element of the list
        // with given element
        if (JSON.stringify(current.data) === JSON.stringify(element)) {
            flag += 1;
            return count;
        }

        count++;
        current = current.next;
    }

    // not found
    return -1;
}

SinglyList.prototype.insertAt = function (element, index) {

    if (index > 0 && index > this._length)
        return false;
    else {
        // creates a new node
        let node = new Node(element);
        let curr, prev;

        curr = this.head;

        // add the element to the
        // first index
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;

            // iterate over the list to find
            // the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this._length++;
        return this._length;
    }
}

SinglyList.prototype.searchNodeAt = function (position) {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        message = {
            failure: 'Failure: non-existent node in this list.'
        };

    // 1-ый случай: неверная позиция
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: верная позиция
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
}

SinglyList.prototype.removeElement = function (element) {
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (JSON.stringify(current.data) === JSON.stringify(element)) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this._length--;
            return current.data;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}

SinglyList.prototype.toArray = function () {
    let outStringArr = [];
    let currentNode = this.head;
    for (let i = 0; i < this._length; i++) {
        outStringArr.push(currentNode[`data`]);
        currentNode = currentNode.next;
    }
    return outStringArr;
}

SinglyList.prototype.printList = function () {
    let curr = this.head;
    let str = "";
    while (curr) {
        str += curr.data + " / ";
        curr = curr.next;
    }
    return str;
}

SinglyList.prototype.isEmpty = function () {
    if (this._length == 0) {
        return true;
    }
    return false;
}


function SecondList() {
    List.apply(this, arguments);
}

SecondList.prototype = Object.create(List.prototype);
SecondList.prototype.constructor = SecondList; //Нахера??

SecondList.prototype.sort = function () {};
SecondList.prototype.toArrayList = function () {};
SecondList.prototype.toLinkedList = function () {};
SecondList.prototype.toString = function () {};


function SecondAlisto() {
    this.arr = [];
    SecondList.apply(this, arguments);
}
// Унаследовать
SecondAlisto.prototype = Object.create(SecondList.prototype);
// Желательно и constructor сохранить
SecondAlisto.prototype.constructor = SecondAlisto; //Нахера??
// Методы потомка

SecondAlisto.prototype.pop = function () {
    List.prototype.pop.apply(this);
    if (this.arr.length === 0) {
        return undefined;
    }
    let lastElement = this.arr[this.arr.length - 1]
    this.arr.length = this.arr.length - 1;
    return lastElement;
}

SecondAlisto.prototype.push = function () {
    List.prototype.push.apply(this);
    for (let i = 0; i < arguments.length; i++) {
        this.arr[this.arr.length] = arguments[i];
    }
    return this.arr.length;
}

SecondAlisto.prototype.shift = function () {
    List.prototype.shift.apply(this);
    if (this.arr.length === 0) {
        return undefined;
    }
    let firstEl = this.arr[0];
    for (let i = 0; i < this.arr.length; i++) {
        this.arr[i] = this.arr[i + 1];
    }
    this.arr.length = this.arr.length - 1;
    return firstEl;
}

SecondAlisto.prototype.unshift = function () {
    List.prototype.unshift.apply(this);
    for (let i = 0; i < arguments.length; i++) {
        for (let j = this.arr.length; j > 0; j--) {
            this.arr[j] = this.arr[j - 1];
        }
        this.arr[0] = arguments[i];
    }
    return this.arr.length;
}

SecondAlisto.prototype.length = function () {
    List.prototype.length.apply(this);
    let i = -1;
    for (let key in this.arr) {
        i = key;
    }
    return +i + 1;
}

SecondAlisto.prototype.isArray = function (obj) {
    List.prototype.isArray.apply(this);
    if (obj.constructor === Array) return true;
    else return false;
}

SecondAlisto.prototype.remove = function (element) {
    List.prototype.remove.apply(this);
    if (this.arr.length - 1 < element) {
        return undefined;
    }
    let removeElement = this.arr[element];
    for (let i = element; this.arr.length > i; i++) {
        this.arr[i] = this.arr[i + 1];
    }
    this.arr.length = this.arr.length - 1;
    return removeElement;
}

SecondAlisto.prototype.some = function (arr, callback, arg) {
    List.prototype.some.apply(this);
    var i, length = this.arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (callback.call(arg, this.arr[i], i, this.arr)) {
            return true;
        }
    }
    return false;
}

SecondAlisto.prototype.every = function (arr, callback, arg) {
    List.prototype.every.apply(this);
    var i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (!callback.call(arg, arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

SecondAlisto.prototype.splice = function () {
    List.prototype.splice.apply(this);
    let removedElements = [];
    if (arguments[1] === undefined && arguments[0] > 0) {
        let j = 0;
        for (let i = arguments[0]; i < this.arr.length; i++) {
            removedElements[j] = this.arr[i];
            j++;
        }
        this.arr.length = arguments[0];
        return removedElements;
    }
    if (arguments[1] === undefined && arguments[0] < 0) {
        let j = 0;
        for (let i = this.arr.length + arguments[0]; i < this.arr.length; i++) {
            removedElements[j] = this.arr[i];
            j++;
        }
        this.arr.length = this.arr.length + arguments[0];
        return removedElements;
    }
    if (arguments[1] === undefined && arguments[0] === 0) {
        for (let i = 0; i < this.arr.length; i++) {
            removedElements[i] = this.arr[i];
        }
        this.arr.length = 0;
        return removedElements;
    }

    if (arguments[0] >= 0) {
        if (arguments[1] > 0) {
            let k = 0;
            for (let i = arguments[0]; i < arguments[0] + arguments[1]; i++) {
                removedElements[k] = this.arr[i];
                k++;
            }
            for (let i = 0; i < arguments[1]; i++) {
                for (let j = arguments[0]; j < this.arr.length; j++) {
                    this.arr[j] = this.arr[j + 1];
                }
                this.arr.length = this.arr.length - 1;
            }

        }
        if (arguments[2] !== undefined) {
            for (let i = arguments.length - 3; i >= 0; i--) {
                for (let j = this.arr.length; j > arguments[0]; j--) {
                    this.arr[j] = this.arr[j - 1];
                }
                this.arr[arguments[0]] = arguments[i + 2];
            }
        }
    }
    if (arguments[0] < 0) {
        var arg = this.arr.length + arguments[0];
        if (arguments[1] > 0) {
            let k = 0;
            for (let i = arg; i < arg + arguments[1]; i++) {
                removedElements[k] = this.arr[i];
                k++;
            }
            for (let i = 0; i < arguments[1]; i++) {
                for (let j = arg; j < this.arr.length; j++) {
                    this.arr[j] = this.arr[j + 1];
                }
                this.arr.length = this.arr.length - 1;
            }

        }
        if (arguments[2] !== undefined) {
            for (let i = arguments.length - 3; i >= 0; i--) {
                for (let j = this.arr.length; j > -arguments[0]; j--) {
                    this.arr[j] = this.arr[j - 1];
                }
                this.arr[arg] = arguments[i + 2];
            }
        }
    }
    return removedElements;
}



function SecondSinglyList() {
    this._length = 0;
    this.head = null;
    SecondList.apply(this, arguments);
}

SecondSinglyList.prototype = Object.create(SecondList.prototype);

SecondSinglyList.prototype.constructor = SecondSinglyList; //Нахера??

SecondSinglyList.prototype.push = function (data) {

    let node = new Node(data),
        currentNode = this.head;
    // 1-ый случай: пустой список
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node.data;
    }
    // 2-ой случай: не пустой список
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
    return node.data;
}

SecondSinglyList.prototype.unshift = function (data) {
    let tempNode = this.head;
    this.head = new Node(data);
    this.head.next = tempNode;
    this._length++;
    return this._length;
}

SecondSinglyList.prototype.pop = function () {

    let lastNode = this.head;
    let beforeLastNode = this.head;
    let deleteNode;

    if (this._length == 0) {
        return null;
    }

    if (this._length == 1) {
        deleteNode = this.head;
        this.head = null;
        this._length = 0;
        return deleteNode.data;
    }

    for (let i = 1; i < this._length; i++) {
        lastNode = lastNode.next;
    }
    for (let i = 1; i < this._length - 1; i++) {
        beforeLastNode = beforeLastNode.next;
    }
    beforeLastNode.next = null;
    deleteNode = lastNode;
    lastNode = null;
    this._length--;
    return deleteNode.data;

}

SecondSinglyList.prototype.shift = function () {

    if (this._length == 0) {
        return null;
    }

    let firstNode = this.head;
    this.head = this.head.next;
    let deleteNote = firstNode;
    firstNode = null;
    this._length--;
    return deleteNote.data;
}

SecondSinglyList.prototype.length = function () {
    return this._length;
}

SecondSinglyList.prototype.isArray = function (arg) {
    if (typeof arg[`data`] === 'object' &&
        ('join' in arg[`data`] && typeof arg[`data`].join === 'function') &&
        ('length' in arg[`data`] && typeof arg[`data`].length === 'number')) {
        return true;
    }
    return false;
}

SecondSinglyList.prototype.toString = function () {

    let outStringArr = [];
    let currentNode = this.head;
    for (let i = 0; i < this._length; i++) {
        outStringArr.push(currentNode[`data`]);
        currentNode = currentNode.next;
    }
    return outStringArr.toString();
}

SecondSinglyList.prototype.remove = function (position) {


    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {
            failure: 'Failure: non-existent node in this list.'
        },
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1-ый случай: неверная позиция
    if (position <= 0 || position > length || position == null || position == undefined) {
        throw new Error(message.failure);
    }

    // 2-ой случай: первый узел удален
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    if (position > 1) {
        for (let i = 1; i < position - 1; i++) {
            currentNode = currentNode.next;
        }

        // 3-ий случай: все другие узлы удалены
        while (count < position) {
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this._length--;

        return deletedNode;
    }

}

SecondSinglyList.prototype.some = function (callback) {

    if (this == null) {
        throw new TypeError('Linked List ==> null');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(`Callback is not function!!!`);
    }

    // let t = Object(this);
    let length = this._length;
    let currentNode = this.head;

    let thisArg = arguments.length >= 2 ? arguments[1] : void 0;

    for (let i = 0; i < length; i++) {
        if (i > 0) {
            currentNode = currentNode.next;
        }

        if (callback.call(thisArg, currentNode, this.indexOf(currentNode.data), this)) {
            return true;
        }
    }

    return false;
}

SecondSinglyList.prototype.every = function (callback) {

    if (this == null) {
        throw new TypeError('Linked List ==> null');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(`Callback is not function!!!`);
    }

    let length = this._length;
    let currentNode = this.head;
    let boolFlag = 0;

    let thisArg = arguments.length >= 2 ? arguments[1] : void 0;

    for (let i = 1; i < length; i++) {

        if (i > 1) {
            currentNode = currentNode.next;
        }

        if (callback.call(thisArg, currentNode, this.indexOf(currentNode.data), this)) {
            boolFlag += 1;
        }

        if (i == length - 1) return true;

        if (boolFlag != i) return false;

    }
    return false;
}

SecondSinglyList.prototype.splice = function () {
    let removedElements = new SinglyList();
    if (this.head === null) {

        if (arguments.length < 3) return removedElements;
        this.head = new Node(arguments[2]);
        let lastEl = this.head;
        this._length = 1;
        for (let i = 3; i < arguments.length; i++) {
            lastEl.next = new Node(arguments[i]);
            lastEl = lastEl.next;
            this._length++;
        }
        return removedElements;
    }
    let elBeforeSeg = this.head;
    let elAfterSeg;
    let startIndex = arguments[0] >= 0 ? arguments[0] : this._length - arguments[0];

    let i = 0;
    while (i < startIndex - 1) {
        elBeforeSeg = elBeforeSeg.next;
        i++;
    }

    if (arguments[0] == 0) {
        elAfterSeg = elBeforeSeg;
    }

    if (arguments[0] > 0) {
        elAfterSeg = elBeforeSeg.next;
    }


    if (startIndex === 0) {
        elBeforeSeg = null;
    }

    i = 0;
    if (arguments[1] > 0) {
        removedElements.head = elAfterSeg;
        let lastEl = elAfterSeg;

        while (i < arguments[1]) {
            if (elAfterSeg === null) {
                elAfterSeg = new Node();
                lastEl = elAfterSeg;
                break;
            };
            lastEl = elAfterSeg;
            removedElements._length++;
            elAfterSeg = elAfterSeg.next;
            this._length--;
            i++;
        }
        lastEl.next = null;
    }

    if (arguments.length < 3) {
        if (elBeforeSeg !== null) {
            elBeforeSeg.next = elAfterSeg;
            return removedElements;
        } else { //нету хэда
            this.head = elAfterSeg;
            return removedElements;
        }
    }

    let firstElSeg = new Node(arguments[2]);
    this._length++;
    if (elBeforeSeg == null) {
        this.head = firstElSeg;
    } else {
        elBeforeSeg.next = firstElSeg;
    }

    let lastElSeg = firstElSeg;

    for (let i = 3; i < arguments.length; i++) {
        lastElSeg.next = new Node(arguments[i]);
        this._length++;
        lastElSeg = lastElSeg.next;
    }
    lastElSeg.next = elAfterSeg;
    return removedElements;
}

SecondSinglyList.prototype.indexOf = function (element) {

    let count = 0;
    let current = this.head;
    let flag = 0;

    // iterae over the list
    while (current != null && flag != 1) {
        // compare each element of the list
        // with given element
        if (JSON.stringify(current.data) === JSON.stringify(element)) {
            flag += 1;
            return count;
        }

        count++;
        current = current.next;
    }

    // not found
    return -1;
}

SecondSinglyList.prototype.insertAt = function (element, index) {

    if (index > 0 && index > this._length)
        return false;
    else {
        // creates a new node
        let node = new Node(element);
        let curr, prev;

        curr = this.head;

        // add the element to the
        // first index
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;

            // iterate over the list to find
            // the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this._length++;
        return this._length;
    }
}

SecondSinglyList.prototype.searchNodeAt = function (position) {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        message = {
            failure: 'Failure: non-existent node in this list.'
        };

    // 1-ый случай: неверная позиция
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: верная позиция
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
}

SecondSinglyList.prototype.removeElement = function (element) {
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (JSON.stringify(current.data) === JSON.stringify(element)) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this._length--;
            return current.data;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}

SecondSinglyList.prototype.toArray = function () {
    let outStringArr = [];
    let currentNode = this.head;
    for (let i = 0; i < this._length; i++) {
        outStringArr.push(currentNode[`data`]);
        currentNode = currentNode.next;
    }
    return outStringArr;
}

SecondSinglyList.prototype.printList = function () {
    let curr = this.head;
    let str = "";
    while (curr) {
        str += curr.data + " / ";
        curr = curr.next;
    }
    return str;
}

SecondSinglyList.prototype.isEmpty = function () {
    if (this._length == 0) {
        return true;
    }
    return false;
}

SecondSinglyList.prototype.toLinkedList = function () {
    return this;
}

SecondSinglyList.prototype.sort = function () {

    let result = [];
    let item = this.head;
    const sortedSinglyList = new SecondSinglyList();


    while (item) {
        if (!result.length) {
            result.push(item.data);
        } else {
            // Find location to insert.
            let isInserted = false;

            for (let i = 0; i < result.length; i++) {
                if (item.data < result[i]) {
                    result.splice(i, 0, item.data);

                    isInserted = true;
                    break;
                } else if (i == result.length - 1) {
                    // Last item and nothing is smaller, so add it to the end.
                    result.push(item.data);
                    break;
                }
            }
        }

        item = item.next;
    }
    for(let i = 0; i < result.length; i++) {
        sortedSinglyList.push(result[i]);
    }
    return sortedSinglyList;
};



