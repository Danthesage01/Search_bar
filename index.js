let searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup", function(event){
 let searchQuerry = event.target.value.toLowerCase();
  console.log(searchQuerry)

  let allNamesDOMCollections = document.getElementsByClassName("name");

  for (let i=0; i<allNamesDOMCollections.length; i++){
      const currentName = allNamesDOMCollections[i].textContent.toLowerCase()
      console.log(currentName)
      if(currentName.includes(searchQuerry)){
        allNamesDOMCollections[i].style.display = "block" 
      } else{
        allNamesDOMCollections[i].style.display = "none"  
      }
  }
})
