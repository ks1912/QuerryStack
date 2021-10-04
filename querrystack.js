function newvalidate()
            {
                //Creating variables and assigning values to them
                var fullname = document.myForm.fname.value;
                var emailid = document.myForm.email.value;
                var password = document.myForm.pass.value;
                var valipassword = document.myForm.vpass.value;

                //var parentWindow = window.parent;
                //alert(parentWindow);

                //Empty Column Validation
                if(fullname==="" & fullname== null & emailid==="" & password=="" & valipassword=="" & valipassword==null & password==null)
                {
                    alert("Please fill the details");  
                    return false;
                }
                if(emailid !="" & password !="" & fullname !="" & valipassword !="")
                {
                    // Password Number Validation
                    if(password.length > 8 & password.length <20)
                    {
                        //Password checking with re-enter password
                        if(password === valipassword)
                        {
                            //parent.location='querystringlogin.html';
                            return true;

                        }//Password checking with re-enter password end
                        else
                        {
                            //Password checking with re-enter password end
                            alert("Re-password is incorrect! "+fullname);
                            return false;
                        }
                    }// Password Number Validation end
                    else
                    {
                        // Password Number Validation end
                        alert("Password Minimum length is 8 and maximum is 20 "+fullname);
                        return false;
                    }
                }//Empty Column Validation End
                else
                {
                    //Empty Column Validation
                    alert("Please fill the remaining details");  
                    return false;
                }
                
            } // Function End
