import {x64, rax, rbx, eax, r13, r10d} from '../index';




var _ = new x64.Code;
_.label('_start');
_.incq(rbx);
// _.incq(rax.ref()).cs();
// _.decq(0x1453).lock();
// _.syscall();
// _.int(0x80);
// var ins = _.incq(rax.ref());
// var ins = _.incq(rax.ref().disp(0x11));
// var ins = _.incq(rax);
// var ins = _.sysenter();
// var ins = _.int(0x80);
console.log(_.toString());
console.log(_.compile());
console.log(new Buffer(_.compile()));

// console.log(rax.ref().ind(rbx).disp(0x11223344).toString());


// console.log(_.push(rax).write([]));
// console.log(_.push(r8).write([]));
// console.log(_.pop(rax).write([]));
// console.log(_.push(r8).write([]));



// var ops = new i.Operands(r8);
// var encoder = new Encoder;
// var ins = encoder.createInstruction(def.PUSH, ops);
// console.log(ins);
// var code = ins.write([]);


