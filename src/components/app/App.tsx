import * as React from 'react';  
import MyPageHeader from '../my-page-header/MyPageHeader';   
import MyNavbar from '../my-navbar/MyNavbar'; 
import Users from '../users/Users'; 
import Chart from '../chart/Chart'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const links = [  
    {  
      name: 'Users',  
      path: '/'  
    },  
    {  
      name: 'Chart',  
      path: '/chart'  
    },  
    {  
      name: 'Page 3',  
      path: '/page3'  
    },  
    {  
      name: 'Page 4',  
      path: '/page4'  
    }  
  ]
  
export default class App extends React.Component { 

    render() {  
        return (  
            <div>  
                <MyPageHeader></MyPageHeader> 
                <Router> 
                <MyNavbar links={links}></MyNavbar>
                    <Switch>  
                        <Route path="/chart">  
                            <div className='my-page-content'> 
                                <Chart></Chart> 
                            </div>  
                        </Route>  
                        <Route path="/page3">  
                            <div className='my-page-content'>Page 3</div>  
                        </Route>  
                        <Route path="/page4">  
                            <div className='my-page-content'>Page 4</div>  
                        </Route>  
                        <Route path="/"> 
                            <div className='my-page-content'> 
                                <Users></Users> 
                            </div>  
                        </Route> 
                    </Switch>  
                </Router> 
            </div>  
        )  
    } 

} 