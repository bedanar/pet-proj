// add(1)(1) --> 2
// function add(leftside: number) {
//     return (rightside: number) => add(leftside + rightside)
// }


const add = (leftside: number) => (rightside: number) => leftside + rightside
// addEventListener - High Order Component
// const withIdkey = withKey('id') 
// function withKey(key?: string) {
//     return <E, T extends React.ComponentType<E>>(component: T) => 
//     (props: E, index: number) => 
//         React.createElement(
//             component, 
//             { ...props, key: key ? props[key as keyof E] : index },
//             []
//         )
// }

function pickFromSyntheticEvent<T extends HTMLElement> () {
    return <K extends keyof T>(key: K) => 
    <E extends ((t: T[K]) =>void)>(fn: E) => 
    (e: React.SyntheticEvent<T>) => fn(e.currentTarget[key])
}

const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value')
function Input({onChange} : {onChange: (value: string) => void}) {
    return (
        <input onChange={getValue(onChange)} />
    )
}

function NotStandartLink(props: any) {
    const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        e.stopPropagation()
        props.onClick()
    }
    return (
        <a href="#" onClick={handleClick}>Hello</a>
    )
}

function preventDefault<T extends (e: any) => void>(fn: T) {
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.preventDefault()
        fn(e)
    }
}

function stopPropagation<T extends (e: any) => void>(fn: T) {
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.stopPropagation()
        fn(e)
    }
}