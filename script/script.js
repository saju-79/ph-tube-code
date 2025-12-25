function lodeCatagoriItem(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>displayCategoris(data.categories ));
}
function displayCategoris(btns){
    for(let btn of btns){
        console.log();
       const prentsDiv = document.getElementById("categori-btn");
        const div =document.createElement("div");
        div.innerHTML=`
        <button class="btn btn-sm bg-[#25252520] text-[#25252590] hover:bg-[#ff1f3d] hover:text-[#ffffff] font-medium ">${btn.category}</button>
        `
        prentsDiv.appendChild(div)
    }
}
lodeCatagoriItem()