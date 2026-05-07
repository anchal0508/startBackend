const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Submit function called');

    const product = e.target.productName.value;
    const price = e.target.price.value;

    const obj = {
        "productName" : product,
        "price" : price
    }

    axios.post('http://localhost:3000/api/products/',obj).then((result)=>{

        console.log(result.data);
        
        document.getElementById('data').innerHTML = `<h1>${result.data.productName}  ${result.data.price} </h1>`;

    })  
}