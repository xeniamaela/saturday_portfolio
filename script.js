window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
action: "https://formspree.io/f/xwkazykw",
title: "How can we help?",
fields: [
    { 
      type: "text", 
      label: "Name:", 
      name: "senderName",
      required: true
    },
    { 
      type: "email", 
      label: "Email:", 
      name: "email",
      required: true
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
    },
    { type: "submit" }      
  ]
});


function toggleMobileMenu(){
  document.querySelector('#menu').classList.toggle('active')
  document.querySelector('.mobile-bar').classList.toggle('active')
}