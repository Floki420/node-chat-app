var generateMessage=(from,text)=>{
    return{
        from,
        text,
        createAt:new Date().getTime()
    };
};
var generateLocationMessage=(from,latitude,longitude)=>{
    return{
        from,
        url:`https://www.google.com/maps?q=33.621606400000005,73.0284032`,
        createAt:new Date().getTime()
    };
};

module.exports={generateMessage,generateLocationMessage};
