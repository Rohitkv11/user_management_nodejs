$(document).ready(function(){
    $("#registerform").validate({
           rules:{
               name:{
                   required:true,
                   minlength:4
               },

               email:{
                required:true,
                email:true
               },

               password:{
                required:true,
                minlength: 5
               },

               confirm_password: {
                required: true,
                minlength: 5,
                equalTo:"#password"
            }
            
           },
     
    })
})  
$(document).ready(function(){
    $("#login_form").validate({
           rules:{
            email:{
                required:true,
                email:true
               },

               password:{
                required:true,
                minlength: 5
               },

              
            
           },
     
    })
})    