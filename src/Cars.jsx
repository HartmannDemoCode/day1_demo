import React from 'react';

class ClockUsingClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date(), cars: props.cars }
    }

    componentDidMount() {
        this.time = setInterval(() => {
            this.changeTime()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.time)
    }

    changeTime() {
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <div className="clock">
                <p>Hello! This is a class component clock.</p>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <ul>
                {this.state.cars.map((car)=><li key={car.id}>{car.make}</li>)}
                </ul>
            </div>
        )
    }
}

export default ClockUsingClass;