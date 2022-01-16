
import { Formik, FormikHelpers } from "formik";
import React from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';

interface Form {
  description: string,
  code: string,
  id_category: number
}
interface Category{
  id:number,
  name:string
}
interface State {
  form: Form,
  categories:Category[]
}

export class FunctionCreate extends React.Component {

  public state: State;


  constructor(props: any) {
    super(props);
    this.state = {
      form: {
        description: '',
        code: '',
        id_category: 0
      },
      categories:[
        {id:1,name:"Prueba"}
      ]
    }
  }

  private onSubmit(values: Form, { setSubmitting }: FormikHelpers<Form>) {

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-12">
            <h2 className="fw-bold mb-0 pb-0">Creador de funciones</h2>
            <hr className="mt-0" />
          </div>
        </div>
        <Formik initialValues={this.state.form} onSubmit={this.onSubmit}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="row mt-3">
                <div className="col-12">
                  <h4 className="fw-bold">Información basica</h4>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <label className="fw-bold align-middle">Nombre de la Función:</label>
                </div>
                <div className="col-9">
                  <input onBlur={handleBlur} onChange={handleChange} type="text" className="form-control" name="name" placeholder="Ej: ordenador de arrays.." />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <label className="fw-bold align-middle">Categoría:</label>
                </div>
                <div className="col-9">
                  <select className="form-select w-100">
                    <option value={0}>Seleccionar</option>
                    {this.state.categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <label className="fw-bold align-middle">Descripción:</label>
                </div>
                <div className="col-9">
                  <textarea name="description" placeholder="Esta funcion sirve para..." onBlur={handleBlur} onChange={handleChange} className="w-100 form-control" rows={3}></textarea>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  <h4 className="fw-bold">Código</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <CodeEditor
                    language="js"
                    placeholder="Código de mi función"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="code"
                    padding={15}
                    style={{
                      fontSize: 16,
                      backgroundColor: "#f5f5f5",
                      fontFamily: "'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu' 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif'",
                    }}
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-6 mx-auto mt-3 d-grid gap-2">
                    <button disabled={isSubmitting} type="submit" className="btn btn-success btn-block mx-auto">
                      Guardar
                    </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }

}
