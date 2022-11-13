// creando los Actions methods
// get "/"
// get "/index"
const home = (req,res) => {
   const viewModel = {
      author: 'Express',
      name: 'carlos',
   };
   res.render('home/home', viewModel);
};

const about = (req, res) => {
   res.render('home/about', {});
};
export default { home, about };
