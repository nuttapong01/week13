// let num ="ome";
// console.log(num);
// document.getElementById("hContent").innerHTML=num;
let  ome = prompt("Please enter your ome: ");
if(ome>=80 && ome<=100)
{
    console.log("Grade A")
    alert(ome + "= Grade A")
    document.getElementById("hContent").innerHTML="Grade A";
}
else if(ome>=70 && ome<=80)
{
    console.log("Grade B");
    alert(ome + "= Grade B")
    document.getElementById("hContent").innerHTML="Grade B";
}
else if(ome >= 60 && ome <= 70)
{
    console.log("Grade C");
    alert(ome + " = Grade C" )
    document.getElementById("hContent").innerHTML="Grade C";
}
else if(ome >= 50 && ome <= 60)
{
    console.log("Grade D");
    alert(ome + " = Grade D" )
    document.getElementById("hContent").innerHTML="Grade D";
}
else if(ome >= 0 && ome <= 50)
{
    console.log("Grade F");
    alert(ome + " = Grade F" )
    document.getElementById("hContent").innerHTML="Grade F";
}
else{
    console.log("END")
    alert(ome + "= Error")
    document.getElementById("hContent2").innerHTML="END";
}
    
