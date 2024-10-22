import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate, NavLink } from 'react-router-dom'

export default class UpdateDepartamento extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    updateDepartamento = (e) => {
        e.preventDefault();
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let localidad = this.cajaLocalidad.current.value;
        let departamento = {
            numero: id, 
            nombre: nombre, 
            localidad: localidad
        }
        let request = "api/departamentos";
        let url = Global.apiUrlDepartamentos + request;
        axios.put(url, departamento).then(response => {
            console.log("Update...");
            this.setState({
                status: true
            })
        })
    }

    state = {
        status: false
    }

  render() {
    return (
    <div>
        {
            this.state.status == true && 
            (<Navigate to="/"/>)
        }
        <h1>Update Departamento</h1>
        <NavLink to="/">Back to Index</NavLink>
        <form>
            <label>Id</label>
            <input type="text" ref={this.cajaId} defaultValue={this.props.id} 
            disabled
            className='form-control'/>
            <label>Nombre</label>
            <input type="text" ref={this.cajaNombre} defaultValue={this.props.nombre}
            className='form-control'/>
            <label>Localidad</label>
            <input type="text" ref={this.cajaLocalidad} defaultValue={this.props.localidad}
            className='form-control'/>
            <button onClick={this.updateDepartamento} className='btn btn-dark'>
                Update
            </button>
        </form>
    </div>
    )
  }
}
