
const product=[];

exports.getAddproduct=(req,res,next)=>{
res.render('add-product', 
{ pageTitle: 'Add Product', 
path: '/admin/add-product', 
formsCSS: true, 
productCSS: true,
activeAddProduct: true }
)};


exports.postAddproduct=(req,res,next)=>{
    product.push({title: req.body.title});
    res.redirect('/');   
}

exports.getproduct=(req,res,next)=>{
    res.render('shop',{
        prods: product,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: product.length > 0,
        activeShop: true,
        productCSS: true});
}