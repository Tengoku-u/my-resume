$document.ready(function (){
  $('.submit').click(function (event){
    event.preventDefault()

    var email = $('#email').val()
    var subject = $('#subject').val()
    var message = $('#message').val()
    var statusElm =$('.status')
    statusElm.empty()

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>email is valid</div>')
      
    } else {
      
      statusElm.append('<div>email is not valid</div>')
    }
    if (subject.length < 5) {
      statusElm.append('<div>subject cannot be less than 5</div>')
    } else {
      
      statusElm.append('<div>looking good</div>')
    }
    if (message.length < 5) {
      statusElm.append('<div>message too short</div>')
    } else {
      
      statusElm.append('<div>looking good</div>')
    }

  })
})