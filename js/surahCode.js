for (var i=0;i<114;i++)
    {
    document.getElementById("surah").innerHTML += "<a href=\"" + (i+1) + ".html\" class=\"button skyBlueButton\">" + (i + 1) + ". " +  surah[i].englishTransliteration + " " + surah[i].englishTranslation + " (" + surah[i].ayat +" verses)</a>";
    } 
  
