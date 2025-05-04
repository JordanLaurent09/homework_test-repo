const axios = require('axios');

const func = async () => {
    const res = await axios.post('http://localhost:3000/newSinger',  {
        headers: {
            'Authorization': "Basic 934762837423nh23men23o3492"
        },

        data: {
        name: "Samantha",
        surname: "Fox",
        genre: "Pop"
        }

    })

    console.log(res.data);
}

func();




fetch('http://localhost:3000')
.then(response => response.text())
.then(data => console.log(data));

/* fetch('http://localhost:3000/newSinger', { 

    method: 'POST', 
    
    headers: {
       'Content-Type': 'application/json',
    },

    body: JSON.stringify({
        name: "Samantha",
        surname: "Fox",
        genre: "Pop",
        country: "Great Britain"
    })
})
.then(response => response.json())
.then(data => console.log(data)); */


/* fetch('http://localhost:3000/auth', {

    method: 'POST',

    headers: {
        'Content-Type': 'application/json',
    }

})
.then(response => response.json())
.then(data => console.log(data)); */
