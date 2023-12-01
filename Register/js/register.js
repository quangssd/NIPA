const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const validatePassword = (password) => {
    return password.match(
      /^(?=.*\d).{8,}$/
    )
  }
  // const validateNickname = (nickname) => {
  //   return nickname.match(
  //     /^(?=.{1,5}$)$/
  //   )
  // }
  const validateemail = () => {
    const $resultemail = $('#resultemail');
    const email = $('#user-email').val();
    $resultemail.text('');
  
    if(validateEmail(email)){
      $resultemail.text(email + ' is valid.');
      $resultemail.css('color', 'green');
    } else{
      $resultemail.text(email + ' is invalid.');
      $resultemail.css('color', 'red');
    }
    return false;
  }
  
  //$('#user-email').on('input', validateemail);

  const validatepassword = () => {
    const $resultpassword = $('#resultpassword');
    const $password = $('#user-password').val();
    $resultpassword.text('');
  
    if(validatePassword($password)){
      $resultpassword.text('Password is valid.');
      $resultpassword.css('color', 'green');
    } else{
      $resultpassword.text('Password is invalid.');
      $resultpassword.css('color', 'red');
    }
    return false;
  }
  
  //$('#user-password').on('input', validatepassword);



  const validateconfirmpassword = () => {
    const $resultpasswordconfirm = $('#resultconfirmpassword');
    const $password = $('#user-password').val();
    const $confirmpassword = $('#user-password-confirm').val();
    $resultpasswordconfirm.text('');
  
    if($password == $confirmpassword){
      $resultpasswordconfirm.text('password and confirm password' + ' is same.');
      $resultpasswordconfirm.css('color', 'green');
    } else{
      $resultpasswordconfirm.text('password and confirm password'+ ' is not same.');
      $resultpasswordconfirm.css('color', 'red');
    }
    return false;
  }
  //$('#user-password-confirm').on('input', validateconfirmpassword);

  // const validatenickname = () => {
  //   const $result = $('#resultnickname');
  //   const nickname = $('#user-nickname').val();
  //   $result.text('');
  
  //   if(validateNickname(nickname)){
  //     $result.text(nickname + ' is valid.');
  //     $result.css('color', 'green');
  //   } else{
  //     $result.text(nickname + ' is invalid.');
  //     $result.css('color', 'red');
  //   }
  //   return false;
  // }
  
  // $('#user-nickname').on('input', validatenickname);

  function registeruser(){
    const $resultemail = $('#resultemail');
    const email = $('#user-email').val();
    const name = $('#user-nickname').val();
    //$resultemail.text('');
  
    if(validateEmail(email)){
      $resultemail.text(email + ' is valid.');
      $resultemail.css('color', 'green');
    } else{
      $resultemail.text(email + ' is invalid.');
      $resultemail.css('color', 'red');
    }
    const $resultpassword = $('#resultpassword');
    const $password = $('#user-password').val();
    //$resultpassword.text('');
  
    if(validatePassword($password)){
      $resultpassword.text('Password is valid.');
      $resultpassword.css('color', 'green');
    } else{
      $resultpassword.text('Password is invalid.');
      $resultpassword.css('color', 'red');
    }
    const $resultpasswordconfirm = $('#resultconfirmpassword');
    const $confirmpassword = $('#user-password-confirm').val();
    //$resultpasswordconfirm.text('');
  
    if($password == $confirmpassword && $password != ""){
      $resultpasswordconfirm.text('password and confirm password' + ' is same.');
      $resultpasswordconfirm.css('color', 'green');
    } else{
      $resultpasswordconfirm.text('password and confirm password'+ ' is not same.');
      $resultpasswordconfirm.css('color', 'red');
    }
    
    // if(validateEmail(email) && validatePassword($password) && $password == $confirmpassword){
    //   //location.href = '/Login/login.html';
    //   //localStorage.setItem('User', JSON.stringify({Email: email,PassWord: $password,Name: name
    // }));
    //     alert("Register successfully!");
    // }
    // else{
    //     alert("Register fail!");
    // }
  }