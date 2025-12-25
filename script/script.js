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

/**video ditels */
function video(ditelsId){
   const url = `https://openapi.programming-hero.com/api/phero-tube/video/${ditelsId}`
   fetch(url).then((res)=>res.json())
   .then((data) =>{
    displayDitels(data.video)
   })
}

const displayDitels=(video)=>{
   const ditelsVideo = document.getElementById("ditels");
   document.getElementById("my_modal_5").showModal()
   const div = document.createElement("div");
   div.innerHTML=`
   
   
<div class="card  image-full w-full shadow-sm p-0">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
  <h2 class="card-title">${video.title}</h2>
   <div class='flex items-center '>
   <p class='text-2xl font-bold '> Hello ${video.authors[0].profile_name} </p>
   <p class='text-sm font-normal text-end'> your views ${video.others.views} </p>
   </div>
   <p> ${video.description}</p>
  
   <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
</div>
</div> 

   
   
   `

ditelsVideo.appendChild(div)








}


const displayVideos = (videos)=>{
    const videoSection = document.getElementById("video-categori");
    videoSection.innerHTML="";
    videos.forEach(video => {
        const videoId  = video.video_id
         

        
     
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
        <h2 class="font-medium text-[#17171770] text-sm flex gap-1"> ${video.authors[0].profile_name}  
        ${video.authors[0].verified === true ? " verified"  : ""} 
 </h2>
        <h2 class="font-normal text-[#17171770] text-lg"> ${video.others.views} views</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  
</svg>

    </div>
     
   
    
  </div> 
  <button onclick="video('${videoId} ') "
     class="btn btn-wide space-y-2 text-sm font-semibold text-[#d7252595]">Show Details</button>
   
</div>
     
     `

     videoSection.appendChild(videoCard)
    
   });

}




lodeCatagoriItem()

 
