function hesapla()
{
    let veri = Number(document.querySelector("#sayı").value);
    let faktöriyel=1;
    
    if(veri >= 0)
    {
        for (i =1; i<=veri; i++)
        {
            faktöriyel = faktöriyel * i;
        }        
    }
    else
    {
        window.alert("Lütfen Pozitif Bir Sayı Giriniz!")
        return(0);
    }
    window.alert(veri + " Sayısının Faktöriyeli:  " + faktöriyel );
}

// Direkt dosya yolunu göstererekte olay fonksiyona bağlanabiliyormuş!
 document.querySelector("#button").onclick = hesapla;