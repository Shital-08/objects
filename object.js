//1. Create a Function
function Check(obj1){
  
    obj1.setter = function(){
      console.log(this.name);
      
    };
  }

//2. Delete a Parameter
function Check(obj) {
    delete obj.rollno;
    return obj;
  }

//3. Check whether the Package is Dream Package or not
function Check(obj) {
    if(obj.salary > 500000){
      return "Dream";
    }
    else{
      return "NotDream";
    }
  }

//4. Check whether the Object has a parameter or not
function Check(obj) {
    let size = Object.keys(obj).length;
    if(size > 0){
      return "true";
    }
    else{
      return "false";
    }
  }

//5. Merge the Objects
function Check(obj1,obj2) {
  
    Object.assign(obj1, obj2);
    return obj1;
    
  }

//6. Object Multiplyer
function Check(a,obj) {  
          
    obj.id = obj.id*a;
    obj.houseno = obj.houseno*a;
    return obj;
  }

//7. Find the  sum of Object Members
function Check(obj1) {
  
    return obj1.p1+obj1.p2+obj1.p3;
    
  }

//8. Check whether the Objects are same or not.
function check(obj,a,b) {
    if((obj.name == a) && (obj.id == b)){
      return "true";
    }
    else{
      return "false";
    }
  }