var nama = '';
var peran ='';

if (nama ==='' && peran ==='' ){
  console.log('kamu harus mengisi nama dulu!');
}
  else if(nama ==='irwan'&& peran===''){
    console.log('Hallo irwan,,, pilih peran mu sekarang! ');

  }
  else if (nama ==='dwi'&& peran ==='batman'){
  console.log('Selamat datang di Dunia Proxytia, dwi');
  console.log('kamu telah memilih peran menjadi batman ,ya');
  }
  else if (nama ==='sulis' && peran ==='superman'){
  console.log('Selamat datang di Dunia Proxytia, sulis');
  console.log('kamu telah memilih peran menjadi superman ,ya');
  }
  else if (nama ==='hafiz'|| peran ==='gatot kaca'){
  console.log('Selamat datang di Dunia Proxytia, hafiz');
  console.log('kamu telah memilih peran menjadi gatot kaca,ya');

  }
  else if (nama ===''&& peran ==='batman'){
    console.log('kamu belum mememasukan nama');
  }
   else if (nama ===''&& peran ==='superman'){
    console.log('kamu belum memasukan nama');
  }
   else if (nama ===''&& peran ==='gatotkaca'){
    console.log('kamu belum memasukan nama');
  }
  else if (nama !==''&& peran ==='batman'){
    console.log(' hallo kamu sudah memilih peran mu ya sebagai batman ya');
}
else if (nama !==''&& peran ==='superman'){
    console.log(' hallo kamu sudah memilih peran mu ya sebagai superman ya');
}
else if (nama !==''&& peran ==='gatotkaca'){
    console.log(' hallo kamu sudah memilih peran mu ya sebagai gatotkaca ya');
}
else if(nama !== '' && peran ===''){
  console.log('hallo kamu belum memilih peran ya');

}
else if(nama !=='' && peran !== '' ){
console.log('haaii,hanya ada 3 peran disini yaitu Batman ,Superman, gatotkaca ');
}
else if(nama ==='' && peran !== '' ){
console.log('haaii,hanya ada 3 peran disini yaitu Batman ,Superman, gatotkaca ');
console.log('jangan lupa masukan nama ya');
}
