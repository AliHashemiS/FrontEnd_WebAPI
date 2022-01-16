import React from "react";
import { FunctionCreate } from "../function-create/function-create";
import { RouteModel } from "../../models";
import { RouterNavigator } from "../router-navigator/routerNavigator";
import { NavLink } from "react-router-dom";
import { Searcher } from "../searcher/searcher";


const ROUTES: RouteModel[] = [
  { path: "creator", component: FunctionCreate },
  { path: "Searcher", component: Searcher },
  { path: "", component: Searcher },
]

interface State{
  links:{name:string,path:string}[]
}

export class Dashboard extends React.Component {

  public state: State;

  constructor(props:any){
    super(props);
    this.state = {links:[
      {name:"Creador",path:"creator"},
      {name:"Buscador",path:"searcher"}
    ]};

    
  }

  render() {
    return (
      <div className="content bg-light pb-3">
        <nav className="navbar shadow-sm navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <NavLink to="/dashboard" className="navbar-brand">
              Repositorio
            </NavLink>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {this.state.links.map(link => (
                  <li key={link.path} className="nav-item">
                    <NavLink end to={link.path} className="nav-link">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                
              </ul>
            </div>
          </div>
        </nav>
        <div className="container shadow-sm bg-white mt-2 rounded-2 pb-3" style={{minHeight: 'calc(100vh - 90px)'}}>
          <div className="row">
            <div className="col-12">
              <RouterNavigator routes={ROUTES} />
            </div>
          </div>
        </div>

      </div>
    );
  }

}
