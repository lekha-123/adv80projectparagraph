function getparagraph ()
{
    var inputs=[]
    for (i=1;i<7;i++)
    {
inputs.push(document.getElementById("textinput"+i). value);
    }
    inputs.join(".");
    document.getElementById("showparagraph").innerHTML=inputs.join(".");
}
function getparagraph1 ()
{
    var inputs1=[]
    for (i=1;i<7;i++)
    {
inputs1.push(document.getElementById("textinput1"+i). value);
    }
    inputs1.join(".");
    document.getElementById("showparagraph1").innerHTML=inputs1.join(".");
}