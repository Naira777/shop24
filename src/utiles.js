export function getNameAndCategory(arr) {
  const arr_name = [];
  const array = [];
  const arr_image = [];

  for (let i = 0; i < arr.length; i++) {

    if ( arr[i].parent_id == 35 ){
  
    for (let key in arr[i]) {


      if (key === "translation") {
          
        for (let k in arr[i].translation) {
    
           if (k === "title") {
        
          arr_name.push(arr[i][key][k]);
             
        }
        
      }
    }

      if (key === "media_id") {
        arr_image.push(arr[i][key]);
      }
    }
 }

  }

  for (let i = 0; i < 22; i++) {
    array.push({ name: arr_name[i], image: arr_image[i] });
  }

 


  return array;
}



export function getNameandUrl(arr) {
  const arr_image = [];
  const array = [];
  const arr_name = [];



  for (let i = 0; i < arr.length; i++) {

    if ( arr[i].parent_id == 63 ){
  
    for (let key in arr[i]) {


      if (key === "translation") {
          
        for (let k in arr[i].translation) {
    
           if (k === "title") {
        
          arr_name.push(arr[i][key][k]);
             
        }
        
      }
    }

      if (key === "media_id") {
        arr_image.push(arr[i][key]);
      }
    }
 }

  }



  for (let i = 0; i < arr_name.length; i++) {
    array.push({ name: arr_name[i], image: arr_image[i] });
  }
  
  return array;
}


export function getNameandUrlBread(arr) {
  const arr_image = [];
  const array = [];
  const arr_name = [];



  for (let i = 0; i < arr.length; i++) {

    if ( arr[i].code == 'bread' ){
  
    for (let key in arr[i]) {


      if (key === "translation") {
          
        for (let k in arr[i].translation) {
    
           if (k === "title") {
        
          arr_name.push(arr[i][key][k]);
             
        }
        
      }
    }

      if (key === "media_id") {
        arr_image.push(arr[i][key]);
      }
    }
 }

  }


  for (let i = 0; i < arr_name.length; i++) {
    array.push({ name: arr_name[i], image: arr_image[i] });
  }
  console.log(array)
  return array;
}





export function getBrandsUrl(arr) {
  const array = []
  const arr_image = [];
  const arr_title = []
  const arr_desc = []
   const arr_id = []


  for (let i = 0; i < arr.length; i++) {

     
    for (let key in arr[i]) {

      if (key === "media_id") {
          
       arr_image.push(arr[i][key])
        
      }
       if (key === "id") {
          
       arr_id.push(arr[i][key])
        
      }

     if (key === "translation") {
          
      
      for (let k in arr[i][key]){

        if (k === 'title'){
          
       arr_title.push(arr[i][key][k])

        }

        if (k === 'description'){ 

        arr_desc.push(arr[i][key][k])

        }
        

      }
        
      }
      
    }
       
 }
  
 for (let i = 0; i < arr_title.length; i++) {
  array.push({ image: arr_image[i], title: arr_title[i], desc: arr_desc[i], id: arr_id[i] });
}

  return array;

}


export function getProductsByBrand {

const name = []
const image= []
const desc = []
const network = []
const products = []


for () {




}










}