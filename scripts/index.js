//store the products array in localstorage as "products"
document.querySelector("form").addEventListener("submit",myfunction);
let dataArr =JSON.parse(localStorage.getItem("products"))|| [];

function myfunction(){
    event.preventDefault();
    let productobject={
        type:form.type.value,
        desc:form.desc.value,
        price:form.price.value,
        image:form.image.value,
    }
    form.type.value=null;
    form.desc.value=null;
    form.price.value=null;
    form.image.value=null;
    dataArr.push(productobject);
    localStorage.setItem("products",JSON.stringify(dataArr))
}
