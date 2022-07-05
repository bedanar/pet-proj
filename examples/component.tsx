import React from "react";

interface IStarWars {
    name: string
}
export class StarWars extends React.PureComponent{
    // constructor(props: {}) {
    //     super(props)
        
    //     this.state = {name: '123'}
    // }
    state: Readonly<IStarWars> = {name: '123'}
    public render() {
        return (
            <section className="">dpgkdg</section>
        )
    }
    private RandomName(): string {
        return 'hello world'
    }
}