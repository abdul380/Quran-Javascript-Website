
document.getElementById("islam").innerHTML = "<button class=\"button whiteButton\">" + islam[islamNumber].title+"</button> <button id=\"EnglishTransliteration\" class=\"button skyBlueButton\" type=\"button\" onclick=\"toggleEnglishTransliteration()\">" + englishTransliteration2 + "</button><br><br>" + islam[islamNumber].text;

var previousIslamPage = "";
var nextIslamPage = "";


if (islamNumber > 0)
{
previousIslamPage = "<a href=\"" +islam[islamNumber-1].title.replace(/ /g,"-") + ".html\" class=\"button skyBlueButton\">" + islam[islamNumber-1].title + "</a> ";    
}

if (islamNumber < 2)
{
nextIslamPage = "<a href=\"" + islam[islamNumber+1].title.replace(/ /g,"-") + ".html\" class=\"button skyBlueButton\">" + islam[islamNumber+1].title + "</a>";    
}


document.getElementById("islamPage").innerHTML = "<br>" +previousIslamPage + nextIslamPage;

