//mounting
//updating
//unmounting
//error

// mount:
// render, pre-commit, commit
// render:  constructor -> getDerivedStateFrom Props -> render
// commit: react updates DOM and refs -> componentDidMount -> componentWillUnmount

//render: getDerivedStateFromProps, shouldComponentUpdate, render
//pre-commit: getSnapshotBeforeUpdate, React updates DOM and refs
//commit: componentDidUpdate

import React from "react";

interface ILifecycleProps {
    someProps: number
}
interface ILifecycleState {
    startField: number,
    isMounted: boolean,
    hasError: boolean
}

export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {
    constructor(props: ILifecycleProps) {
        super(props)
        this.state = {startField: props.someProps, isMounted: false, hasError: false}
    }
    private handleClick = () => {
        this.setState({startField: 1})
    }
    static getDerivedStateFromProps(props: Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>) {
        return {stateField: props.someProps}
    }
    static getDerivedStateFromError(error: Error) {
        return { hasError: true }
    }
    public render() {
    
            if(this.state.hasError) {
                return <div></div>
            }
            return <div onClick={this.handleClick}>
            1
            </div>
            
    }
    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        //logError(errorInfo.componentStack)
    }
    public componentDidMount() {
        this.setState({isMounted: true})
    }
    public shouldComponentUpdate(
        nextProps: Readonly<ILifecycleProps>,
        nextState: Readonly<ILifecycleState>,
        nextContect: any
    ):boolean {
        return this.state !== nextState || this.props !== nextProps
    }
    public componentWillUnmount() {
        // document.removeEventListener()
    }
    public getSnapshotBeforeUpdate(
        prevProps: Readonly<ILifecycleProps>,
        prevState: Readonly<ILifecycleState>
    ): any | null {
        return 1234
    }
    public componentDidUpdate(
        prevProps: Readonly<ILifecycleProps>,
        prevState: Readonly<ILifecycleState>,
        snapshot?: any
    ) {
        if (snapshot>1000) {
            this.setState({})
        }
    }
}
