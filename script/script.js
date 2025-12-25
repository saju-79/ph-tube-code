function lodeCatagoriItem(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>displayCategoris(data.categories ));
}
function displayCategoris(btns){
    for(let btn of btns){
       
       const prentsDiv = document.getElementById("categori-btn");
        const div =document.createElement("div");
        div.innerHTML=`
        <button id="btn-${btn.category_id}" onclick="susationBtn(${btn.category_id}) "  class="btn btn-sm bg-[#25252520] text-[#25252590] hover:bg-[#ff1f3d] hover:text-[#ffffff] font-medium ">${btn.category}</button>
        `
       
        prentsDiv.appendChild(div)
    }
}
function removeActive(event){
   const activeBtn = document.getElementsByClassName("active");
   document.getElementById("all-btn").classList.remove("active")
    for(let btn of activeBtn){

        for(let b of activeBtn){
             b.classList.remove('active')
       
        }
        btn.classList.add("active")
        event.classList.add("active")
    }
   
}

function susationBtn(id){
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    fetch(url).then((res)=>res.json()).then((data)=>{
       
          const button = document.getElementById(`btn-${id}`)
           button.classList.add("active");
        //   console.log(button)
           removeActive(button)

       
         displayVideos(data.category)
    })
}
// video document
function lodeVideo(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) =>response.json())
    .then((data) => displayVideos(data.videos))
    document.getElementById("all-btn").classList.add("active")
}
const displayVideos = (videos)=>{
    const videoSection = document.getElementById("video-categori");
    videoSection.innerHTML="";
    videos.forEach(video => {
    
     
     const videoCard = document.createElement("div");
    
     videoCard.innerHTML=`
          <div class="card bg-base-100 w-full shadow-sm">
  <figure class="relative">
    <img
    class="w-full h-40 object-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
      <span class="absolute bottom-2 right-3 text-gray-400 bg-[#252525] px-1 rounded-sm  "> ${video.others.posted_date} </span>
  </figure>
  <div class="flex gap-3 py-4  ">
    <div class="avatar px-0 w-1/12">
  <div class="ring-primary ring-offset-base-100 w-6 h-6 rounded-full ring-2 ring-offset-2">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
    <div class=" ">
        <h2 class="font-bold text-[#171717] text-lg"> ${video.title}</h2>
        <h2 class="font-medium text-[#17171770] text-sm flex gap-1"> ${video.authors[0].profile_name} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>
 </h2>
        <h2 class="font-normal text-[#17171770] text-lg"> ${video.others.views} views</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  
</svg>

    </div>
     
   
    
  </div>
</div>
     
     `

     videoSection.appendChild(videoCard)
    
   });

}
lodeCatagoriItem()

 
