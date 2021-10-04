function pleaseValid()
            {   
                var passWord = document.logForm.passnew.value;
                var emailid = document.logForm.emailnew.value;
                // alert(passWord+emailid);
                const urlParams = new URLSearchParams(location.search);

                var oldemailid, oldpassword
                
                for (const [key, value] of urlParams) 
                {
                    //console.log(`${email}:${pass}`); // To get output in this terminal
                    //document.write(`${key} : ${value}<br>`); // Get written output in text on web browser
                    const email = urlParams.get('email')
                    const pass = urlParams.get('pass')
                    oldemailid = email;
                    oldpassword = pass;
                //    alert(email[1]); // Pop up output from web
                //    alert(pass[]);    // Pop up output from web
                }
                //alert(oldemailid+oldpassword);

                if(oldemailid===emailid)
                {
                    if(oldpassword===passWord)
                    {
                        return true;
                    }
                    else 
                    {
                        alert("Password is incorrect!");
                        return false;
                    }
                    //return true;
                }
                else 
                {
                    alert("Email is incorrect!");
                    return false;
                }
            }
