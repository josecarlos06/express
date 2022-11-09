// creando los Actions methods
// get "/"
// get "/index"
const homeIndex = (req,res) => {
   let viewModel={
      author: ' *_* ',
   };
   res.render('home', viewModel);
}
export default { homeIndex };