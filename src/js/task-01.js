const listEl = document.querySelectorAll('ul')


const messageOnQuantityCategories = listEl.forEach(element => {
    const quantityCategory = element.children.length;
    const titleName = element.previousElementSibling.textContent
    

    if (titleName !== "Go back") {
      return console.log(`
    Category: ${titleName}
    Elements: ${quantityCategory}`)  
    } 
    
return console.log(`Number of categories: ${quantityCategory}`) 
});


