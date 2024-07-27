let click= document.getElementById("two");
            function openit(){
                click.classList.add("open-it");
            }
            function closeit(){
                click.classList.remove("open-it");
            } 
            function validation(){
        if(document.formfill.NAME.value==""){
            document.getElementById("result").innerHTML="Enter Name*";
            return false;
        }
        else if(document.formfill.NAME.value.length<10){
            document.getElementById("result").innerHTML="NAME Atleast 10 characters*";
            return false;
        }
        else if(document.formfill.EMAIL.value==""){
            document.getElementById("result").innerHTML="Enter Your Email(eg: abc@gmail.com)*";
            return false;
        }
        else if(document.formfill.text.value==""){
            document.getElementById("result").innerHTML="Enter message*";
            return false;
        }
        
    }
 let popup= document.getElementById("popup");
        function openpopup(){
            popup.classlist.add("open-popup");
        }
        function closepopup(){
            popup.classlist.remove("open-popup");
        } 