import * as React from 'react';  
import { Link } from 'react-router-dom'; 

interface MyNavbarState { 
    selected: number 
} 

interface MyNavbarLink {  
    name: string  
    path: string  
}  

interface MyNavbarProps {  
    links: MyNavbarLink[]  
} 

export default class MyNavbar extends React.Component<MyNavbarProps,MyNavbarState> { 

    constructor(props: MyNavbarProps) {  
        super(props);  

        this.state = {  
            selected: 0  
        }  
    } 

    private readonly updateSelected = (idx: number) => {  
        this.setState({selected: idx});  
    } 

    render() {
        return (  
            <div className='my-navbar'>  
                {  
                    this.props.links.map((link, idx) => {  
                        return (  
                            <Link key={`link-${idx}`}to={link.path} onClick={ 
                                () => this.updateSelected(idx) 
                            }> 
                                <div className={ 
                                    `navigation-item 
                                    ${this.state.selected === idx ? 
                                    'selected' : 
                                    ''}` 
                                }>  
                                    <p className='navigation-text'>  
                                        {link.name}  
                                    </p>  
                                </div>  
                            </Link>  
                        )  
                    })  
                }  
            </div>  
        )  
    } 

 }
