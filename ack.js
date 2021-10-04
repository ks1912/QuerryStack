const urlParams = new URLSearchParams(location.search);
            //for (const [email, pass] of urlParams) 
            //{
            //    //console.log(`${email}:${pass}`); // To get output in this terminal
            //    //document.write(`${email}<br>:${pass}<br>`); // Get written output in text on web browser
            //    alert(email[1]); // Pop up output from web
            //    alert(pass[]);    // Pop up output from web
            //}

            // USING VALUES or KEYS
            for (const x of urlParams.values()) 
            {
                document.write(x+'<br>');
                //alert('Email Id and Password are:-'+x); // Pop up output
            }

            // USING ENTERIES
            //for (const entry of urlParams.entries()) 
            //{
            //    document.write(entry[0]);
            //}

            //var queryString = decodeURIComponent(window.location.search);
            //queryString = queryString.substring(1);
            //var queries = queryString.split("&");
            //for (var i = 0; i < queries.length; i++)
            //{​
            //    document.write(queries[i] + "<br>");
            //}​
