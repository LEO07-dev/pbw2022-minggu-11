// displayed name
var dataBarang = [
    "Azmi Jalaluddin Amron",
    "Somebody Else",
    "Someone"
];

// function to display
function showBarang(){
    var listBarang = document.getElementById("list-Name");
    // clear list barang
    listBarang.innerHTML = "";

    // cetak semua barang
    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<tr>";        
        listBarang.innerHTML += "<td>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</td>";        
        listBarang.innerHTML += "</tr>";        
    }
}

// function to add
function addBarang(){
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
}

// the function to edit
function editBarang(id){
    var newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}

// function to erase
function deleteBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
}

showBarang();