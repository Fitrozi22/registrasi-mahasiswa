class Hitungan{
    constructor (data){
        this.data = data;
    }
    //Asyncronous
    asyncHitungTotalUmur = (data) => {
        return new Promise((resolve, reject)=>{
            this.totalUmur = 0
            for (let i = 0; i < data.length; i++) {
                this.totalUmur += Number(data[i].umur)
                
            } 
            resolve(this.totalUmur)
        })
    }
    asyncHitungTotalSangu = (data) => {
        return new Promise((resolve, reject)=>{
            this.totalSangu = 0
            for (let i = 0; i < data.length; i++) {
                this.totalSangu += Number(data[i].sangu)
                
            } 
            resolve(this.totalSangu)
        })
    }
    hitung_all(){
        Promise.all([this.asyncHitungTotalUmur(this.data), this.asyncHitungTotalSangu(this.data)]).then(
            (result) =>{
                for (let cek of result) {
                    console.log(cek)
                }
                console.log(`selesai`)
            }
        )
    }
}

class Statistik extends Hitungan {
    constructor(data){
        super(data) 
    }
    outputData(){
        console.log(`Total umur ${this.totalUmur}`)
        console.log(`Total sangu ${Math.round(this.totalSangu)}`)
    }
}