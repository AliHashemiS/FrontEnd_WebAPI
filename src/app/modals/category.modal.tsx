import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { CategoryModel } from '../models';
import { CategoryService } from '../services';

interface State {
  form: CategoryModel,
}

interface Props{
  onClose:(category:CategoryModel)=> void
}

export class CategoryModal extends React.Component<Props,State> {

  private categoryService:CategoryService;

  constructor(props:Props){
    super(props);
    this.state = {form:{name:""}};
    this.categoryService = new CategoryService();
    this.onSubmit = this.onSubmit.bind(this);
  }

  private onSubmit(values: CategoryModel, { setSubmitting }: FormikHelpers<CategoryModel>) {
    console.log("creating")
    this.categoryService.createCategory(values).then(response => {
      this.props.onClose(response.data);
    })
  }

  render() {
    return (
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
                  <h4 className="fw-bold">Crear Categoría</h4>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <label className="fw-bold align-middle">Nombre de la categoría:</label>
                </div>
                <div className="col-9">
                  <input onBlur={handleBlur} onChange={handleChange} type="text" className="form-control" name="name" placeholder="Ej: arrays" />
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
      )
  }
}