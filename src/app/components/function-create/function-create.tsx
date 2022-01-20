
import { Formik, FormikHelpers } from "formik";
import React from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import { MethodService, CategoryService } from '../../services';
import { MethodModel } from "../../models";

interface Form {
  description: string,
  code: string,
  name: string,
  id_category: number
}
interface Category {
  id: number,
  name: string
}
interface State {
  form: Form,
  showAlert:boolean,
  categories: Category[]
}

export class FunctionCreate extends React.Component {

  public state: State;
  private methodService: MethodService;
  private categoryService: CategoryService;


  constructor(props: any) {
    super(props);
    this.state = {
      form: {
        description: '',
        code: '',
        name: '',
        id_category: 0
      },
      showAlert:false,
      categories: []
    }
    this.categoryService = new CategoryService();
    this.methodService = new MethodService();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.categoryService.getAllCategories().then(response => {
      this.setState({ categories: response.data });
    })
  }

  private onSubmit(values: Form, { setSubmitting }: FormikHelpers<Form>) {
    const methos: MethodModel = {
      id_category: values.id_category,
      code: values.code,
      description: values.description,
      name: values.name,
      id_user: Number(localStorage.getItem('id_user'))
    }

    this.methodService.createMethod(methos).then(data => {
      this.setState({showAlert:true});
    })
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
        <div className="row mt-1">
          <div className="col-12"> 
            {this.state.showAlert &&
              <div className="alert alert-success">
                Metodo Agregado
              </div>
            }
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
                  <select onBlur={handleBlur} onChange={handleChange} name="id_category" className="form-select w-100">
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
