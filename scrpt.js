//membuat objek angkot
function Angkot(sopir,trayek,kas,penumpang) {
    this.sopir=sopir;
    this.trayek=trayek;
    this.kas=kas;
    this.penumpang=penumpang;

    this.penumpangNaik=function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
}  
var angkot1 =new Angkot('bayu',['semarang','demak'],[],0 );

var angkot2=new Angkot('sena',['bandung','jakarta'],[],0);