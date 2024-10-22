import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import loadingImage from './../assets/images/loading.gif'
import { NavLink } from 'react-router-dom'

export default class DetalleDepartamento extends Component {
    state = {
        departamento: null
    }

    findDepartamento = () => {
        let request = "api/departamentos/" + this.props.id;
        let url = Global.apiUrlDepartamentos + request;
        axios.get(url).then(response => {
            console.log("Detalles departamento")
            this.setState({
                departamento: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findDepartamento();
    }
  render() {
    return (
    <div>
        <NavLink to="/">Back to List</NavLink>
        {
            this.state.departamento ? 
            (<ul className='list-group'>
                <li className='list-group-item'>
                    Número: {this.state.departamento.numero}
                </li>
                <li className='list-group-item'>
                    Nombre: {this.state.departamento.nombre}
                </li>
                <li className='list-group-item'>
                    Localidad: {this.state.departamento.localidad}
                </li>
            </ul>) :
            (<img src={loadingImage}/>)
        }
    </div>
    )
  }
}
