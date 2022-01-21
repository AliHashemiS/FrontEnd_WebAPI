import { Formik, FormikHelpers } from "formik";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { UserService } from "../../services/user.service";

interface LoginForm{
  username:string,
  password:string
}

interface State{
  form:LoginForm,
  Action:boolean
}

export class Login extends React.Component {

  public state: State;
  private userService: UserService;


  constructor(props:any){
    super(props);
    this.state = { form:{username:'',password:''}, Action:false};
    this.userService = new UserService();
    this.onSubmit = this.onSubmit.bind(this);
    localStorage.setItem("id_user","0");
  }

  private onSubmit(values:LoginForm,{ setSubmitting }: FormikHelpers<LoginForm>){
    if(values.username && values.password != null) {
      this.userService.getUser(values.username,values.password).then(data => {
        console.log(data);
        if(data.data.obj != null){
          alert("Se logueo correctamente el usuario: "+ values.username);
          console.log(data.data.obj.id);
          localStorage.setItem("id_user",data.data.obj.id);
          this.setState({"Action":true});
        }
        this.setState({ showAlert: true });
      })
    }
    setSubmitting(false);
  }

  render() {
    if(this.state.Action){
      return <Navigate to="dashboard" />
    }
    return (
      <div className="content gradiant">
        <div className="card" style={{ minWidth: '400px' }}>
          <Formik initialValues={this.state.form} onSubmit={this.onSubmit }>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form style={{display:'block'}} onSubmit={handleSubmit}>
                <h2 className="text-center mb-3 mt-2">Bienvenido!</h2>
                <label className="mt-2">Nombre de usuario:</label>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className="w-100 form-control"
                />
                {errors.username && touched.username && errors.username}

                <label className="mt-2">Contraseña:</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="w-100 form-control"
                />
                {errors.password && touched.password && errors.password}

                <div className="d-grid gap-2 col-6 mx-auto mt-3">
                  <Link className="text-center" to="/register">No tienes una cuenta?</Link>
                  <button className="btn btn-success btn-block mx-auto" type="submit" disabled={isSubmitting}>
                    Enviar
                  </button>
                </div>

              </form>

            )}
          </Formik>
        </div>
      </div>
    );
  }

}
