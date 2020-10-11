
var englishTransliteration = 0;

var surahPage = document.getElementById("surahPage");

surahPage.innerHTML = "";
if (surahNumber != 0)
{
surahPage.innerHTML += "<a href=\"" + (surahNumber) + ".html\" class=\"button skyBlueButton\">" + surah[surahNumber-1].englishTransliteration + "</a> ";
}

if (surahNumber != 113)
{
surahPage.innerHTML += "<a href=\"" + (surahNumber + 2) + ".html\" class=\"button skyBlueButton\">" + surah[surahNumber+1].englishTransliteration + "</a>";    
}

if (window.location.href.indexOf("?arabic=hide") != -1)
{
arabic = 0;
document.getElementById("toggleArabic").innerHTML="Show Arabic Text";
}

if (window.location.href.indexOf("?english=hide") != -1)
{
english = 0;
document.getElementById("toggleEnglish").innerHTML="Show English Text";
}

if (window.location.href.indexOf("t=s") != -1)
{
englishTransliteration = 1;
document.getElementById("toggleEnglishTransliteration").innerHTML="Hide Transliteration Text";
}


function toggleArabic()
{

    
    if (arabic==1)
    {
    if (englishTransliteration==1)
    {
    string = window.location.href.slice(-3);
    string = "&"+string;
    }

    window.location.assign((surahNumber+1)+".html?arabic=hide"+string);
    }
    else
    {
    if (englishTransliteration==1)
    {
    string = window.location.href.slice(-3);
    string = "?"+string;
    }
    window.location.assign((surahNumber+1)+".html"+string);
    }
}

function toggleEnglish()
{

    
    if (english==1)
    {
    if (englishTransliteration==1)
    {
    string = "&" + window.location.href.slice(-3);
    }
    window.location.assign((surahNumber+1)+".html?english=hide"+string);
    }
    else
    {
    if (englishTransliteration==1)
    {
    string = "?"+window.location.href.slice(-3);
    }
    window.location.assign((surahNumber+1)+".html"+string);
    }
}

function toggleEnglishTransliteration()
{
    if (englishTransliteration==1)
    {
    window.location.assign(window.location.pathname.slice(0,-4));
    }
    else
    {
    if ((english) == 1 && (arabic == 1))
    {
    string = "?"
    }
    else
    {
    string = "&"
    }
    window.location.assign(window.location.pathname+string+"t=s");
    }
}

ayat.innerHTML = "<button class=\"button whiteButton\">Surah "+surah[surahNumber].englishTransliteration+"</button><br><br>";
var englishTransliterationText = "";
for (var q=0;q<surah[surahNumber].ayat;q++)
{
    if (arabic == 1)
    {
    arabicText = arabicQuran[surahNumber].ayat[q].text+"<br><br>";
    }
    if (english == 1)
    {
    englishText = englishQuran[surahNumber].ayat[q].text+"<br><br>";
    }
    if (englishTransliteration == 1)
    {
    englishTransliterationText = transliterationQuran[surahNumber].aya[q].text+"<br><br>";
    }
ayat.innerHTML += "<div id=\"" + (q+1) + "\" class=\"ayatBox\">(" + (surahNumber+1)+":"+ (q+1) + ") "+arabicText+englishTransliterationText + englishText + "</div><br>";    
}


