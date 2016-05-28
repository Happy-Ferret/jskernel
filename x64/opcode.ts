
// Op-code of instructions, op-code byte:
//
//     |76543210|
//     |......ds|
//     |.......s
//     |......d
//     |XXXXXX00 <--- Op-code = OP

export enum OP {
    MOV         = 0x8B,
    MOVimm      = 0xC7,
    MOVABS      = 0xB8,
    INC         = 0xFF,
    DEC         = 0xFF,
    PUSH        = 0x50,
    POP         = 0x58,
    INT         = 0xCD,
    SYSCALL     = 0x0F05,
    SYSENTER    = 0x0F34,
    SYSEXIT     = 0x0F35,
}


// Op-code extension into `REG` field of Mod-R/M byte, Mod-R/M byte:
//
//     |76543210|
//      .....XXX <--- R/M field
//      ..XXX <------ REG field = OPREG
//      XX <--------- MOD field

export enum OPREG {
    INC = 0b000,
    DEC = 0b001,
    MOVimm = 0b000,
}