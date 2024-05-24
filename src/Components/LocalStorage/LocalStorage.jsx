 const getStoredBookApplication = () =>{
const  storedBookApplication = localStorage.getItem('bookApplication');
 if (storedBookApplication){ 
     return JSON.parse(storedBookApplication);
 
}
return []; 


}


const saveBookApplication = id =>{
const storedBookApplication = getStoredBookApplication();
const  isAlreadySaved = storedBookApplication.find(itemId=> itemId ===id );

 if (!isAlreadySaved){
   storedBookApplication.push(id);
    localStorage.setItem('bookApplication',JSON.stringify(storedBookApplication));
}
 }
 export {getStoredBookApplication,saveBookApplication};