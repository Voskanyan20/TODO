import './App.css';
import React, { Component } from 'react'
import _ from "lodash"
import Complete from "./Complete";

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: "" ,
            data: JSON.parse(localStorage.getItem('data')) || [],
        }
    }
    changed = (event)=>{
        this.setState({value: event.target.value })
    }
    add = ()=>{
        const {value, data} =this.state;
        data.push({
            id: _.uniqueId(),
            value,
             done: false
        })
        localStorage.setItem("Submit" , JSON.stringify(data))
        this.setState({data, value: ''})
    }
    clear = (id)=>{
        let {data} = this.state;
        data = data.filter(item=>item.id !== id)
        this.setState({data});
    }
    done = (id)=>{
        let {data} = this.state;
        data = data.map(item=>{
            if(item.id === id){
                item.done = !item.done
            }
            return item;
        })
        this.setState({data})
    }
    render() {
        const{value,data} = this.state
        return (
            <div>
                <h1 className='h1'>TO DO LIST</h1>
                <div id='todo'>
                    <div className='input_place'>
                        <input className='todo_input' type={'text'} value={value} onChange={this.changed} />
                        <button className='adder' onClick={this.add}>ADD</button>
                    </div>
                    <div className='submit_place'>
                        <ul className='list_ul'>
                            {data.map(item=>(
                                <li className='list_li' key ={item.id}>
                                    {item.done ?<del> {item.value}</del> : <span> {item.value}</span>}
                                    <button className='delete' onClick={()=>this.clear(item.id)}>Delete</button>
                                    <button className='done' onClick={()=>this.done(item.id)}>Done</button>
                                </li>
                            ))}
                        </ul>
                        <Complete data={data}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;

