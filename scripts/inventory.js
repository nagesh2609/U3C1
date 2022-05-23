let dataArr =JSON.parse(localStorage.getItem("products"))|| [];

dataArr.forEach(function(ele , index){ 
    
    let div=document.createElement("div");

    let p=document.createElement("p");
    p.innerText=ele.type;
    let p2=document.createElement("p");
    p2.innerText=ele.desc;
    let p3=document.createElement("p")
    p3.innerText=ele.price;
    let img=document.createElement("img");
    img.src=ele.image;
    img.style.width="250px";
    img.style.height="350px";

    let btn =document.createElement("button")
    btn.innerText="Remove product"
    btn.addEventListener("click",function()
    {
        deletdata(ele,index);
    })

    div.append(p,p2,p3,img,btn)
    document.getElementById("all_products").append(div);

})

function deletdata(ele,index){
    let dataArr =JSON.parse(localStorage.getItem("products"))|| [];
    dataArr.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(dataArr));
      window.location.reload();
}
