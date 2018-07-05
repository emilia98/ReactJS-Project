$(() => {
    let registerBtn = $('#register-btn');
    let loginBtn = $('#login-btn');
    let notifications = $('<div id="notifications"></div>');
    let animator = $('<div id="animator">');
    let message = $('<h2 id="message"></h2>');

    
    $('#register').submit(function(e) {
        e.preventDefault();

       doSomething(this, 'register');
    });
    

    $('#login').submit(function(e) {
        e.preventDefault();

        doSomething(this, 'login');
    });

    $('#activate').submit(function(e) {
        e.preventDefault();

       doSomething(this, 'activate');
    });

    function doSomething(form, path) {
         //var form = document.getElementById('#register');
         const formData = new FormData(form);
         // let url = 

         let requestObj = {
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data) {
              $('body').empty();
              notifications.appendTo($('body'));
              message.text(data);
              message.attr('id', 'msg-success'); 
              animator.addClass('success');

              notifications.append(animator).append(message);

              (() => {
                  //console.log($('#animator'));
                  $("#animator").animate({width:'toggle'},2500, () => {
                      $(message).text('Redirecting, please wait...');
                      message.fadeOut(1500, () => {
                          window.location.href = '/';
                      });
                  });
              })();
            },
            error: function(err) {
             //msgText.text(data);
             //msg.addClass('error');
              console.log(err.responseJSON);
            }
         }

         if (path !== 'activate') {
            requestObj.url = `/user/${path}`;
         };
        
         $.ajax(requestObj);
         /*
         $.ajax({
             
             //data: JSON.stringify({name: 'Emilia'}),
             
             //processData: false,
             // cache: false,
    
             // contentType: false,
             
         })
         */
    }

    function doSomething2(form, path) {
        //var form = document.getElementById('#register');
        const formData = new FormData(form);
         // let url = 
        
        $.ajax({
            //url: `/user/${path}`,
            type: 'POST',
            data: formData,
            //data: JSON.stringify({name: 'Emilia'}),
            
            //processData: false,
            // cache: false,
    processData: false,
    contentType: false,
            // contentType: false,
            success: function(data) {
               // window.location.href = '/';
               console.log(data);
               $('body').empty();
               notifications.appendTo($('body'));
               message.text(data);
               message.attr('id', 'msg-success'); 
               animator.addClass('success');

               notifications.append(animator).append(message);

               (() => {
                   //console.log($('#animator'));
                   $("#animator").animate({width:'toggle'},2500, () => {
                       $(message).text('Redirecting, please wait...');
                       message.fadeOut(1500, () => {
                           window.location.href = '/';
                       });
                   });
               })();
              },
              error: function(err) {
               //msgText.text(data);
               //msg.addClass('error');
                console.log(err.responseJSON);
              }
        })
   }
 })


