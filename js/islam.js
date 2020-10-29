

if (window.location.href.indexOf("?t=s") != -1)
{
englishTransliteration2="Hide Transliteration";
englishTransliteration = 1;
string = "<br><br>"+ transliterationQuran[0].aya[0].text;
string2 = "<br><br>"+ transliterationQuran[16].aya[109].text;
string3 = "<br><br>"+ transliterationQuran[5].aya[161].text;
string4 = "<br><br>"+ transliterationQuran[48].aya[12].text;
string5 = "<br><br>"+ transliterationQuran[3].aya[42].text;
string6 = "<br><br>"+ transliterationQuran[17].aya[22].text;
string7 = "<br><br>"+ transliterationQuran[17].aya[23].text;
string8 = "<br><br>"+ transliterationQuran[5].aya[127].text;
string9 = "<br><br>"+ transliterationQuran[10].aya[105].text;
string10 = "<br><br>"+ transliterationQuran[10].aya[106].text;
string11 = "<br><br>"+ transliterationQuran[10].aya[107].text;
string12 = "<br><br>"+ transliterationQuran[35].aya[81].text;
}
else
{
englishTransliteration2="Show Transliteration";
}

for (i=62;i<76;i++)
{
    
    if (englishTransliteration == 1)
    {
    string = "<br><br>"+ transliterationQuran[24].aya[i].text;
    }
righteousness += "<div class=\"ayatBox\"><a href=\"25.html#" + (i+1) + "\" class=\"link\">(25:" + (i+1) + ")</a> &nbsp;" + arabicQuran[24].ayat[i].text+ string + "<br><br>"+ englishQuran[24].ayat[i].text + "</div><br>";
}

for (i=0;i<7;i++)
{
    
    if (englishTransliteration == 1)
    {
    string = "<br><br>"+ transliterationQuran[0].aya[i].text;
    }
theOpening += "<div class=\"ayatBox\"><a href=\"1.html#" + (i+1) + "\" class=\"link\">(1:" + (i+1) + ")</a> &nbsp;" + arabicQuran[0].ayat[i].text+ string + "<br><br>"+ englishQuran[0].ayat[i].text + "</div><br>";
}

for (i=92;i<95;i++)
{
    if (englishTransliteration == 1)
    {
    string = "<br><br>"+ transliterationQuran[19].aya[i].text;
    }
destiny += "<div class=\"ayatBox\"><a href=\"19.html#" + (i+1) + "\" class=\"link\">(1:" + (i+1) + ")</a> &nbsp;" + arabicQuran[19].ayat[i].text+ string + "<br><br>"+ englishQuran[19].ayat[i].text + "</div><br>";
    
}

for (i=67;i<71;i++)
{
    if (englishTransliteration == 1)
    {
    string = "<br><br>"+ transliterationQuran[24].aya[i].text;
    }
repentance += "<div class=\"ayatBox\"><a href=\"2.html#" + (i+1) + "\" class=\"link\">(2:" + (i+1) + ")</a> &nbsp;" + arabicQuran[24].ayat[i].text+ string+"<br><br>"+ englishQuran[24].ayat[i].text +"</div><br>";   
}

for (i=0;i<5;i++)
{
    if (englishTransliteration == 1)
    {
    string = "<br><br>"+ transliterationQuran[1].aya[i].text;
    }
believers += "<div class=\"ayatBox\"><a href=\"2.html#" + (i+1) + "\" class=\"link\">(2:" + (i+1) + ")</a> &nbsp;" + arabicQuran[1].ayat[i].text+ string+"<br><br>"+ englishQuran[1].ayat[i].text +"</div><br>";   
}

for (i=5;i<20;i++)
{
    if (englishTransliteration == 1)
    {
    string = "<br><br>"+ transliterationQuran[1].aya[i].text;
    }
disbelievers += "<div class=\"ayatBox\"><a href=\"2.html#" + (i+1) + "\" class=\"link\">(2:" + (i+1) + ")</a> &nbsp;" + arabicQuran[1].ayat[i].text+ string+"<br><br>"+ englishQuran[1].ayat[i].text +"</div><br>";   
}

for (i=20;i<25;i++)
{
    if (englishTransliteration == 1)
    {
    string = "<br><br>"+ transliterationQuran[1].aya[i].text;
    }
humble += "<div class=\"ayatBox\"><a href=\"2.html#" + (i+1) + "\" class=\"link\">(2:" + (i+1) + ")</a> &nbsp;" + arabicQuran[1].ayat[i].text+ string+"<br><br>"+ englishQuran[1].ayat[i].text + "</div><br>";   
}

for (i=25;i<29;i++)
{
    if (englishTransliteration == 1)
    {
    string = "<br><br>"+ transliterationQuran[1].aya[i].text;
    }
transgressors += "<div class=\"ayatBox\"><a href=\"2.html#" + (i+1) + "\" class=\"link\">(2:" + (i+1) + ")</a> &nbsp;" + arabicQuran[1].ayat[i].text+ string+"<br><br>"+ englishQuran[1].ayat[i].text + "</div><br>";   
}

var islam = [{"title":"Strict Monotheism","category":"Strict-Monotheism","text":"<div class=\"ayatBox\"><a href=\"17.html#110\" class=\"link\">(17:110)</a> &nbsp;"+arabicQuran[16].ayat[109].text+string2+"<br><br>"+ englishQuran[16].ayat[109].text+"</div><br><div class=\"ayatBox\"><a href=\"6.html#162\" class=\"link\">(6:162)</a> &nbsp;"+arabicQuran[5].ayat[161].text+string3+"<br><br>"+ englishQuran[5].ayat[161].text+"</div><br><div class=\"ayatBox\">All creations cannot truly know ALLAH Who can destroy any creations</div>"},{"title":"Righteousness","category":"Righteousness","text":righteousness + "<div class=\"ayatBox\"><a href=\"6.html#162\" class=\"link\">(6:162)</a> &nbsp;"+arabicQuran[5].ayat[161].text+string3+"<br><br>"+ englishQuran[5].ayat[161].text+"</div>"},{"title":"Sincerity","category":"Sincerity","text":"<div class=\"ayatBox\"><a href=\"6.html#128\" class=\"link\">(6:128)</a> &nbsp;"+arabicQuran[5].ayat[127].text+string8+"<br><br>"+ englishQuran[5].ayat[127].text+"</div><br><div class=\"ayatBox\"><a href=\"11.html#106\" class=\"link\">(11:106)</a> &nbsp;"+arabicQuran[10].ayat[105].text+string9+"<br><br>"+ englishQuran[10].ayat[105].text+"</div><br><div class=\"ayatBox\"><a href=\"11.html#107\" class=\"link\">(11:107)</a> &nbsp;"+arabicQuran[10].ayat[106].text+string10+"<br><br>"+ englishQuran[10].ayat[106].text+"</div><br><div class=\"ayatBox\"><a href=\"11.html#108\" class=\"link\">(11:108)</a> &nbsp;"+arabicQuran[10].ayat[107].text+string11+"<br><br>"+ englishQuran[10].ayat[107].text+"</div><br><div class=\"ayatBox\"><a href=\"36.html#82\" class=\"link\">(36:82)</a> &nbsp;"+arabicQuran[35].ayat[81].text+string12+"<br><br>"+ englishQuran[35].ayat[81].text+"</div><br><div class=\"ayatBox\"><a href=\"6.html#162\" class=\"link\">(6:162)</a> &nbsp;"+arabicQuran[5].ayat[161].text+string3+"<br><br>"+ englishQuran[5].ayat[161].text+"</div>"}]; 

function toggleEnglishTransliteration()
{
    if (window.location.href.indexOf("?t=s")==-1)
    {
    window.location.assign(islam[islamNumber].title.replace(/ /g,"-")+".html?t=s");
    }
    else
    {
    window.location.assign(islam[islamNumber].title.replace(/ /g,"-")+".html");
    }
}
