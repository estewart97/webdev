import * as React from 'react';  

export default class MyNavbar extends React.Component {  

    render() {  
        return (  
            <div className='my-navbar'>  
                <div className='navigation-item selected'>  
                    <p className='navigation-text'>  
                        Page 1  
                    </p>  
                </div>  
                <div className='navigation-item'>  
                    <p className='navigation-text'>  
                        Page 2  
                    </p>  
                </div>  
                <div className='navigation-item'>  
                    <p className='navigation-text'>  
                        Page 3  
                    </p>  
                </div>  
                <div className='navigation-item'>  
                    <p className='navigation-text'>  
                        Page 4  
                    </p>  
                </div>  
            </div>  
        )  
    } 

} 