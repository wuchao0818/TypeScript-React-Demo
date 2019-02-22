import * as React from 'react';

import TodoForm from './TodoForm'
import TodoItem from './TodoItem'


interface Props { 

}
interface State { 
    list: number[]
}

class TodoList extends React.Component<Props,State> {
    constructor(props: any) {
        super(props);
        this.state = { 
            list:[]
         };
    }


    public getList = (data: number[]):void=>{
        this.setState({
            list: data
        })
    }

    public changeList = (key: number):void => {
        let list : any = this.state.list
        list[key].checked = !list[key].checked
        this.setState({
            list: list
        })

    }

    public deteleList = (key: number):void => {
        let list : any = this.state.list
        list.splice(key,1)
        this.setState({
            list: list
        })
    }
    public render() {
        return (
            <div>
                <TodoForm getList = {this.getList}/>
                <TodoItem data = {this.state.list} changeList = {this.changeList} deteleList = {this.deteleList}/>
            </div>
        );
    }
}

export default TodoList;