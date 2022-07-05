import React from 'react'
//from right to left
function compose<U>(...fns: Function[]) {
    return <E,>(initialValue: any): U => 
        fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue)
}

//from left to right
function pipe<U>(...fns: Function[]) {
    return <E,>(initialValue: any): U => 
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue )
}

function pick<K extends string>(props: K) {
    return <O extends Record<K, any>>(obj: O) => obj[props]
}

function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right
}

const comments = [
    {
        id: 22,
        text: 'hello world'
    },
    {
        id: 22,
        text: 'you are a slut'
    }
]
const filteredComments = comments.filter(pipe(pick('id'), isEqual(22), cond))

function cond(b: boolean){
    return !b
}