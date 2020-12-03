
function Cabbar(musYil,Model,Age,Color) {
        if(musYil>=5){
        console.log("Aracinizin her turlu bakimi yapilacaktir.");
    }else if(Model == "BMW"){
        if(Age>=2020 && Color== "Siyah"){
            console.log("2020 Model BMW aracinizinbakimi yapilacaktir");
        }else if(Age>2010 && Age<2019){
            if(Color=="Kirmizi"){
                console.log("Kirmizi BMW nizin bakimi yapilacaktir.");
            }
        }
            }else if(Model=="Audi"){
                if((Age>2005 && Age<2010) || (Age>2014 && Age<2020)){
                    console.log("Belirtilen yillar cikisli Audi aracinizin bakimlari yapilacaktir.");
        } } else if(Model == "VW"){
            if(Age>2001 && Age<2018){
                if(Color=="Siyah"){
                    console.log("Belirtilen yillardaki siyah Audi aracinizin bakimi yapilacaktir.");
                
            }
        }
    }
}
Cabbar(3,"Audi",2017,"Siyah");