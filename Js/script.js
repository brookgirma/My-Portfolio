var typed = new Typed(".web",{
    strings:["","Web Designer","Web Developer"],
    typeSpeed:200,
    BackSpeed:60,
    loop:true
})

//Aside

const nav = document.querySelector(".nav"),
      navlist = nav.querySelectorAll("li"),
      totalNavList = navlist.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for (let i = 0; i < totalNavList; i++) 
      { 
          const a = navlist[i].querySelector("a");
          a.addEventListener("click", function()
          {
            removeBackSection();
            for (let j = 0; j < totalNavList; j++) 
            {
                if (navlist[j].querySelector("a").classList.contains("active")) 
                {
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");                
                }
                navlist[j].querySelector("a").classList.remove("active");                
            }
            this.classList.add("active")
            showSection(this);
            if (window.innerWidth < 1200) {
                asideSectiontogbtn();
            }
          })
      }
      function removeBackSection()
      {
        for (let i = 0; i < totalSection; i++)
            {
                allSection[i].classList.remove("back-section");                    
            }
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");  
      }
    function showSection(element)
    {
        for (let i = 0; i < totalSection; i++)
        {
            allSection[i].classList.remove("active");            
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element){
        for (let i = 0; i < totalNavList; i++) {
            navlist[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navlist[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hireme").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navbtn = document.querySelector(".navtog"),
          aside = document.querySelector(".aside");
          navbtn.addEventListener("click", () =>
          {
            asideSectiontogbtn();
          })
          function asideSectiontogbtn() 
          {
            aside.classList.toggle("open"); 
            navbtn.classList.toggle("open");   
            for (let i = 0; i < totalSection; i++) {
                allSection[i].classList.toggle("open");
                
            }
          }

//email
var btn = document.getElementById('btnm');
btn.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subj = document.getElementById('subject').value;
    var mess = document.getElementById('message').value;
    var body = 'name: '+name + '<br/> email: '+ email +'<br/> subject: '+ subj +'<br/> message: '+ mess ;
    Email.send({
        Host : "smtp.gmail.com",
        Username : "brookgirma276@gmail.com",
        Password : "jvgqyfkritarcpji",
        To : 'brookgirma276@gmail.com',
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );})