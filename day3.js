// // today=new Date();
// // document.writeln(today);
// // hr=today.getHours()
// // document.writeln('<br>');
// // document.writeln(hr);
// // min=today.getMinutes();
// // document.writeln('<br>');
// document.writeln(min);


function clock()
{
    today=new Date();
    hr=today.getHours();
    min=today.getMinutes();
    sec=today.getSeconds();
    meri='AM';
    if(min<10)
    {
min='0'+min;
    }
     if(sec<10)
    {
        sec='0'+sec;
    }
    if(hr>12)
    {
        hr=hr-12;
        meri='PM';
    }
     if(hr==12)
    {
        meri=PM;
    }
    ghadi=hr+':'+min+':'+sec+meri;
    document.getElementById('a').innerHTML=ghadi;
}
setInterval(clock,1000);