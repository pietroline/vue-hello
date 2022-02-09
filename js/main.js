

//dichiaro costante globale in quanto ho necessità di precaricare la foto all'avvio della pagina 
//e inoltre inserire la stessa foto random generata sia come prima foto sia come riferimento al arrayImg in posizione 0
const primaFoto = "https://picsum.photos/500";


const vue = new Vue(
    {
        el: "#root",
        data:{
            testo: "Foto in vacanza",
            indice: 0,
            arrayImg: [primaFoto],
            img: primaFoto,
        },
        methods:{
            indietro: function(){

                if(this.indice != 0){
                    //decremento indice
                    this.indice--;
                    console.log(`Indice in cui mi trovo: ${this.indice}`);

                    //correggo la chiave img aggiornando il suo valore
                    this.img = this.arrayImg[this.indice];


                }
 
            },

            avanti: function(){

                //incremento indice
                this.indice++;
                console.log(`Indice in cui mi trovo: ${this.indice}`);

                //solo se il nuovo indice è uguale alla dimensione dell'array aggiungo una nuova foto all'array
                //altrimnti non è necessario aggiungere nuovi elementi all'array ma aumentare solo l'indice, come fatto qualche riga prima
                if(this.indice == this.arrayImg.length){

                    //calcolo i pixel aumentati di indice, al fine di cambiare la dimensione dell'img 
                    //e quindi fare una nuova richiesta a https://picsum.photos/
                    //se i pixel fossero fissi, il risultato sarebbe che non verrebbe effettuato una nuova richeista 
                    //a https://picsum.photos/ e quindi ci sarebbe sempre la stessa foto
                    const pixel = 500 + this.indice;
                    this.arrayImg.push(`https://picsum.photos/` + pixel);
                    console.log(this.arrayImg);
                }

                
                //eventualmente correggo la chiave img aggiornando il suo valore
                this.img = this.arrayImg[this.indice];

            },
            
        }
    }
);





