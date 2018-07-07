function konversiMenit(menit) {

// y = data number di rubah menjadi string

var y =  menit.toString()
var hakhir = y[y.length -1]// hakhir adalah nilai terakhir dari data string
var z = Number(y)//z = menit data dirubah menjadi number lagi(z)

var angka = z/60
var jam   = Math.floor(angka)// jam adalah angka dari 1-12
var x = menit/60
// k adalah nilai Mathfloor dari x
var k = Math.floor(x)
var puluhan = k

var j = z - (60 * k)//j adalah hasil nilai dari pembagia floior
var tengah = z - z

if ( j < 10) {
menit =jam +':'+ tengah+ j
}else{
 menit = jam + ':' + j

}
return menit
