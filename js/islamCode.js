
var islamCategory = document.getElementById("islamCategory");
var islamSubCategory = document.getElementById("islamSubCategory");
var islamSubCategory2 = document.getElementById("islamSubCategory2");


function searchIslam()
{
    if(islamSubCategory.value.length < 4)
    {
    window.location.assign(islamCategory.value+"/"+islamCategory.value+".html");
    }
	else if(islamSubCategory2.value.length < 4)
    {
    window.location.assign(islamCategory.value+"/"+islamSubCategory.value+".html");
    }
}

function changeIslamSubCategory()
{
    if (islamCategory.value == "Strict-Monotheism")
    {
    islamSubCategory.required = false;
    islamSubCategory.style.display = "none";
    }
    else if (islamCategory.value == "Bravery")
    {
    islamSubCategory.style.display = "inline-block";
    islamSubCategory.required = true;
    islamSubCategory.size = "2";
    islamSubCategory.innerHTML = "<option value=\"Superiority\">Superiority</option><option value=\"Repentance\">Repentance</option>";        
    }
    else if (islamCategory.value == "Prayers")
    {
    islamSubCategory.style.display = "inline-block";
    islamSubCategory.required = true;
    islamSubCategory.size = "2";
    islamSubCategory.innerHTML = "<option value=\"The-Opening\">The Opening</option>";
    }
    else if (islamCategory.value == "Believers")
    {
    islamSubCategory.style.display = "inline-block";
    islamSubCategory.required = true;
    islamSubCategory.size = "2";
    islamSubCategory.innerHTML = "<option value=\"Believers-who-Benefit-in-Quran\">Who Benefit in Quran</option>";        
    }
    else if (islamCategory.value == "Disbelievers")
    {
    islamSubCategory.style.display = "inline-block";
    islamSubCategory.required = true;
    islamSubCategory.size = "3";
    islamSubCategory.innerHTML = "<option value=\"Disbelievers-whose-heart-is-astray\">Whose heart is astray</option><option value=\"Disbelievers-who-are-Transgressors\">Who are Transgressors</option>";        
    }
}

function changeIslamSubCategory2()
{

}
