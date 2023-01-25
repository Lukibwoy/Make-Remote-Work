const feauters = document.querySelector('.feauters')
const company = document.querySelector('.company')
const feat = document.getElementById('feat')
const featImg = document.querySelector('.featImg')
const compImg = document.querySelector('.compImg')
const comp = document.getElementById('comp')



const toggleWindows = () => {
    feauters.classList.toggle('active')
    changeArrow()
}
const toggleWindows2 = () => {
    company.classList.toggle('active')
    changeArrow()
}

function changeArrow(){
if(feauters.classList.contains("active")){
    featImg.src='./img/icon-arrow-up.svg'
}
else{
    featImg.src='./img/icon-arrow-down.svg'
}

if(company.classList.contains("active")){
    compImg.src='./img/icon-arrow-up.svg'
}
else{
    compImg.src='./img/icon-arrow-down.svg'
}
}

const removeWindow = () => {
    feauters.classList.remove('active')
}

feat.addEventListener('click', (toggleWindows))
comp.addEventListener('click', (toggleWindows2))
feauters.addEventListener('click', removeWindow)

