import * as React from 'react';

import axios from 'axios'
import { Link } from 'react-router-dom'

interface Props{

};

interface State{
    list: number[]
}

class List extends React.Component<Props,State>{
    constructor(props: any) {
        super(props);
        this.state = { 
            list: []
         };
    }
    
    private getData = () =>{
        let url = 'http://a.itying.com/api/productlist'
        axios.get(url)
            .then((response) => {
                console.log(response);
                this.setState({
                    list: response.data.result
                }) 
            })
            .catch(function (error) {
                console.log(error);
            });  
    }

    componentDidMount(){
        this.getData()
    }

    public render() {
        return (
            <div className = 'home'>
            <div className = 'list'>
               {this.state.list.map((item: any,index: number)=>{
                   return( 
                   <div className = 'item' key = {index}>
                        <h2 className = 'item_cate'>{item.title}</h2>
                        <ul className = 'item_list'>
                            {item.list.map((value: any,index: number)=>{
                                console.log(value)
                                return(
                                <li key = {index}>
                                    <Link to = {{pathname: `/content/${value.title}`,state:{value}}}>
                                        <div className = 'inner'>  
                                            {/* <img src = {require('../page')}/>                                              */}
                                            <img src={`http://a.itying.com/${value.img_url}`}  alt={value.title} className = 'item_img'/>
                                            <p className ='title'>{value.title}</p>
                                            <p className = 'price'>{value.price}元</p>                                               
                                        </div>
                                    </Link>
                                </li>
                                )
                            })}
                        </ul>  
                    </div>
                    )                      
                 })
               }
            </div>
        </div>
        );
    }
}

export default List;