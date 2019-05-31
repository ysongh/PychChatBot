import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            infor: "",
            count: 1
        };
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    render(){
        const addTextToList = () => {
            const flowerData = require('../flower-shop-skill-7.1.json');
            let res = 'sorry, i did not get that';
            console.log(flowerData.intents);
            
            flowerData.intents.map(intent => {
                if(this.state.infor === intent.intent){
                    res = intent.examples[1].text;
                    return;
                }
            });
            
            this.state.data.push({ id: this.state.count++, text: this.state.infor});
            this.setState({
                infor: ""
            });
            this.state.data.push({ id: this.state.count++, text: res});
        };
        
        return(
            <div className="room">
                <h1>Pysch ChatBot</h1>
                <div className="room__container">
                    { this.state.data.map(item => (
                        <p
                            className={ item.id % 2 === 0 ? "floatRight" : null }
                            key={ item.id }>
                                { item.text }
                        </p>
                    )) }
                </div>
                <input 
                    name="infor"
                    type="text"
                    placeholder="Something..."
                    onChange={this.onChange}
                    value={ this.state.infor } />
                <button type="button" onClick={ addTextToList }>Enter</button>
            </div>
            
        );
    }
}

export default Home;