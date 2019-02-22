import * as React from 'react';

import TodoList from './TodoList/TodoList'

class Home extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {  };
    }
    public render() {
        return (
            <div>
                <h2>TypeScript TodoList演示</h2>
                <TodoList/>
            </div>
        );
    }
}

export default Home;