import { Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";

interface LoginForm{
  username:string,
  password:string
}

interface State{
  form:LoginForm,
}

export class Login extends React.Component {

  public state: State;


  constructor(props:any){
    super(props);
    this.state = { form:{username:'',password:''}};
  }

  private onSubmit(values:LoginForm,{ setSubmitting }: FormikHelpers<LoginForm>){
    console.log("Subid",values);
    setSubmitting(false);
  }

  render() {
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
