const performance =(a,b,c,d) =>{
    let avg = (a + b + c + d) / 4;
    console.log(avg > 50 ? "Performance is good" : "Improvement needed");
};
performance(60, 20, 80, 30); 