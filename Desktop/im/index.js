fetch('https://fakestoreapi.com/products').then((data)=>{
//   console.log(data) 
return data.json() 
}).then((complete)=>{
    // console.log(complete[2].title);
    let data1 = "" ;
    complete.map((values)=>{
        data1+=`
        <div class="card">
            <h1 class="title">${values.title}</h1>
            <img class="img" src=${values.image} alt="img">
            <p class="description">${values.description}</p>
            <p class="catogary">${values.category}</p>
            <p class="price">${values.price}</p>
         </div>
        `;
    })
    document.getElementById("cards").innerHTML= data1;
}).catch((err)=>{
    console.log(err)
})