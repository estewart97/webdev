import * as React from 'react';  
import Table from '@material-ui/core/Table'; 
import TableBody from '@material-ui/core/TableBody'; 
import TableCell from '@material-ui/core/TableCell'; 
import TableHead from '@material-ui/core/TableHead'; 
import TableRow from '@material-ui/core/TableRow'; 

interface UserData {  
    first: string  
    last: string  
    email: string  
    address: string  
    created: string  
    balance: string  
} 

interface UsersState {  
    userData: UserData[]  
} 

export default class Users extends React.Component<{}, UsersState> {

    constructor(props: {}) {  
        super(props)  

        this.state = {  
            userData: []  
        }  
    } 

    render() {  
        return (  
            <div>  
                <Table> 
                    <TableHead>  
                        <TableRow>  
                            <TableCell>First Name</TableCell>  
                            <TableCell>Surname</TableCell>  
                            <TableCell>Email</TableCell>  
                            <TableCell>Address</TableCell>  
                            <TableCell>Created</TableCell>  
                            <TableCell>Balance</TableCell>  
                        </TableRow>  
                    </TableHead>  
                    <TableBody>  
                        {this.state.userData.map((data, idx) => (  
                            <TableRow key={`users-table-${idx}`}>  
                                <TableCell>{data.first}</TableCell>  
                                <TableCell>{data.last}</TableCell>  
                                <TableCell>{data.email}</TableCell>  
                                <TableCell>{data.address}</TableCell>  
                                <TableCell>{data.created}</TableCell>  
                                <TableCell>{data.balance}</TableCell>  
                            </TableRow>  
                        ))}  
                    </TableBody>  
                </Table> 
            </div>  
        )  
    }

    componentDidMount() {
        fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
        .then(res => res.json())
        .then(data => {
            this.setState({userData: data}) 
        })
        .catch(console.log)  
    } 
}