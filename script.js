const restaurants = [
  {
    "name": "La Patisserie",
    "takeout": false,
    "rating": 5
  },
  {
    "name": "Cafe Geneva",
    "takeout": true,
    "rating": 6
  },
  {
    "name": "MuCafe",
    "takeout": true,
    "rating": 8
  },
  {
    "name": "Engin Balık",
    "takeout": false,
    "rating": 2
  }  
];

document.getElementById("filterTakeoutBtn").addEventListener("click", filterTakeout);

function filterTakeout() {
  let rList = "\nBu restoranlar paket servisi sunar:\n";
  // Aşağıdaki satır  yalnızca paket servis sunan restoranları içeren yeni bir dizi oluşturur.
  const hasTakeout = restaurants.filter(restaurant => restaurant.takeout);
  
  // Aşağıdaki satır diziden restoran adlarını alır ve bir dize oluşturur
  hasTakeout.forEach(restaurant => { 
    rList += `\n${restaurant.name}`;
  });
  
  // Aşağıdaki satır yeni oluşturulan dizeyle DOM'yi günceller
  document.getElementById("list").innerText = rList;
}

document.getElementById("tobtn").addEventListener("click", filterRatings)
function filterRatings() {
 
 const büyükMü = restaurants.filter(a => a.rating >= 5)
 let aciklama = "\n5 veya daha fazla puanı olan restoranları listeler\n"
 büyükMü.forEach(a => {
  aciklama += `\n ${a.name}`
  
 })
 document.getElementById("list").innerText = aciklama
 
}
document.getElementById("cbtn").addEventListener("click", charfli)
function charfli() {
 const cMi = restaurants.filter(a => a.name[0] == "C")
 let aciklama2 = "\n C harfi ile başlayan restoranların listesi\n"
 cMi.forEach(a => {
  aciklama2+=`\n ${a.name}`
 })
 document.getElementById("list").innerText = aciklama2
 
}