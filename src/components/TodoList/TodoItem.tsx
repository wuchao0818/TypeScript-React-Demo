import * as React from 'react';

interface Props{ 
    data: number[];
    changeList: any;
    deteleList: any;
}
interface State { 
    
}

class TodoItem extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
         };
         console.log(this.props)
    }
    render() {
        return (
            <div>
                <div>
                    <h2>待完成事项</h2>
                    <ul>
                        {this.props.data.map((item: any,index: number):any=>{
                            if(!item.checked){
                                return(
                                    <li key = {index}>
                                        <input type="checkbox" checked = {item.checked}
                                        onChange = {this.props.changeList.bind(this,index)}/>
                                        <span>{item.title}</span>
                                        <button onClick = {this.props.deteleList.bind(this,index)}>删除</button>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
                <div>
                    <h2>已完成事项</h2>
                    <ul>
                        {this.props.data.map((item: any,index: number):any=>{
                            if(item.checked){
                                return(
                                    <li key = {index}>
                                        <input type="checkbox" checked = {item.checked}
                                        onChange = {this.props.changeList.bind(this,index)}/>
                                        <span>{item.title}</span>
                                        <button onClick = {this.props.deteleList.bind(this,index)}>删除</button>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoItem;