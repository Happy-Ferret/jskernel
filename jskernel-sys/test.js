var addon = require('./build/Release/jskernel-sys');

var str = 'Hello world, hell yeah!';
var buf = new Buffer(str + '\n');
console.log(addon.syscall64(1, 1, buf, buf.length));

// var addr = addon.addr(buf);
// var size = buf.length;
//
// console.log(addr, size);
// console.log(addon.addr64(buf));

// var myaddr = addon.gen();
// console.log(myaddr);
// var buf_alloc = addon.malloc(myaddr, 3);
// console.log(' > .> ', buf_alloc.toString());