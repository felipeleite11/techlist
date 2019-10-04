import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList extends Component {
    state = {
        newTech: '',
        techs: []
    }

    handleInputChange = e => {
        this.setState({ newTech: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        if(this.state.techs.includes(this.state.newTech)) {
            alert('Tecnologia já adicionada!')
            this.setState({ newTech: '' })
            return
        }
        
        this.setState({ 
            techs: [
                ...this.state.techs,
                this.state.newTech
            ],
            newTech: ''
        })
    }

    handleDelete = tech => {
        this.setState({
            techs: this.state.techs.filter(t => t !== tech)
        })
    }

    componentDidMount() {
        const techs = localStorage.getItem('techs')

        if(techs) {
            this.setState({ techs: JSON.parse(techs) })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.techs !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>  
                <ul>
                    {this.state.techs.map(tech => (
                        <TechItem 
                            key={tech} 
                            tech={tech} 
                            onDelete={() => this.handleDelete(tech)} 
                        />
                    ))}
                </ul>

                <input 
                    type="text" 
                    onChange={this.handleInputChange} 
                    value={this.state.newTech} 
                />

                <button type="submit">Adicionar</button>
            </form>
        )
    }
}

export default TechList
