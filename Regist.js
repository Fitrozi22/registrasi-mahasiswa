//TAB Register dan Pendaftar
let data = []
console.log(data)
function submitRegister(){
    let nama = document.getElementById(`inputNama`);
    let umur = document.getElementById(`inputUmur`);
    let sangu = document.getElementById(`inputSangu`);
    let hasil = document.getElementById(`hasil`)

    let totalUmur = 0
    let totalSangu = 0
    let rata_umur = 0
    let rata_sangu = 0

//Cek Input data
    if((nama.value.length) >= 10){
        if(Number(umur.value) >= 25) {
            if(Number(sangu.value) >= 100000 && Number(sangu.value) <= 1000000) {
                data.push({
                    nama : nama.value,
                    umur : umur.value,
                    sangu : sangu.value,
                })
                //List Output data Otomatis muncul 
                const trdel = document.getElementsByTagName(`tbody`)[1]
                trdel.remove()

                tabelList = document.getElementById(`tableList`)
                const tbody = document.createElement(`tbody`)

                for (let i = 0; i < data.length; i++) {
                    const tr = document.createElement(`tr`)
                    
                    const tdNama = document.createElement(`td`)
                    const valueNama = document.createTextNode(data[i].nama) 
                    tdNama.appendChild(valueNama)

                    const tdUmur = document.createElement(`td`)
                    const valueUmur = document.createTextNode(data[i].umur) 
                    tdUmur.appendChild(valueUmur)

                    const tdSangu = document.createElement(`td`)
                    const valueSangu = document.createTextNode(data[i].sangu) 
                    tdSangu.appendChild(valueSangu)

                    tr.appendChild(tdNama)
                    tr.appendChild(tdUmur)
                    tr.appendChild(tdSangu)
                    tbody.appendChild(tr)
                    //Total UMUR
                    totalUmur += Number(data[i].umur)
                    totalSangu += Number(data[i].sangu)
                }

                const stats = new Statistik(data)
                
                //Asyncronous
                stats.hitung_all()
                rata_umur = stats.totalUmur / data.length
                rata_sangu = stats.totalSangu / data.length

                hasil.innerHTML = `Rata - rata umur adalah ${rata_umur} dan rata - rata sangu adalah ${Math.round(rata_sangu)}`
                tabelList.appendChild(tbody)
            } else {
                alert(`Sangu minimal 100 rb dan maksimal 1 juta`)
            }
        } else {
            alert(`Minimal Umur 25 tahun`)
        }
    } else {
        alert(`Nama minimal 10 karakter`)
    }
}



document.getElementById(`tab_register`).style.display = `block`
document.getElementById(`tab_pendaftar`).style.display = `none`

function showRegister() {
    document.getElementById(`tab_register`).style.display = `block`
    document.getElementById(`tab_pendaftar`).style.display = `none`
}
function showPendaftar(){
    document.getElementById(`tab_register`).style.display = `none`
    document.getElementById(`tab_pendaftar`).style.display = `block` 
}

