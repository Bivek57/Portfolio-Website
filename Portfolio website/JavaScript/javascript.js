function change() {
    var element=document.getElementById('home');
    element.innerHTML=" 'Our technology forces us to live mythically' - Marshall McLuhan ";
    element.style.color= "black";}/*Using JavaScript to dynamically change the Quote in homepage*/

    function validateform(){  /*function to validate form*/
        var fname = document.forms[ "Contact"]["firstname"].value;
        var lname = document.forms["Contact"]["lastname"].value;
        var email  =document.forms["Contact"]["emailID"].value;
        var message = document.forms ["Contact"]["feedback"].value;
        if(fname=="" || lname=="" || email=="" || message=="")
        {
            alert("Please fill the form properly");
            }
        else{
            alert("Thank you");
        }
        }