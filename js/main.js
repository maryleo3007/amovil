$(function ()  {
  var myform = $("form#contactForm");
  myform.submit(function(event){
    event.preventDefault();
    //
    var service_id = "default_service";
    var template_id = "template_7YYYcFVF";
    myform.find("button").text("Sending...");
    emailjs.sendForm(service_id,template_id,"myform")
    .then(function(){
      alert("Sent!");
      myform.find("button").text("Send");
    }, function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      myform.find("button").text("Send");
    });
    return false;
  });

});
