function goSurah()
{
window.location.assign(document.getElementById("surah#").value+".html#"+document.getElementById("ayat#").value);    
}

var islamMenu = "";
var quranMenu = "";
var quranMenu2 = "";
var translatorMenu = "";

var site = "";
var surahSite = window.location.pathname.substr(window.location.pathname.lastIndexOf("/")+1).replace(".html","");

if (window.location.pathname.indexOf("index.html") != -1)
{
//islamMenu = "<form action=\"javascript:searchIslam()\"><select id=\"islamCategory\" onchange=\"changeIslamSubCategory()\" size=\"3\" required><option value=\"Strict-Monotheism\">Strict Monotheism</option><option value=\"Righteousness\">Righteousness</option><option value=\"Sincerity\">Sincerity</option></select><select id=\"islamSubCategory\" onchange=\"changeIslamSubCategory2()\" style=\"display:none\"></select><select id=\"islamSubCategory2\" style=\"display:none\"></select> &nbsp;<input class=\"icon2\" type=\"image\" src=\"img/search.png\" alt=\"Search\"></form>";
    
islamMenu = "<a href=\"" + site + "Strict-Monotheism.html\" class=\"button skyBlueButton\">Strict Monotheism</a> <a href=\"" + site + "Righteousness.html\" class=\"button skyBlueButton\">Righteousness</a> <a href=\"" + site + "Sincerity.html\" class=\"button skyBlueButton\">Sincerity</a>";
}

//<option value=\"Bravery\">Bravery</option><option value=\"Believers\">Believers</option><option value=\"Disbelievers\">Disbelievers</option><option value=\"Quran\">Quran</option><option value=\"Quranic Narrations\">Quranic Narrations</option><option value=\"Quranic Knowledge\">Quranic Knowledge</option><option value=\"Prayers\">Prayers</option>

else if ((window.location.pathname.indexOf("quran.html") != -1) || (surahSite < 115))
{
quranMenu = "<br><form action=\"javascript:goSurah()\">Surah #: <input type=\"number\" id=\"surah#\" min=\"1\" max=\"114\" value=\"" + (surahNumber + 1) + "\" maxlength=\"3\" required size=\"3\" onchange=\"changeMaximumAyat()\"> Ayat #: <input type=\"number\" id=\"ayat#\" min=\"1\" max=\"" + surah[surahNumber].ayat + "\" value=\"1\" maxlength=\"3\" required=\"1\" size=\"3\"> &nbsp;<input class=\"icon\" type=\"image\" src=\"" + site + "img/search.png\" alt=\"Go\"></form>";

    if (surahSite < 115)
    {
    quranMenu2 = "<button id=\"toggleArabic\" class=\"button skyBlueButton\" type=\"button\" onclick=\"toggleArabic()\">Hide Arabic Text</button> <button id=\"toggleEnglishTransliteration\" class=\"button skyBlueButton\" type=\"button\" onclick=\"toggleEnglishTransliteration()\">Show Transliteration</button> <button id=\"toggleEnglish\" class=\"button skyBlueButton\" type=\"button\" onclick=\"toggleEnglish()\">Hide English Text</button><br>";
    }
}
else if (window.location.pathname.indexOf("translator.html") != -1)
{
translatorMenu = "<br>As you can see in this site's header, we have our own private English translation of Quran.<br><br>We find Ali Quli Qarai's translation has less incorrect translations of ambiguous arabic words that downgrading strict monotheism.<br><br>This project is in no way affiliated with, authorized, maintained, sponsored or endorsed by <a href=\"http://tanzil.net/\">Tanzil.net</a> or any of its affiliates or subsidiaries. This is an independent and unofficial library.<br><br>By using this Quran text from <a href=\"http://tanzil.net/\">Tanzil.net</a> you agree to Tanzil's terms of use:<br><br>```<br>#  - This quran text is distributed under the terms of a<br>#    Creative Commons Attribution 3.0 License.<br>#<br>#  - Permission is granted to copy and distribute verbatim copies<br>#    of this text, but CHANGING IT IS NOT ALLOWED.<br>#<br>#  - This quran text can be used in any website or application,<br>#    provided its source (Tanzil.net) is clearly indicated, and<br>#    a link is made to http://tanzil.net to enable users to keep<br>#    track of changes.<br>#<br>#  - This copyright notice shall be included in all verbatim copies<br>#    of the text, and shall be reproduced appropriately in all files<br>#    derived from or containing substantial portion of this text.";
}
else if ((window.location.pathname.indexOf("Strict-Monotheism.html") != -1) || (window.location.pathname.indexOf("Righteousness.html") != -1) || (window.location.pathname.indexOf("Sincerity.html") != -1))
{
}
else
{
site = "../";
}

document.getElementById("menu").innerHTML = "<div class=\"ayatBox\">I seek protection for ALLAH from accursed devil<br><br>In the Name for ALLAH the Most Beneficent, the Most Merciful</div><br><a href=\"" + site + "index.html\" class=\"button skyBlueButton\">Home</a> <a href=\""+site+"quran.html\" class=\"button skyBlueButton\">Quran</a> <a href=\""+site+"translator.html\" class=\"button skyBlueButton\">Translator</a><form action=\"javascript:searchAyat()\">Search by letters in Quran <input type=\"text\" id=\"searchAyat\" minlength=\"3\" maxlength=\"45\" value=\"\" required> &nbsp;<input class=\"icon\" type=\"image\" src=\"" + site + "img/search.png\" alt=\"Search\"></form>" + quranMenu + quranMenu2 + translatorMenu + "<div id=\"ayat\"></div><div id=\"surah\"></div><div id=\"surahPage\"></div><div id=\"islam\"></div><div id=\"islamPage\"></div><br>" + islamMenu;

var arabic = 1;
var english = 1;
var arabicText = "";
var englishText = "";
var n=0;
var runOnce = 0;
var n2=0;
var i=0;
var n3=0;
var runOnce2=0;
var result = 0;
var resultCount=0;
var runOnce3=0;
var ayat = document.getElementById("ayat");

function searchAyat()
{
arabic=1;
english=1;
searchAyat2 = document.getElementById("searchAyat").value.split(" ");
ayat.innerHTML = "";

for (i=surahNumber;i<114;i++)
{

    if ((runOnce2==1) && (i==surahNumber))
    {
    i++;
    }
    

        
    for (var i2=0;i2<surah[i].ayat;i2++)
    {
arabicText="";
englishText=englishQuran[i].ayat[i2].text;
        
        for (var j=0;j<searchAyat2.length;j++)
        {
        n = englishQuran[i].ayat[i2].text.toLowerCase().indexOf(searchAyat2[j].toLowerCase());
        
            for (var k=0;k<j;k++)
            {
                if (searchAyat2[k]==searchAyat2[j])
                {
                n=englishQuran[i].ayat[i2].text.toLowerCase().indexOf(searchAyat2[j].toLowerCase(),(n+1));
                }
            }
            
        if (n != -1)
        {

        n2++;

        if (n2 == searchAyat2.length)
        {    
        result=1;
        resultCount++;
        
        if (i!= surahNumber)
        {
        arabic=0;
        english=0;
        }
        else
        {
        if (runOnce3==0)
        {
        ayat.innerHTML += "<button id=\"bsurah" + i+"\" type=\"button\" class=\"button whiteButton\" onclick=\"searchDifferentAyat('" + i + "')\" class=\"button\">" + (i+1) + ". Surah " + surah[i].englishTransliteration + "</button><div style=\"display:inline-block\" id=\"surah" + i + "\"></div>";   
        runOnce3=1;
        }    
        }
        
        if (arabic == 1)
        {
        arabicText = arabicQuran[i].ayat[i2].text+"<br><br>";
        }
        
        if (i==surahNumber)
        {
 	document.getElementById("surah" + i).style.display="block";
        document.getElementById("surah"+i).innerHTML += "<br><div class=\"ayatBox\"><a class=\"link\" href=\"" + surah[i].number + ".html?v=2#" + (i2+1) + "\">(" + (i+1)+":"+ (i2+1) + ")</a> &nbsp;" + arabicText+englishText + "</div><br>"; 
        }
        

        }
        }
        }
        n=0;
        n2=0;
    }    

    if (resultCount > 0)
    {

    	if (i != surahNumber)
	{
    ayat.innerHTML += "<button id=\"bsurah"+i+"\" type=\"button\" class=\"button skyBlueButton\" onclick=\"searchDifferentAyat('" + i + "')\" class=\"button\">" + (i+1) + ". Surah " + surah[i].englishTransliteration + " (" + resultCount + " results) &nbsp;<i id=\"asurah" + i + "\" class=\"arrow downArrow\"></i></button><div style=\"display:inline-block\" id=\"surah" + i + "\"></div>"; 
    	}
    	else
    	{
    	document.getElementById("bsurah"+i).innerHTML += " (" + resultCount + " results) &nbsp;<i id=\"asurah" + i + "\" class=\"arrow upArrow\">";
    	}
    }
    
    resultCount = 0;
    
    if ((surahNumber != 0) && (runOnce2==0))
    {
    i=-1;
    runOnce2=1;
    }
}
runOnce2=0;
    if (result==0)
    {
    ayat.innerHTML = "<br><div class=\"ayatBox\">No any result</div><br>";
    }
result=0;
n3=0;
runOnce3=0;
}

function searchDifferentAyat(sda)
{
english =1;
arabic=1;
var surahSda = document.getElementById("surah"+sda);

	if (document.getElementById("surah" + sda).innerHTML.length < 5)
	{
document.getElementById("bsurah" + sda).className = document.getElementById("bsurah" + sda).className.replace("skyBlueButton","whiteButton");
document.getElementById("asurah" + sda).className = document.getElementById("asurah" + sda).className.replace("downArrow","upArrow");
	i = sda - 0;
	
    for (var i2=0;i2<surah[i].ayat;i2++)
    {
arabicText="";
englishText=englishQuran[i].ayat[i2].text;
        
        for (var j=0;j<searchAyat2.length;j++)
        {
        n = englishQuran[i].ayat[i2].text.toLowerCase().indexOf(searchAyat2[j].toLowerCase());
        
            for (var k=0;k<j;k++)
            {
                if (searchAyat2[k]==searchAyat2[j])
                {
                n=englishQuran[i].ayat[i2].text.toLowerCase().indexOf(searchAyat2[j].toLowerCase(),(n+1));
                }
            }
            
        if (n != -1)
        {

        n2++;

        if (n2 == searchAyat2.length)
        {   
         
        if (arabic == 1)
        {
        arabicText = arabicQuran[i].ayat[i2].text+"<br><br>";
        }
        surahSda.style.display = "block";
        
        surahSda.innerHTML += "<div class=\"ayatBox\"><a class=\"link\" href=\"" + (i+1) + ".html#" + (i2+1) + "\">(" + (i+1) +":"+ (i2+1) + ")</a> &nbsp;" + arabicText+englishText + "</div><br>"; 

        }
        }
        }
        n=0;
        n2=0;
    }
 n3=0;
}
else
{
document.getElementById("bsurah" + sda).className = document.getElementById("bsurah" + sda).className.replace("whiteButton","skyBlueButton");
document.getElementById("asurah" + sda).className = document.getElementById("asurah" + sda).className.replace("upArrow","downArrow");
surahSda.innerHTML = "";
surahSda.style.display = "inline-block";
}
}


 
