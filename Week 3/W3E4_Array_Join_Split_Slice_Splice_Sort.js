var arr1 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr1){
    arr1.splice(2, 1, "Provinsi Bandar Lampung") // nilai 2 adalah indexnya, 1 adalah brp yang mau kita hapus -> ""Nilai yang mau kita tambah
    arr1.splice(1, 1, "Roman Alamsyah Elsharawy") // hapus index 1, total nilai yang mau di hapus =++
    //arr1.splice(2, 2) //["0001", "Roman Alamsyah Elsharawy", "Membaca"]
    arr1.splice(4, 1, "Pria", "SMA Internasional Metro")

    var bulan = arr1[3].split("/")

    //arr1[3].split(" ")
   
    console.log(arr1)
    
    
    switch(parseInt(bulan[1])) {
        case 01:   { console.log('January'); break; }
        case 02:   { console.log('Febuari'); break; }
        case 03:   { console.log('Maret'); break; }
        case 04:   { console.log('April'); break; }
        case 05:   { console.log('Mei'); break; } //bisa dgn kar string case "05":   { console.log('Mei'); break; }
        case 06:   { console.log('Juni'); break; }
        case 07:   { console.log('Juli'); break; }
        case 08:   { console.log('Agustus'); break; }
        case 09:   { console.log('September'); break; }
        case 10:   { console.log('October'); break; }
        case 11:   { console.log('November'); break; }
        case 12:   { console.log('Desember'); break; }
        default:  { console.log('Salah Tanggal'); }
        }

    bulan.sort(function(a, b){return b - a});
    console.log(bulan)

    console.log(bulan.join("-"));

    // arr1[1].slice(0,15)
    //var nama = arr1[1].slice(0,15)
    console.log(arr1[1].slice(0,15))
    }

dataHandling2(arr1)
