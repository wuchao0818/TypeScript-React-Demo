import * as React from 'react';

import OrderList from './Order/List'
class Order extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <div>
                <OrderList/>
           </div> 
        );
    }
}

export default Order;