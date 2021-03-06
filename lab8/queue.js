"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = (function () {
    function Queue(arr) {
        this.arr = arr || [];
    }
    /**
     * enqueue
     */
    Queue.prototype.enqueue = function (value) {
        this.arr.push(value);
    };
    /**
     * dequeue
     */
    Queue.prototype.dequeue = function () {
        return this.arr.shift();
    };
    /**
     * peek
     */
    Queue.prototype.peek = function () {
        return this.arr[0];
    };
    Object.defineProperty(Queue.prototype, "length", {
        /**
         * get length
         */
        get: function () {
            return this.arr.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * clean
     */
    Queue.prototype.clean = function () {
        this.arr = [];
    };
    /*
    *  contains element s
    */
    Queue.prototype.contains = function (s) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === s) {
                return true;
            }
        }
        return false;
    };
    return Queue;
}());
exports.Queue = Queue;
