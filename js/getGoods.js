const getGoods = function(){
    const links = document.querySelectorAll('.navigation-link');

    

    const getData = function(){
        fetch('db/db.json')
        .then(function (response){
            return response.json();
        }).then(function (data){
        console.log(data)
    })
    }

    links.forEach(function(link){
        link.addEventListener('click' , function(event){
            getData();
        })
    })

    // localStorage.setItem('goods' , JSON.stringify({name : 'all'}))

    // const goods = JSON.parse({name: 'all'});
    // console.log(goods);

    // console.log(localStorage);
    // localStorage.removeItem('goods');
    // console.log(localStorage);
}

getGoods();