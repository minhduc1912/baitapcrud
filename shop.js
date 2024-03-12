var man = [
  {
    id:1,
    name: "Áo thun",
    code: "TN001",
    oldprice: "450.000",
    price: "300.000",
    image: "./imgshop/aothun.jpg"
  },
  {
    id:2,
    name: "QUẦN JEAN",
    code: "TN002",
    oldprice: "900.000",
    price: "750.000",
    image: "./imgshop/quanjean.jpg"
  },
  {
    id:3,
    name: "Sơ mi",
    code: "TN003",
    oldprice: "450.000",
    price: "300.000",
    image: "./imgshop/aosomi.jpg"
  },
  {
    id:4,
    name: "Áo Polo",
    code: "TN004",
    oldprice: "350.000",
    price: "250.000",
    image: "./imgshop/aopolo.jpg"
  },
];
var woman = [
  {
    id:1,
    name: "Váy",
    code: "TN011",
    oldprice: "500.000",
    price: "400.000",
    image: "./imgshop/vay.jpg"
  },
  {
    id:2,
    name: "Bộ jean",
    code: "TN012",
    oldprice: "750.000",
    price: "500.000",
    image: "./imgshop/stylefemale.jpg"
  },
  {
    id:3,
    name: "Bộ nâu",
    code: "TN013",
    oldprice: "900.000",
    price: "750.000",
    image: "./imgshop/stylefemale2.jpg"
  },
  {
    id:4,
    name: "Bộ đỏ",
    code: "TN014",
    oldprice: "1.000.000",
    price: "850.000",
    image: "./imgshop/stylefemale3.jpg"
  },
];
function listProducts(){
  for (let i=0;i<=man.length-1;i++){
    var row= '<div class="col-3">';
    row += '<div class="card" style="width: 18rem">';
    row += '<img src="'+man[i].image+'"class="card-img-top" style="height:300px;">';
    row += '<div class="card-body">';
    row += '<h5 class="card-title">'+man[i].name+'</h5>';
    row += '<p class="card-text"><span style="text-decoration: line-through;">' + man[i].price + ' vnđ</span> ' + man[i].oldprice + ' vnđ</p>';
    row += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>'
    row += '</div>';
    row += '</div>';
    row += '</div>';
    console.log(row);
    document.getElementById("man").innerHTML +=row;
  }
  for (let i=0;i<=woman.length-1;i++){
    var row= '<div class="col-3">';
    row += '<div class="card" style="width: 18rem">';
    row += '<img src="'+woman[i].image+'"class="card-img-top" style="height:300px;">';
    row += '<div class="card-body">';
    row += '<h5 class="card-title">'+woman[i].name+'</h5>';
    row += '<p class="card-text"><span style="text-decoration: line-through;">' + woman[i].oldprice + ' vnđ</span> ' + woman[i].price + ' vnđ</p>';
    row += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>'
    row += '</div>';
    row += '</div>';
    row += '</div>';
    console.log(row);
    document.getElementById("woman").innerHTML +=row;
  }

  
}

function addProduct(catagory) {
  var name, price, image;
  if (catagory == 'man') {
      name = document.getElementById('manName').value;
      price = document.getElementById('manPrice').value;
      image = document.getElementById('manImage').value;
      man.push({ id: man.length + 1, name: name, code: "", price: price, image: image });
      
  } else if (catagory == 'woman') {
      name = document.getElementById('womanName').value;
      price = document.getElementById('womanPrice').value;
      image = document.getElementById('womanImage').value;
      woman.push({ id: woman.length + 1, name: name, code: "", price: price, image: image });
  }
  listProducts(catagory);
 
}