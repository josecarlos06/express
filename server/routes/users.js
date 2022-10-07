import express from 'express';
const router = express.Router();
// cambios
router.get('/',(req, res, next) =>{
  res.send('respond with a resource');
});

export default router;
