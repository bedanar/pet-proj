enum Methods {
    add, 
    sub
}

function calculate(method: Methods, left: number, right: number): number {
    switch(method) {
        case Methods.add: return left  + right;
        case Methods.sub: return left - right
    }
}

const sum = calculate(Methods.add, 2, 5)




const myArray: MyArray<number> = [1, 2, 3]
interface MyArray<T>{
   [ N: number]: T,
   map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
}

type MyReadonlyDeep <T> = {
    readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
}

type RemoveMyReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T