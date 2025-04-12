//TARGETING THE REFRESHBTN 
const refreshbtn = document.getElementById('refreshbtn')

//TARGETING THE CREATE BUTTON 
const Createthelistbtn = document.getElementById(`Createthelistbtn`);

//TARGETIING THE TODO LIST WINDOW
const todowindow = document.getElementById('todowindow')

//TARGETING THE TODO INIPUT SECTION
const todoSection = document.querySelector('.todoSection')

//TARGETING THE XBUTTON/DELETE BUTTON
const xbutton = document.querySelector('.xbutton')

//TARGETING THE ADD BUTTON
const addbuttonlist = document.querySelector('.addbuttonlist')

//TARGETING THE MENUDISPLAY WHICH CONTAIN THE TITLE
const menudisplay = document.querySelector('.menudisplay')

//TARGETING THE LISTEDITEM WHICH CONATINS THE OL, LI AND INPUT
const ListedItem = document.querySelector('.listedItem')

//TARGETING THE TODO1 WHICH CONTAINS THE OL
const todoAll = document.querySelectorAll('.todo')

//TARGETING THE BULLETING/OL
const bulleting = document.querySelector('.bulleting')


let todoIn = 0;
let varOb = ``

//TARGETING THE IN

//INCREMENT VARIABLES
let numberlist = 1;
let openverse = 0;
let projectKey = 1;

//TARGETING THE WRITELIST WHICH CONTAINS THE TODO1/TODOSECTION
const writethelist = document.querySelector('.writethelist')

//TARGETING THE DELETE BUTTON
const delbtn = document.getElementById('delbtn')

//TARGETING THE #addfromLS
const addbtnLSAll = document.querySelectorAll('#addfromLS')

//TARGETING ALL DELETE BTN
let delbtnAll = document.querySelectorAll('#delfromLS')

//PROJECT OBJECT
const projectObject = {}

//TARGETING THE DOBE BUTTON
const donebtn = document.querySelector('.doneBTN')

//TARGETING THE ADD/DONE/DEL CONTAINER
const adddonedel = document.querySelector('.adddonedel')

//TARGETING THE parentTodo
const parentTodo = document.querySelector('.parentTodo')

//TARGETING THE EDIT BUTTON
const editbutton = document.querySelector('.editbutton')

//trueValue VARIABLE
let trueValue = '';

//TARGETING THE TITLE, DATE AND TIME INPUT
const mytitle = document.getElementById('mytitle')
const mydate = document.getElementById('mydate')
const mytime = document.getElementById('mytime')

let createdH1 = document.createElement('h1');
        createdH1.id = 'menuH1'
        menudisplay.appendChild(createdH1)

//DECLEARING THE currentInput variale
let currentInput = '';
let pIndex = 1

//--------------------------------------------------------

//FUNCTION FOR WHEN THE CREATE BUTTON IS CLICKED / OPENS THE CREATE TO-DO LIST PANEL
function opencreatetodo(){
    const createBTN = document.querySelector('.createBTN')
    createBTN.style.animation = `none`;
    createBTN.style.transition = `all 0.2s`;

    const main = document.querySelector('section')
    main.classList.remove('main')
    
    const todop = document.querySelector('.ToDo')
    todop.innerText = 'Create To-Do'
    todop.style.fontSize = '1.2em'

    const rightSide = document.querySelector('.rightSide')
    rightSide.style.display = 'block'

    const createDiv = document.querySelector('.createDiv')
    createDiv.style.borderBottom = `1px solid var(--Fading-color)`;

    const leftSide = document.querySelector('.leftSide')
    leftSide.classList.remove('leftSideTemp')

    varOb = {}
    todowindow.classList.add('createDisplay')
    menudisplay.style.display = 'none';
    ListedItem.style.display = 'none';
    delbtn.style.display = 'none'

    trueValue = false

    openverse++ 
 
    const allInput = document.querySelectorAll(`input`)
    allInput.forEach(input => {
    input.value = ``})
    const allOl = document.querySelectorAll('.bulleting').forEach(ol =>{
        ListedItem.removeChild(ol)
    })

    while (writethelist.children.length > 1){
        writethelist.removeChild(writethelist.lastChild)
    }

    numberlist = 1;

}

//FUNCTION THAT CLOSES THE TO-DO LIST WINDOW 
function closecreatetodo(){
    todowindow.classList.remove('createDisplay')
}

let clickonce = 1;
let currentObject = ``;
let pTitle = ''
let objlengthp = ''

//CREATING THE WARNING PARAGRAPH
const newWarning = document.createElement('p')

//FUNCTION FOR WHEN THE ADD BUTTON IS CLICKED 
function addbuttonclicked(){
    //INCREMENT FROM 1
     clickonce++

    //IF THE INPUT HAS NO VALUE
if(document.querySelector(`.input${numberlist}`).value === '' && (clickonce === 2 || true)){
    //SELECTS DEFAULT INPUT BASED UPON THEIR CLASSNAME CREATED BY NUMBERLIST VARIATIONS
        //CODE DOWN SELECTS FIRST INPUT BECAUSE NUMBERLIST = 1 --INCREMENTED FROM 0
        currentInput = document.querySelector(`.input${numberlist}`)
        currentInput.style.borderBottom =  '1px solid #ff00007e';

        newWarning.style.opacity = '0'
        newWarning.style.animation = `todoSFadeIn 0.3s forwards`
        newWarning.innerText = 'Please Fill the Input!';
        newWarning.style.fontSize = '0.8em';
        newWarning.style.color = 'red';
        
        //INSERTS THE newWarning/p INTO THE adddonedel
        adddonedel.insertAdjacentElement('beforebegin', newWarning)

} 
    
    //IF THE INPUT HAS A VALUE
else{
    //numberlist = 1

    //selects the input to be styled from red to green(if value exists)
    currentInput = document.querySelector(`.input${numberlist}`) 
    currentInput.style.borderBottom =  '1px solid #00B58D';

    //CREATING THE NEWDIV/TODOSECTION AND ADD TO
    const newtodoSection = document.createElement('div')
    newtodoSection.classList.add('todoSection')
    writethelist.insertAdjacentElement('beforeend', newtodoSection)

    //CREATING & ADDING NEW P ELEMENT FOR THE NUMBERING INTO THE NEWDIV 
    const newp = document.createElement('p')
    newtodoSection.insertAdjacentElement('beforeend', newp)

    numberlist++  //(numberlist <= 1)
    //CREATING & ADDING NEW INPUT TO THE NEW DIV
    const newinput = document.createElement('input')
    newinput.classList.add(`input${numberlist}`)
    newtodoSection.insertAdjacentElement('beforeend', newinput)

    newp.innerHTML = `NO: ${numberlist}`;

    //ENABLING THE VISIBILITY OF THE DEL BUTTON
    delbtn.style.display = 'flex';


    let siblingp = writethelist.nextElementSibling.innerHTML
   
    if (siblingp === 'Please Fill the Input!' || siblingp === 'Please Asign a Title!' ){
        todowindow.removeChild(newWarning)
        mytitle.style.borderBottom =  '1px solid #00B58D';
    }

     
}

}

//applying the function addbuttonclicked
addbuttonlist.addEventListener('click', addbuttonclicked)


//declearing a function for delbtn
function delbuttonclicked(){
    /* delete varOb[`Input${numberlist}`]  */

    if(numberlist >= 1){
        numberlist--
    }
    writethelist.removeChild(writethelist.lastChild)
    /* ListedItem.removeChild(ListedItem.lastChild) */

    if(numberlist === 1){
        delbtn.style.display = 'none'
    }

    let siblingp = writethelist.nextElementSibling.innerHTML

    if (siblingp === 'Please Fill the Input!' || siblingp === 'Please Asign a Title!'){
        todowindow.removeChild(newWarning)
    } 

    let p = numberlist
    const propLength = Object.keys(currentObject).length - 3
    if(trueValue === true){
        p++
       delete currentObject[`Input${p}`]
    }

}


function donebuttonclicked(){
   
    if(document.querySelector(`.input${numberlist}`).value === '' && (clickonce === 2 || true)){

        currentInput = document.querySelector(`.input${numberlist}`)
        currentInput.style.borderBottom =  '1px solid #ff00007e';

        newWarning.innerText = 'Please Fill the Input!';
        newWarning.style.fontSize = '0.8em';
        newWarning.style.color = 'red';
        adddonedel.insertAdjacentElement('beforebegin', newWarning)

    } else if(mytitle.value === ''){
        currentInput = document.querySelector(`.input${numberlist}`)
        mytitle.style.borderBottom =  '1px solid #ff00007e';

        newWarning.style.opacity = '0'
        newWarning.style.animation = `todoSFadeIn 0.3s forwards`
        newWarning.innerText = 'Please Asign a Title!';
        newWarning.style.fontSize = '0.8em';
        newWarning.style.color = 'red';
        adddonedel.insertAdjacentElement('beforebegin', newWarning)
    } 

    else{

        currentInput = document.querySelector(`.input${numberlist}`)
        mytitle.style.borderBottom =  '1px solid #00B58D';

        let siblingp = writethelist.nextElementSibling.innerHTML
   
        if (siblingp === 'Please Asign a Title!' || siblingp === 'Please Fill the Input!'){
        todowindow.removeChild(newWarning)
        }

        if(trueValue === true){
                const currentkey = donebtn.dataset.objectKey
                currentObject = projectObject[currentkey]
                currentObject['Title'] = mytitle.value
                currentObject[`Date`] = mydate.value 
                currentObject[`Time`] = mytime.value

                const inDate = document.querySelector(`.${currentkey}D`)
                const inTime = document.querySelector(`.${currentkey}T`)
                const inEdit = document.querySelector(`.${currentkey}E`)

                const now = new Date ()
                const formatDate = now.toISOString().slice(0, 10)

                const hours = now.getHours();
                const minutes = now.getMinutes();

                pTitle = document.querySelector(`#${currentkey}`)
                pTitle.innerText = currentObject[`Title`]

                createdH1.innerText = currentObject[`Title`]
                
                
                inDate.innerText = currentObject[`Date`] || formatDate
                inTime.innerText = currentObject[`Time`] || `${hours}:${minutes}`

                
                inEdit.innerText = `Edited`
                objlengthp = numberlist
                for(let i = 1; i <= objlengthp; i++){
                    const modifyIn = document.querySelector(`.input${i}`)
                   currentObject[`Input${i}`] = modifyIn.value 
                }
        

                closecreatetodo()
        } else{
            //creating a global objectkey
        const globalKey = `object${projectKey}`

        //creating the todo container
        const todoDiv = document.createElement('div')
        todoDiv.classList.add(`todo`)
        todoDiv.dataset.objectKey = globalKey

        //creating listCol
        const listColDiv = document.createElement(`div`)
        listColDiv.classList.add('listCol')

        //creating status
        const  statusDiv = document.createElement('div')
        statusDiv.classList.add('status')

        //appending the todoDiv into parentTodo
        parentTodo.insertAdjacentElement('beforeend', todoDiv)

        //appending the listCol into todoDiv
        todoDiv.insertAdjacentElement('beforeend', listColDiv)

        //appending the statusDiv into todoDiv
        todoDiv.insertAdjacentElement('beforeend', statusDiv)

        //creating the p Title
        pTitle = document.createElement('p')
        pTitle.classList.add(`inTitle${pIndex}`)
        pTitle.id = `object${pIndex}`
        listColDiv.insertAdjacentElement('afterbegin', pTitle)

        //creating the actionDiv 
        const actionBTNdiv = document.createElement('div')
        actionBTNdiv.classList.add('actionBTN')
        listColDiv.insertAdjacentElement('beforeend', actionBTNdiv)

        actionBTNdiv.innerHTML = `<svg id="addfromLS" class="addbutton" data-object-key = "object${projectKey}"
                           
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>

        <svg id="delfromLS" data-object-key = "object${projectKey}"
        class="delbutton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/></svg>

         <svg class="editbutton" data-object-key = "object${projectKey}"
         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"/></svg>`

        const pElementDate = document.createElement('p')
        pElementDate.id = `inDate`
        pElementDate.classList.add(`object${pIndex}D`)
        statusDiv.append(pElementDate)

        pElementDate.insertAdjacentHTML('afterend', `<svg class="dotsep" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"/></svg>`)

        const pElementTime = document.createElement('p')
        pElementTime.id = `inTime`
        pElementTime.classList.add(`object${pIndex}T`)
        statusDiv.append(pElementTime)

        pElementTime.insertAdjacentHTML('afterend', `<svg class="dotsep" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"/></svg>`)


        const pElementEdit = document.createElement('p')
        pElementEdit.id = `inEdit`
        pElementEdit.classList.add(`object${pIndex}E`)
        statusDiv.append(pElementEdit)

        //setting the default time and date
        const now = new Date ()
        const formatDate = now.toISOString().slice(0, 10)

        const hours = now.getHours();
        const minutes = now.getMinutes();
        
        //concatinating the values
        const inDate = document.querySelectorAll('#inDate')
        const inTime = document.querySelectorAll('#inTime')
        const inEdit = document.querySelectorAll('#inEdit')

        pTitle.innerText = mytitle.value
        
        inDate.forEach(date => {
            date.innerText = mydate.value || formatDate
        })

        inTime.forEach(time => {
            time.innerText = mytime.value || `${hours}:${minutes}`
        })

        inEdit.forEach(edit => {
            edit.innerText = 'Unedited'
        })

        //setting object key for addbutton
        const targetIcon = actionBTNdiv.childNodes[0]

         targetIcon.addEventListener('click', (event) => {
            //setting a unique scope key for any add buttton clicked
            const scopeKey = event.currentTarget.dataset.objectKey
            const keyLength = Object.keys(projectObject[scopeKey]).length - 3

            //targeting all prexisting ol
            const allOl = document.querySelectorAll('.bulleting').forEach(ol =>{
                ListedItem.removeChild(ol)
            })

            //targeting scope title
            const scopeTitle = projectObject[scopeKey]
            createdH1.innerText = scopeTitle.Title

            //setting the styles to display flex (appear)
            ListedItem.style.display = 'flex'
            menudisplay.style.display = 'flex'

            //itterating tp create ol, li, In based on the number of inputs available
            for (let i = 1 ; i <= keyLength ; i++){
            const createdOl = document.createElement('ol')                 
            const createdLi = document.createElement('li')
            const objInput = projectObject[scopeKey]
            createdLi.innerHTML = objInput[`Input${i}`]
            

            const createdIn = document.createElement('input')
            createdIn.setAttribute('type', 'checkbox')

            createdOl.classList.add('bulleting')
            createdOl.style.animation = `bulletFade 0.9s forwards`
            ListedItem.insertAdjacentElement('beforeend', createdOl)
            const createdOllastE = ListedItem.lastElementChild
            
            createdOllastE.insertAdjacentElement('afterbegin', createdLi)
            createdOllastE.insertAdjacentElement('beforeend', createdIn)
            }

            fromLS(scopeTitle.Title)
        }) 

        //assign an objectkey to delete button
        const delIcon = actionBTNdiv.childNodes[2]

        delIcon.addEventListener('click', (event) =>{
            ListedItem.style.display = 'none'
            menudisplay.style.display = 'none'
            
            const scopeKey = event.currentTarget.dataset.objectKey
            delete projectObject[scopeKey];
       
            const parentTodo = event.target.closest(`.todo`)
            parentTodo.remove()
            
            closecreatetodo()
        })

        editIcon = actionBTNdiv.childNodes[4]
        editIcon.addEventListener('click', (event) => {
            todowindow.classList.add('createDisplay')
            menudisplay.style.display = 'none';
            ListedItem.style.display = 'none';

            const scopeKey = event.currentTarget.dataset.objectKey
            donebtn.dataset.objectKey = scopeKey
            currentObject = projectObject[scopeKey]
            mytitle.value = currentObject['Title']
            mydate.value = currentObject['Date']
            mytime.value = currentObject['Time']

            objlengthp = Object.keys(currentObject).length - 3

            while(writethelist.children.length >= 1){
                writethelist.removeChild(writethelist.lastElementChild)
            }
           
            for(let i = 1; i <= objlengthp ; i++){
            //CREATING THE NEWDIV/TODOSECTION AND ADD TO
            const newtodoSection = document.createElement('div')
            newtodoSection.classList.add('todoSection')
            writethelist.insertAdjacentElement('beforeend', newtodoSection)

            //CREATING & ADDING NEW P ELEMENT FOR THE NUMBERING INTO THE NEWDIV 
            const newp = document.createElement('p')
            newtodoSection.insertAdjacentElement('beforeend', newp)

            //CREATING & ADDING NEW INPUT TO THE NEW DIV
            const newinput = document.createElement('input')
            newinput.classList.add(`input${i}`)
            newtodoSection.insertAdjacentElement('beforeend', newinput)
            newinput.value = currentObject[`Input${i}`]

            newp.innerHTML = `NO: ${i}`;

            }

            trueValue = true

        })
 
        //recording the Time/Date/Title
        varOb['Title'] = mytitle.value;
        varOb['Date'] = mydate.value;
        varOb['Time'] = mytime.value;

        projectObject[`object${projectKey}`] = varOb

        //looping through each input value
        for(let i = 1; i <= numberlist ; i++){
            let varClassname = `.input${i}`;
            varClassname = document.querySelector(`${varClassname}`).value
            varOb[`Input${i}`] = varClassname;
            projectObject[`object${projectKey}`] = varOb
        }


        closecreatetodo()  
        projectKey++
        pIndex++

        }
        
    }
}




function fromLS(h1Inner){

    const checkboxes = document.querySelectorAll(".bulleting input[type='checkbox']")
    checkboxes.forEach(checkbox => {
        const menuH1All = document.querySelectorAll('#menuH1')
        for(const menuH1 of menuH1All ){
            checkbox.addEventListener('change', (event) =>{
                const Arraychecks = Array.from(checkboxes).every((checkbox) => checkbox.checked)
    
                const parentDiv = event.target.parentElement;
                const parentChildLi = event.target.parentElement.firstChild;
                if(checkbox.checked){
                    checkbox.style.backgroundColor = '#9292927a';
                    parentDiv.style.backgroundColor = '#b6b6b65b';
                    parentChildLi.style.color = '#00b58e48';
                } else{
                    checkbox.style.backgroundColor = '#d9d9d9';
                    parentDiv.style.backgroundColor = '#d9d9d9';
                    parentChildLi.style.color = 'black';
                }
    
                if(Arraychecks === true){
                    menuH1.style.color = '#00b58e48';
                    menuH1.innerHTML = 'All done Congrats!'
                } else{
                    varOb['Title'] = mytitle.value;
                    menuH1.style.color = '#005653';
                    menuH1.innerHTML = h1Inner;
                }
    
            })
        }
        
    })

}






 
//--------------------------------------------------------

//applying function the opencreatetodo
Createthelistbtn.addEventListener('click', opencreatetodo)

//applying the function closecreatetodo
xbutton.addEventListener('click', closecreatetodo)

//applying the function delbuttonclicked 
delbtn.addEventListener('click', delbuttonclicked)

//calling the function "donebuttonclicked()" to doneBTN
donebtn.addEventListener('click', donebuttonclicked )

