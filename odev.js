
function burcHesap(month,day){
    if((month==1&&day>=12)||(month==2&&day<=19)){
        console.log("Burcunuz Kova Burcudur.");}
    else if((month==2&&day>=20)||(month==3&&day<=20)){
        console.log("Burcunuz Balik Burcudur.");}
        else if((month==3&&day>=21)||(month==4&&day<=20)){
            console.log("Burcunuz Koc Burcudur.");}
            else if((month==4&&day>=21)||(month==5&&day<=21)){
                console.log("Burcunuz Boga Burcudur.");}
                else if((month==5&&day>=22)||(month==6&&day<=22)){
                    console.log("Burcunuz Ikizler Burcudur.");}
                    else if((month==6&&day>=23)||(month==7&&day<=22)){
                        console.log("Burcunuz Yengec Burcudur.");}
                        else if((month==7&&day>=23)||(month==8&&day<=22)){
                            console.log("Burcunuz Aslan Burcudur.");}
                            else if((month==8&&day>=23)||(month==9&&day<=22)){
                                console.log("Burcunuz Basak Burcudur.");}
                                else if((month==9&&day>=23)||(month==10&&day<=22)){
                                    console.log("Burcunuz Terazi Burcudur.");}
                                    else if((month==10&&day>=23)||(month==11&&day<=21)){
                                        console.log("Burcunuz Akrep Burcudur.");}
                                        else if((month==11&&day>=22)||(month==12&&day<=21)){
                                            console.log("Burcunuz Yay Burcudur.");}
                                            else if((month==12&&day>=22)||(month==1&&day<=21)){
                                                console.log("Burcunuz Oglak Burcudur.");}
                                                else{
                                                    console.log("Burcunuz yoktur.");
                                                }
                                            }
       burcHesap(8,15);                                     