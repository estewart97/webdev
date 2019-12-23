import * as React from 'react';  
import MyPageHeader from '../my-page-header/MyPageHeader';   
import MyNavbar from '../my-navbar/MyNavbar'; 

export default class App extends React.Component { 

    render() {  
        return (  
            <div>  
                <MyPageHeader></MyPageHeader> 
                <MyNavbar></MyNavbar> 
            </div>  
        )  
    } 

} 