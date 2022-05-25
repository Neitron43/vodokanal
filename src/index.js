import './style.css'
import './styles/style.scss'
const sliders = document.querySelectorAll('.swiper')
sliders.forEach((el) => {
  let mySwiper = new Swiper(el, {
    pagination: {
      el: '.swiper-pagination',
    },  
  })
})


const user = document.querySelector('.user-select--pc')
const userMobile = document.querySelector('.user-select--mobile')
const linksListFiz = document.querySelector('.nav.fiz')
const linksListJur = document.querySelector('.nav.jur')  
const linksListMobileFiz = document.querySelector('.mobile__nav.fiz')
const linksListMobileJur = document.querySelector('.mobile__nav.jur')

if (user) {
  user.addEventListener("change", function() {
    if (this.value == 'individual') {
      user.className = 'user-select--pc fiz';
      linksListFiz.className = 'nav fiz active'
      linksListJur.className = 'nav jur'
    } else if (this.value == 'juridical') {
      user.className = 'user-select--pc jur';
      linksListJur.className = 'nav jur active'
      linksListFiz.className = 'nav fiz'
    }
  })
}

if (userMobile) {
  userMobile.addEventListener("change", function() {
    if (this.value == 'individual') {
      userMobile.className = 'user-select--mobile fiz'
      linksListMobileFiz.className = 'mobile__nav fiz active'
      linksListMobileJur.className = 'mobile__nav jur'
      
    } else if (this.value == 'juridical') {
      userMobile.className = 'user-select--mobile jur'
      linksListMobileJur.className = 'mobile__nav jur active'
      linksListMobileFiz.className = 'mobile__nav fiz'
    }
  })
  
}

const searchButton = document.querySelector('.search__button')
const searchButtonMobile = document.querySelector('.search__button--mobile')
const searchCross = document.querySelector('.search__cross')
const searchCrossMobile = document.querySelector('.search__cross--mobile')
const searchForm = document.querySelector('.info__search')
const searchFormMobile = document.querySelector('.info__search--mobile')
const infoList = document.querySelector('.info__list')
const infoMail = document.querySelector('.info__mail')

if (searchForm) {
  searchButton.addEventListener('click', function() {
    searchForm.classList.toggle('_active')
    searchCross.classList.toggle('_active')
    infoList.classList.toggle('_active')
    infoMail.classList.toggle('_active')
  })
  searchButtonMobile.addEventListener('click', function() {
    searchFormMobile.classList.toggle('_active')
    searchCrossMobile.classList.toggle('_active')
  })
  searchCross.addEventListener('click', function() {
    searchForm.classList.toggle('_active')
    searchCross.classList.toggle('_active')
    infoMail.classList.toggle('_active')
    infoList.classList.toggle('_active')
  })
  searchCrossMobile.addEventListener('click', function() {
    searchFormMobile.classList.toggle('_active')
    searchCrossMobile.classList.toggle('_active')
  })
  searchForm.addEventListener('submit', handleSearch)
  function handleSearch() {
    event.preventDefault()
    console.log('!')
  }
}


const timetableStreet1 = document.querySelector('.info-timetable.str1')
const timetableStreet2 = document.querySelector('.info-timetable.str2')
const adress = document.querySelector('.adress-select')

if (adress) {
  adress.addEventListener("change", function(){
    if (this.value == 'Vorovskogo') {
      timetableStreet1.className = 'info-timetable str1 active'
      timetableStreet2.className = 'info-timetable str2'
    } else if (this.value == 'Militseyskaya') {
      timetableStreet2.className = 'info-timetable str2 active'
      timetableStreet1.className = 'info-timetable str1'
    }
  });
}

const list = document.querySelector('.mobile-upper-info')
list.addEventListener('click', () => {
  let li = event.target.closest('li')
  if (!li) return;
  if (!list.contains(li)) return;
  li.classList.toggle('_active')
})

const iconMobile = document.querySelector('.info__icon--mobile')
const headerMobile = document.querySelector('.header-mobile')
if (iconMobile) {
  iconMobile.addEventListener('click', () => {
    headerMobile.classList.toggle('_active')
    iconMobile.classList.toggle('_active')
    document.body.classList.toggle('lock')
  })
}

const menuStripe = document.querySelector('.menu__stripe')
if (menuStripe) {
  menuStripe.addEventListener('touchmove', () => {
    if (headerMobile.className == ('header-mobile _active')) {
      headerMobile.classList.toggle('_active')
      iconMobile.classList.toggle('_active')
      document.body.classList.toggle('lock')
    }
  })
}

const form = document.querySelector('.sub-news__form')
const formInput = document.querySelector('.form__email')
if (form) {
  form.addEventListener('submit', formSubmit)
  function formSubmit() {
    event.preventDefault()
    console.log(formInput.value)
  }
}


const faqList = document.querySelector('.block__info')
const blockAccordionSub = document.querySelector('.block__accordion.subinformation')
if (faqList) {
  faqList.addEventListener('click', () => {
    if (event.target.closest('button').className == 'info__button') {
      event.target.closest('.block__accordion.information').classList.toggle('_active')
      blockAccordionSub.classList.remove('_active')
    } else if (event.target.closest('button').className == 'info__subbutton') {
      event.target.closest('.block__accordion.subinformation').classList.toggle('_active');
      console.log(event.target.closest('.info__subsubblock'))
    }
  })
}

const vacancyList = document.querySelector('.block__info.vacancy')
const vacancyModal = document.querySelector('.block__modal')

if (vacancyList) {
  vacancyList.addEventListener('click', () => {
    if (event.target.className == 'info__send') {
      vacancyModal.classList.toggle('active')
      document.body.classList.toggle('disabled')
    }
  })
}

const modalRemove = document.querySelector('.modal__cross--main')

if(modalRemove) {
  modalRemove.addEventListener('click', function() {
    vacancyModal.classList.toggle('active')
    document.body.classList.toggle('disabled')
  })
}

const modalAttach = document.querySelector('.modal__attach')
const modalSend = document.querySelector('.modal__send')
const fileName = document.querySelector('.modal-file__name')
const modalInfo = document.querySelector('.modal__attach--info')
const fileRemove = document.querySelector('.modal__cross--file')

if(modalAttach) {
  modalAttach.addEventListener('change', function() {
    if (this.value) {
      fileName.innerHTML = `${modalAttach.files[0].name}`
      modalAttach.classList.toggle('disabled')
      modalSend.classList.toggle('active')
      modalInfo.classList.toggle('active')
    }
  })
}

if(fileRemove) {
  fileRemove.addEventListener('click', function() {
      fileName.innerHTML = ``
      modalAttach.classList.toggle('disabled')
      modalSend.classList.toggle('active')
      modalInfo.classList.toggle('active')
  })
}