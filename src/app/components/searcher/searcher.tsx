import React from "react";
export class Searcher extends React.Component {

  render() {
    return (
      <>
      <head>
        <title>Bootstrap Example</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      </head>
        <div className="container">
          <h2>Tabla de Funciones</h2>
          <input className="form-control" id="myInput" type="text" placeholder="Search.."></input>
          <br></br>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>JS</th>
              </tr>
            </thead>
            <tbody id="myTable">
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
