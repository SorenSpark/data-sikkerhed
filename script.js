






/* variabler */

<<<<<<< Updated upstream
const knap = document.querySelectorAll(".accordion-item h3"); /* hentet alle h3'er i alle accordion item */
=======
const knap = document.querySelectorAll(".accordion-item h2"); /* hentet alle h2'er */
>>>>>>> Stashed changes

knap.forEach((accordionToggle) => {
accordionToggle.addEventListener("click", () => {
    
    let accordionItem = accordionToggle.parentNode; /* henter elementer ind fra accordiontoggle via parentNode*/

    let accordionContent = accordionToggle.nextElementSibling; /* henter elementer ind fra accordiontoggle via nextElementSibling */

    /* hvis Accordion er åben, så skal den lukkes */
    if(accordionContent.style.maxHeight){
    
        accordionContent.style.maxHeight = null; /* maxhøjde sættes til null= 0px */
        
        accordionItem.classList.remove("active"); /* klassen active fjernes fra vores accordion */

    }else{
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; /* maxhøjde sættes til scrollhøjde + 0px */
    accordionItem.classList.add("active"); /* klassen active tilføjes til vores accordion */}
        
})  

});