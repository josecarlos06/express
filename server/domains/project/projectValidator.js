import * as Yup from 'yup';
const projectSchema = Yup.object().shape({
   name: Yup.string().required('Falto nombre de proyecto 😢'),
   description: Yup.string()
      .max(500, 'No escribir mas de 500 caracteres')
      .required('Este campo no puede estar vacio 😢'),
});
const getProject = (req) => {
   const { name, description } = req.body;
   return { name, description, };
};
export default { projectSchema, getProject, };