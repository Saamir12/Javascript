let obj = {
    "name": "Saamir",
    "role": "Software Engineer",
    "company": "Sam Industries"

}
for (const key in obj) {
     {
        const element = obj[key];
        console.log(key, element);      
    }
  
}