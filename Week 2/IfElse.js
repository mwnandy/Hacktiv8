var nama = 'Zero';
var peran = 'Penyihir';
console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game')
if (peran === 'Ksatria' && nama === 'Nina'){
  console.log('Selamat datang di Dunia Proxytia, Nina')
  console.log('Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!')
}
else if(peran === 'Tabib' && nama === 'Danu'){
  console.log('Selamat datang di Dunia Proxytia, Danu')
  console.log('Halo Tabib Danu, kamu akan membantu temanmu yang terluka.')
}
else if(peran === 'Penyihir' && nama === 'Zero'){
  console.log('Selamat datang di Dunia Proxytia, Zero')
  console.log('Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu')
}
else {
  console.log('Halo kamu salah memilih nama dan peran silahkan masukkan lagi')
}