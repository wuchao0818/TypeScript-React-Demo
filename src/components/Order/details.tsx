import * as React from 'react';

import axios from 'axios'

import { Link } from 'react-router-dom'

interface Props{
    state: object;
    location: any;
}

interface State{
   list: any
}

class details extends React.Component<Props,State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            list: []
          };
    }
    private getData = () =>{
        let url = 'http://a.itying.com/api/productcontent?'
        let id = this.props.location.state.value._id
        axios.get(url, {
            params: {
              id: id
            }
          })
          .then((response) => {
            console.log(response);
            this.setState({
                list: response.data.result[0]
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
            <div className = 'pcontent'>
            <div className="back">
              <Link to = '/'>返回</Link>
            </div>
    
            <div className="p_content">		
                <div className="p_info">
                    {this.state.list.img_url?<img src = {`http://a.itying.com/${this.state.list.img_url}`} alt = {this.state.list.title}/>:''}								
                    <h2>{this.state.list.title}</h2>				
                    <p className="price">{this.state.list.price}/份</p>
                </div>
                <div className="p_detial">
                    <h3>
                        商品详情					
                    </h3>
                    {/* React 解析html 模板 */}
                    <div className="p_content" dangerouslySetInnerHTML = {{__html:this.state.list.content}}> 
                    </div>
                    <p>{this.state.list.description}</p>
                </div>
            </div>
        
            <footer className="pfooter">
                
                <div className="cart">				
                    <strong>数量:</strong>
                    <div className="cart_num">
                    <div className="input_left">-</div>
                    <div className="input_center">
                        <input type="text"  value="1" name="num" id="num" readOnly={true}/>
                    </div>
                    <div className="input_right">+</div>				      
                    </div>								
                
                </div>
                
                <button className="addcart">加入购物车</button>			
            </footer>

        </div>
        );
    }
}

export default details;