

function sendData(){
   let uName= document.getElementById("name").value;
   let contact= document.getElementById("contact").value;
  let remarks=  document.getElementById("remarks").value;


  let gender=document.querySelector('input[name="gender"]:checked');
  let course=document.querySelectorAll('input[name="course"]:checked');

  
  let location= document.getElementById("location").value;

  let courseValue =[];

  for(let i=0 ; i<course.length; i++) {
    courseValue.push(course[i].value);
  }
  document.write(courseValue);

  let output ="Name:" + uName +"\n"+

            "contact:" + contact +"\n"+
            "remarks:" + remarks +"\n"+
            "gender:" + gender.value +"\n"+
            "course:" + courseValue +"\n"+
            "location:" + location +"\n";

            let newWindow =window.open("",'_blank');
            newWindow.document.write("<pre>" + output +"<\pre>");







}