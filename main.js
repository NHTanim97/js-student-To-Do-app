
    // -- all id call in variable
    const name = document.getElementById('name');
    const id = document.getElementById('id');
    const dept = document.getElementById('dept');
    const cgpa = document.getElementById('cgpa');


    const btn = document.getElementById('btn');
    btn.addEventListener('click', function(e){
    
        /*
        input validation check
        */
    if(name.value === ''){
        alert('please fill the student name');
    }
    else if(id.value === ''){
        alert('please fill the student id');
    }
    else if(dept.value === ''){
        alert('please fill the depertment');
    }
    else if(cgpa.value === ''){
        alert('please fill the cgpa');
    }


    /*
        * else condition
        * tr & td create করা হয়েছে ।
        * td এর ভিতরে value সেট করা দেয়া হয়েছে ।
    */    
    else{
        const tbody = document.getElementById('tbody');
        const tr = document.createElement('tr');
        
        // ----for name
        const td = document.createElement('td')
        td.innerHTML = name.value;
        tr.appendChild(td);
        


        // ----for id
        const td1 = document.createElement('td')
        td1.innerHTML = id.value;
        tr.appendChild(td1);
    


        // ----for dept
        const td2 = document.createElement('td')
        td2.innerHTML = dept.value;
        tr.appendChild(td2);
        


        // ----for cgpa
        const td3 = document.createElement('td')
        td3.innerHTML = cgpa.value;
        tr.appendChild(td3);

        tbody.appendChild(tr);
    }


        e.preventDefault();
    })