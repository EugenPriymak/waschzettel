const addBtn = document.querySelector('#addBtn');
const userBtn = document.querySelector('#userBtn');


const loginForm = document.querySelector('#loginForm');
const overlay = document.querySelector('.overlay');


const mainWrapper = document.querySelector('.main__wrapper');

// main form
const form = document.querySelector('#form');

// main form inputs

const formCancelBtn = document.querySelector('.cancelBtn');
const formOk = document.querySelector('.formOk');
// 

// login form 
const loginCancelBtn = document.querySelector('#loginCancel');
const loginOk = document.querySelector('#loginOk');

const name = document.querySelector('#name');
const year = document.querySelector('#year');
const branche = document.querySelector('#branche');
const place = document.querySelector('#place');
const chef = document.querySelector('#chef');
const address = document.querySelector('#address');
const subs = document.querySelector('#subs');
const logo = document.querySelector('#logo');

// zettel

function addGrid() {
    

// zettel=============

    const grid = document.createElement('div');
    grid.classList.add('grid');

    const nameZ = document.createElement('h2');
    nameZ.classList.add('title-z');
    nameZ.textContent = name.value;
    grid.appendChild(nameZ);
    
    const yearTitle = document.createElement('h3');
    yearTitle.classList.add('titleh3');
    yearTitle.textContent ="Gründungsjahr: ";
    grid.appendChild(yearTitle);
    
    const yearZ = document.createElement('p');
    yearZ.classList.add('p-z');
    yearZ.textContent = year.value;
    grid.appendChild(yearZ);

    const brancheTitle = document.createElement('h3');
    brancheTitle.classList.add('titleh3');
    brancheTitle.textContent ="Branche: ";
    grid.appendChild(brancheTitle);

    const brancheZ = document.createElement('p');
    brancheZ.classList.add('p-z');
    brancheZ.textContent = branche.value;
    grid.appendChild(brancheZ);

    const placeTitle = document.createElement('h3');
    placeTitle.classList.add('titleh3');
    placeTitle.textContent ="Sitz der Firmenzentrale: : ";
    grid.appendChild(placeTitle);
    
    const placeZ = document.createElement('p');
    placeZ.classList.add('p-z');
    placeZ.textContent = place.value;
    grid.appendChild(placeZ);

    const chefTitle = document.createElement('h3');
    chefTitle.classList.add('titleh3');
    chefTitle.textContent ="Name der Firmenchefin/des Firmenchefs: ";
    grid.appendChild(chefTitle);
    
    const chefZ = document.createElement('p');
    chefZ.classList.add('p-z');
    chefZ.textContent = chef.value;
    grid.appendChild(chefZ);
    
    const addressTitle = document.createElement('h3');
    addressTitle.classList.add('titleh3');
    addressTitle.textContent ="Internet-Adresse des Unternehmens: ";
    grid.appendChild(addressTitle);

    const addressZ = document.createElement('p');
    addressZ.classList.add('p-z');
    addressZ.textContent = address.value;
    grid.appendChild(addressZ);
    
    const subsTitle = document.createElement('h3');
    subsTitle.classList.add('titleh3');
    subsTitle.textContent ="Kurzbeschreibung: ";
    grid.appendChild(subsTitle);

    const subsZ = document.createElement('p');
    subsZ.classList.add('p-z');
    subsZ.textContent = subs.value;
    grid.appendChild(subsZ);

    const logoTitle = document.createElement('h3');
    logoTitle.classList.add('titleh3');
    logoTitle.textContent ="Logo: ";
    grid.appendChild(logoTitle);

    const logoZ = document.createElement('img');
    logoZ.classList.add('logo-z');
    logoZ.style.cssText = `background: url(${logo.value})`;
    grid.appendChild(logoZ);

    
  // buttons=============

  const divBtns = document.createElement('div');
  divBtns.classList.add('divBtns');

  const editBtn = document.createElement('button');
  
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBtn.classList.add('btn-z');
  divBtns.appendChild(editBtn);

 
  
  const shareBtn = document.createElement('button');
  shareBtn.innerHTML = '<i class="fa-solid fa-share"></i>';

  shareBtn.classList.add('btn-z');
  divBtns.appendChild(shareBtn);

  shareBtn.addEventListener('click', () => {
    editBtn.style.cssText = "display: none;";  
    shareBtn.style.cssText = "display: none;";  

  })
  
  editBtn.addEventListener('click', () => {
    //     const ps = document.querySelectorAll('.p-z');
    // ps.forEach(p => {
    //     p.style.cssText = "background-color: #f5cece;";
    //     p.setAttribute('contenteditable', 'true');
        
    // });
    nameZ.style.cssText = "background-color: #f5cece;";
    nameZ.setAttribute('contenteditable', 'true');

    yearZ.style.cssText = "background-color: #f5cece;";
    yearZ.setAttribute('contenteditable', 'true');

    brancheZ.style.cssText = "background-color: #f5cece;";
    brancheZ.setAttribute('contenteditable', 'true');

    placeZ.style.cssText = "background-color: #f5cece;";
    placeZ.setAttribute('contenteditable', 'true');

    chefZ.style.cssText = "background-color: #f5cece;";
    chefZ.setAttribute('contenteditable', 'true');

    addressZ.style.cssText = "background-color: #f5cece;";
    addressZ.setAttribute('contenteditable', 'true');

    subsZ.style.cssText = "background-color: #f5cece;";
    subsZ.setAttribute('contenteditable', 'true');

    logoZ.style.cssText = "background-color: #f5cece;";
    logoZ.setAttribute('contenteditable', 'true');

    shareBtn.style.cssText = "display: none;";  
    editBtn.style.cssText = "display: none;";  

    const saveChangesBtn = document.createElement('button');
    saveChangesBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  
    saveChangesBtn.classList.add('btn-z');
    divBtns.insertBefore(saveChangesBtn, deleteBtn);

    saveChangesBtn.addEventListener('click', () => {
        nameZ.style.cssText = "background-color: #fff;";
        nameZ.setAttribute('contenteditable', 'false');
    
        yearZ.style.cssText = "background-color: #fff;";
        yearZ.setAttribute('contenteditable', 'false');
    
        brancheZ.style.cssText = "background-color: #fff;";
        brancheZ.setAttribute('contenteditable', 'false');
    
        placeZ.style.cssText = "background-color: #fff;";
        placeZ.setAttribute('contenteditable', 'false');
    
        chefZ.style.cssText = "background-color: #fff;";
        chefZ.setAttribute('contenteditable', 'false');
    
        addressZ.style.cssText = "background-color: #fff;";
        addressZ.setAttribute('contenteditable', 'false');
    
        subsZ.style.cssText = "background-color: #fff;";
        subsZ.setAttribute('contenteditable', 'false');
    
        logoZ.style.cssText = "background-color: #fff;";
        logoZ.setAttribute('contenteditable', 'false');
    
        shareBtn.style.cssText = "display: inline;";  
        editBtn.style.cssText = "display: inline;";  
        saveChangesBtn.style.cssText = "display: none;";  

    }
    )

});


  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  deleteBtn.classList.add('btn-z');
  divBtns.appendChild(deleteBtn);

  deleteBtn.addEventListener('click', () => {
    divBtns.parentElement.remove();
  })

    grid.appendChild(divBtns);

    mainWrapper.appendChild(grid);
}

function formToggle() {
    form.classList.toggle("active");
    overlay.classList.toggle("active");
}

function formReset() {
    name.value = null;
    year.value = null;
    branche.value = null;
    place.value = null;
    chef.value = null;
    address.value = null;
    subs.value = null;
    logo.value = null;
}



function loginToggle() {
    loginForm.classList.toggle("active");
    overlay.classList.toggle("active");
}



// form buttons
addBtn.addEventListener('click', () => {
    formReset();
    formToggle(); 
});

formCancelBtn.addEventListener('click', () => {
    formToggle();
});

formOk.addEventListener('click', () => {
    addGrid();
    formToggle(); 
});

// login form

userBtn.addEventListener('click', () => {
    loginToggle();
});

loginCancelBtn.addEventListener('click', () => {
    loginToggle();
})

loginOk.addEventListener('click', () => {
    loginToggle();
})




