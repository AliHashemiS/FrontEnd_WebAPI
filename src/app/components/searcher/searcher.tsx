import React, { useState } from "react";
import { MethodService } from '../../services';
import { MethodModel } from "../../models";
import { report } from "process";
import CodeEditor from '@uiw/react-textarea-code-editor';

interface State {
  methods: MethodModel[]
  search: string
}

export class Searcher extends React.Component {

  public state: State;
  private methodService: MethodService;
  
  constructor(props: any) {
    super(props);
    this.state = {
      search: "",
      methods: []
    }
    this.methodService = new MethodService();
  }

  componentDidMount() {
    this.methodService.getAllMethod().then(response => {
      console.log(response.data.obj);
      this.setState({ methods: response.data.obj });
      console.log(this.state.methods);
    })
  }

  getMethodWithUserName = (event:any) => {
    //NO REFRESCA LA PAGINA
    event.preventDefault();
    this.methodService.getMethodUserName({"filter":this.state.search}).then(response => {
      console.log(response.data.obj);
      this.setState({"methods":response.data.obj});
    })
  }

  render() {
    return (
      <>
        <div className="container" style={{ marginTop: "20px"}}>
          <h2>Tabla de Funciones</h2>
          <form onSubmit={this.getMethodWithUserName}>
            <input onChange={(e)=>this.setState({...this.state, search: e.target.value})} value={this.state.search} className="form-control" id="myInput" type="text" placeholder="Search.."></input>
          </form>
          <br></br>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>JS</th>
              </tr>
            </thead>
            <tbody id="myTable">
              {this.state.methods.map(method => (
                  <tr key={method.id}>
                    <td>{method.id}</td>
                    <td>{method.user?.email}</td>
                    <td>{method.name}</td>
                    <td>{method.description}</td>
                    <td>{method.category?.name}</td>
                    <td><CodeEditor
                    readOnly={true}
                    language="js"
                    value={method.code}
                    style={{
                      fontSize: 16,
                      fontFamily: "'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu' 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif'",
                    }}
                  /></td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
