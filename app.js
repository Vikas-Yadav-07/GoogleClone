// const searchBar = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const searchBar = document.querySelector('.search-input').addEventListener('keydown',(x)=>{
    if(x.code==="Enter"){
        const searchBar = document.querySelector('.search-input').value;

        window.location.href="https://www.google.com/search?q="+ searchBar +"&sxsrf=APq-WBtRXasIOZ2QhxvS1UjR6ihxbNaWDg%3A1648295602339&source=hp&ei=sv4-YoPED4nyhwOc17H4Dw&iflsig=AHkkrS4AAAAAYj8Mwi1c-Phzhi26DoD2WMqsLdegdATO&ved=0ahUKEwiD5e3O2-P2AhUJ-WEKHZxrDP8Q4dUDCAc&uact=5&oq="+searchBar+"&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgsILhCABBCxAxDUAjIICAAQgAQQsQMyCAguEIAEENQCMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOgsIABCABBCxAxCDAToOCC4QgAQQsQMQgwEQ1AI6EQguEIAEELEDEIMBEMcBEKMCOgoIABCxAxCDARAKOg4ILhCABBDHARCvARDUAjoICAAQsQMQgwE6CAguELEDEIMBOggILhCABBCxA1DvAli2CmDJEGgBcAB4AIAB3wGIAfsHkgEFMC4zLjKYAQCgAQGwAQo&sclient=gws-wiz"
        searchBar.value = ""
        
    }
})



searchBtn.addEventListener('click',()=>{

    const searchBar = document.querySelector('.search-input').value;
    window.location.href="https://www.google.com/search?q="+ searchBar +"&sxsrf=APq-WBtRXasIOZ2QhxvS1UjR6ihxbNaWDg%3A1648295602339&source=hp&ei=sv4-YoPED4nyhwOc17H4Dw&iflsig=AHkkrS4AAAAAYj8Mwi1c-Phzhi26DoD2WMqsLdegdATO&ved=0ahUKEwiD5e3O2-P2AhUJ-WEKHZxrDP8Q4dUDCAc&uact=5&oq="+searchBar+"&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgsILhCABBCxAxDUAjIICAAQgAQQsQMyCAguEIAEENQCMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOgsIABCABBCxAxCDAToOCC4QgAQQsQMQgwEQ1AI6EQguEIAEELEDEIMBEMcBEKMCOgoIABCxAxCDARAKOg4ILhCABBDHARCvARDUAjoICAAQsQMQgwE6CAguELEDEIMBOggILhCABBCxA1DvAli2CmDJEGgBcAB4AIAB3wGIAfsHkgEFMC4zLjKYAQCgAQGwAQo&sclient=gws-wiz"
    
})




