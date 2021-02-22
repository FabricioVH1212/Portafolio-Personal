//Efecto del título
var message="Portafolio - Fabricio" 
var message=message+" " 
i="0" 
var temptitle=""
var speed="150"
    function titler(){
        if (!document.all&&!document.getElementById)
            return
            document.title=temptitle+message.charAt(i)
            temptitle=temptitle+message.charAt(i)
            i++ 
                if(i==message.length)
                {
                i="0"
                temptitle=""
                }
                setTimeout("titler()",speed)
    }
window.onload=titler
    function toggle(){
            var sec = document.getElementById('sec');
            var nav = document.getElementById('navigation');
            sec.classList.toggle('active');
            nav.classList.toggle('active');
    }
        