    
    
    const openNav = () => {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    const closeNav = () => {
      document.getElementById("mySidenav").style.width = "0";
    }


  $(function() {
    
    $('#mySidenav, .icon').on('click', function(e) {
      e.stopPropagation();
    });
  
    $(document).on('click', function (e) {
      closeNav();
    });

    $('#submit-button').click(function(){

      
      let formData = {
        "name": $('#name').val(),
        "email": $('#email').val(),
        "subject": $('#subject').val(),
        "message": $('#message').val()
      }

      $.ajax({
        url: "https://vshabangu-ea4e2.firebaseio.com/contact.json", 
        success: function(result){
          $('#contact-form').html('<h3 class="mdc-typography--headline7">Thanks for getting in touch, you\'ll hear from me soon! &#128578;</h3>')
        },
        error: function(error){
          console.log(error)
        },
        method: "post",
        data: JSON.stringify(formData)
      });
    });

    $('#submit-resume-request').click(function(){

      
      let formData = {
        "email": $('#email').val()
      }

      $.ajax({
        url: "https://vshabangu-ea4e2.firebaseio.com/remume.json", 
        success: function(result){
          $('#submit-resume-request').html('<p class="mdc-typography--headline7">Thank you for your interest. My resume will be sent to your email shortly. &#128578;</p>')
        },
        error: function(error){
          console.log(error)
        },
        method: "post",
        data: JSON.stringify(formData)
      });
    });

  });