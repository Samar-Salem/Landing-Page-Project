

  const navUl = document.getElementById("navbar__list");
        sections = document.getElementsByTagName("section");
    
   
function addSection(){
    let navLis= ` ` ;

    for(var i = 0 ; i < sections.length ; i++)
    {
         navLis += `<li> <a  href="#section`+(i+1)+`"> section ` + (i+1) +  `</a> </li> `
                 
    }

    document.getElementById("navbar__list").innerHTML = navLis ; 
};

addSection();



const links = document.querySelectorAll("#navbar__list li a " )

for(var i of links)
{
 i.addEventListener("click" , clickLink)

}


 function clickLink(e)
{

 e.preventDefault()

const hyperLink = this.getAttribute("href");
    

const secOffset = document.querySelector(hyperLink).offsetTop;


scroll
({ top:secOffset,
   behavior: "smooth"
   
});

}


window.addEventListener("scroll", activeSection)
function activeSection() {
    
    for (var i of sections) {

        if (window.pageYOffset >= i.offsetTop) {
            i.classList.add("active");
        }
        else {
            console.log("error")
        }
    }
}


