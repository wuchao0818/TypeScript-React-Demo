import * as React from 'react';

interface Props { 
    getList: any
}
interface State { 
    text: string;
    list: any;
}
class TodoForm extends React.Component<Props,State>{
    constructor(props: Props) {
        super(props);
        this.state = { 
            text: '',
            list:[],
         };
    }
 

    public textChange = (e: any):void=>{
        this.setState({
            text: e.target.value
        })
    }
    private addClick = () :void=> {
        let list = this.state.list
        list.push({
            title: this.state.text,
            checked: false
        })
    
        // console.log(this.refs.name.value)
        this.props.getList(list)
    }
    public render() {
        return (
            <div>
                <input type="text" onChange = {this.textChange} ref= 'name'/>
                <button onClick = {this.addClick}>添加</button>
            </div>
        );
    }
}

export default TodoForm;