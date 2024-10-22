import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import loadingImage from './../assets/images/loading.gif'
import { NavLink } from 'react-router-dom'

export default class HomeDepartamentos extends Component {
    state = {
        status: false,
        departamentos: []
    }

    loadDepartamentos = () => {
        let request = "api/departamentos";
        let url = Global.apiUrlDepartamentos + request;
        axios.get(url).then(response => {
            console.log("Leyendo departamentos");
            this.setState({
                departamentos: response.data,
                status: true
            })
        })
    }

    deleteDepartamento = (idDepartamento) => {
        let request = "api/departamentos/" + idDepartamento;
        let url = Global.apiUrlDepartamentos + request;
        axios.delete(url).then(response => {
            console.log("Delete...");
            this.loadDepartamentos();
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

  render() {
    if (this.state.status == false){
        return (<img src={loadingImage}/>)
    }else{
        return (
            <div>
              <h1>Delete</h1>
             </div>
          )        
    }
  }
}
