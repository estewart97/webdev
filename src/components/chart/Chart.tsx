import * as React from 'react';  
import { ResponsiveBar } from '@nivo/bar';

interface UserData { 
    first: string 
    last: string 
    email: string 
    address: string 
    created: string 
    balance: number 
} 

interface ChartState { 
    userData: UserData[] 
}

export default class Chart extends React.Component<{}, ChartState> {

    constructor(props: {}) { 
        super(props) 

        this.state = { 
            userData: [] 
        } 
    }

    render() {  
        return (  
            <div className='chart-container'>  
            <ResponsiveBar 
                data={this.state.userData} 
                keys={['balance']} 
                indexBy='first' 
                margin={{top: 10, right: 10, bottom: 60, left: 60}} 
                axisLeft={{ 
                    tickSize: 5, 
                    tickPadding: 5, 
                    tickRotation: 0, 
                    legend: 'Balance', 
                    legendPosition: 'middle', 
                    legendOffset: -45 
                }} 
                axisBottom={{ 
                    tickSize: 5, 
                    tickPadding: 5, 
                    tickRotation: -90, 
                    legend: '', 
                }} 
                enableLabel={false} 
                colors='#53486b' 
            ></ResponsiveBar> 
            </div>  
        )  
    } 

    componentDidMount() { 
        fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole') 
        .then(res => res.json()) 
        .then(data => { 
            data.forEach((record: any, idx: number) => { 
                data[idx].balance = parseFloat(record.balance.replace(/\$|,/g, '')); 
            }); 
            this.setState({userData: data}); 
        }) 
        .catch(console.log) 
    }
} 