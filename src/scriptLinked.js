function Node (data){

    this.data = data;
    this.next = null;
}

function SinglyList (){

    this._length = 0;
    this.head = null;


    this.indexOf = function (element){

        let count = 0;
        let current = this.head;
        let flag = 0;

        // iterae over the list
        while (current != null && flag !=1 ) {
            // compare each element of the list
            // with given element
            if (JSON.stringify(current.data) === JSON.stringify(element)) {
                flag+=1;
                return count;
            }

            count++;
            current = current.next;
        }

        // not found
        return -1;
    }

    this.push = function (data){

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

    this.unshift = function (data){
        let tempNode = this.head;
        this.head = new Node(data);
        this.head.next = tempNode;
        this._length++;
        return this._length;
    }

    this.pop = function (){

        let lastNode = this.head;
        let beforeLastNode = this.head;
        let deleteNode;

        if(this._length == 0){
            return null;
        }

        if(this._length == 1){
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

    this.shift = function() {

        if(this._length == 0){
            return null;
        }

        let firstNode = this.head;
        this.head = this.head.next;
        let deleteNote = firstNode;
        firstNode = null;
        this._length--;
        return deleteNote.data;
    }

    this.insertAt = function(element, index) {

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

    this.searchNodeAt = function(position) {
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

    this.remove = function(position) {


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

    this.removeElement = function(element) {
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

    this.length = function() {
        return this._length;
    }

    this.isArray = function(arg) {
        if (typeof arg[`data`] === 'object' &&
            ('join' in arg[`data`] && typeof arg[`data`].join === 'function') &&
            ('length' in arg[`data`] && typeof arg[`data`].length === 'number')) {
            return true;
        }
        return false;
    }

    this.toString = function() {

        let outStringArr = [];
        let currentNode = this.head;
        for (let i = 0; i < this._length; i++) {
            outStringArr.push(currentNode[`data`]);
            currentNode = currentNode.next;
        }
        return outStringArr.toString();
    }

    this.toArray = function() {
        let outStringArr = [];
        let currentNode = this.head;
        for (let i = 0; i < this._length; i++) {
            outStringArr.push(currentNode[`data`]);
            currentNode = currentNode.next;
        }
        return outStringArr;
    }

    this.printList = function() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.data + " / ";
            curr = curr.next;
        }
        return str;
    }

    this.isEmpty = function() {
        if (this._length == 0) {
            return true;
        }
        return false;
    }

    this.some = function(callback) {

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

    this.every = function(callback) {

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

    this.splice = function(){
        let removedElements= new SinglyList();
        if(this.head === null){

            if(arguments.length<3) return removedElements;
            this.head= new Node(arguments[2]);
            let lastEl=this.head;
            this._length=1;
            for(let i=3; i<arguments.length; i++){
                lastEl.next=new Node(arguments[i]);
                lastEl=lastEl.next;
                this._length++;
            }
            return removedElements;
        }
        let elBeforeSeg = this.head;
        let elAfterSeg;
        let startIndex = arguments[0] >= 0 ? arguments[0] : this._length-arguments[0];

        let i = 0;
        while (i < startIndex - 1){
            elBeforeSeg = elBeforeSeg.next;
            i++;
        }

        if(arguments[0]==0) {
            elAfterSeg = elBeforeSeg;
        }

        if(arguments[0]>0) {
            elAfterSeg = elBeforeSeg.next;
        }


        if (startIndex === 0){
            elBeforeSeg =null;
        }

        i = 0;
        if(arguments[1]>0){
            removedElements.head=elAfterSeg;
            let lastEl=elAfterSeg;

            while(i < arguments[1]){
                if(elAfterSeg === null){
                    elAfterSeg=new Node();
                    lastEl=elAfterSeg;
                    break;
                };
                lastEl=elAfterSeg;
                removedElements._length++;
                elAfterSeg=elAfterSeg.next;
                this._length--;
                i++;
            }
            lastEl.next=null;
        }

        if(arguments.length < 3){
            if(elBeforeSeg !== null){
                elBeforeSeg.next = elAfterSeg;
                return removedElements;
            }
            else{//нету хэда
                this.head = elAfterSeg;
                return removedElements;
            }
        }

        let firstElSeg = new Node(arguments[2]);
        this._length++;
        if(elBeforeSeg == null){
            this.head = firstElSeg;
        }
        else{
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
}
