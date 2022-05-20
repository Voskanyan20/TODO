import React, {Component} from 'react';
import "./App.css"
class Complete extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const{data} = this.props
        return (
            <div>
                <span className='complete_span'>{data.filter(datas => datas.done).length}/ {data.length}</span>
            </div>
        );
    }
}

export default Complete;