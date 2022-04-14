console.log(myajax.url)

let buttonSend = document.querySelector('.btn-primary')


let valid = new CustomFormValid();
valid.init()



buttonSend.addEventListener('click', e => {
    e.preventDefault()

    let data = document.querySelectorAll('.form-control');
    console.log(data)
    data = [...data];
    // console.log(data[0].name)
    // console.log(data[1].name)
    // console.log(data[2].name)

    let formData = new FormData();

    data.forEach((el) => {
        formData.append(el.name, el.value);
        console.log(el.name)
        console.log(el.value)

    })
    // 'qqwrqwr/asdasdww', "/asdasdasd"
    fetch(myajax.url, {
        // fetch('http://testo.com/wp-json/qqwrqwr/asdasdww/asdasdasd', {
            method: 'POST',
            body: formData,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    ).then(response => response.json())
        .then(result => {
            console.log(result)

            if (result.ok){
               console.log(result)
           }
        })

})

//
// let formData = new FormData();
// formData.append('asd', 'load_more_posts');
//
//
//
// let a = await fetch('http://testo.com/wp-json/contactus/1.0/registration/', {
//     method: 'POST',
//     body: formData,
//     'Content-Type': 'application/x-www-form-urlencoded'}
// )
//
//
// let bbb = await a.text()
//
//
// console.log(bbb)