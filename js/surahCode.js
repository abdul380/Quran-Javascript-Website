for (var i=0;i<114;i++)
    {
    document.getElementById("surah").innerHTML += "<a href=\"" + (i+1) + ".html\" class=\"button skyBlueButton\">" + (i + 1) + ". " +  surah[i].englishTransliteration + " (" + surah[i].ayat +" verses)</a>";
    } 
    
function changeMaximumAyat()
{
document.getElementById("ayat#").max = surah[(document.getElementById("surah#").value-1)].ayat;
}
