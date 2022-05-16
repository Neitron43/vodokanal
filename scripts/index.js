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
const linksList = document.querySelector('.nav') 
const linksListMobile = document.querySelector('.mobile__nav')

user.addEventListener("change", function() {
  if (this.value == 'individual') {
    user.className = 'user-select--pc fiz';
    linksList.innerHTML = `
      <li><a class="nav__link" href="#">Оплатить услуги МУП “Водоканал”</a></li>
      <li><a class="nav__link" href="#">Часто задаваемые вопросы</a></li>
      <li><a class="nav__link" href="#">Электронные услуги</a></li>
      <li><a class="nav__link" href="#">Перечень платных услуг</a></li>
      <li><a class="nav__link" href="#">Технологическое присоединение к централизованным сетям</a></li>
    `
    userMobile.className = 'user-select--mobile fiz'
    linksListMobile.innerHTML = `
      <li><a class="nav__link" href="#">Оплатить услуги МУП “Водоканал”</a></li>
      <hr class="menu__stripe--secondary">
      <li><a class="nav__link" href="#">Часто задаваемые вопросы</a></li>
      <hr class="menu__stripe--secondary">
      <li><a class="nav__link" href="#">Электронные услуги</a></li>
      <hr class="menu__stripe--secondary">
      <li><a class="nav__link" href="#">Перечень платных услуг</a></li>
      <hr class="menu__stripe--secondary">
      <li><a class="nav__link" href="#">Технологическое присоединение к централизованным сетям</a></li>
      <hr class="menu__stripe--secondary">
    `
  } else if (this.value == 'juridical') {
    userMobile.className = 'user-select--mobile jur'
    user.className = 'user-select--pc jur';
    linksList.innerHTML = `
      <li class='jur'><a class="nav__link" href="#">Электронные услуги</a></li>
      <li class='jur'><a class="nav__link" href="#">Перечень платных услуг</a></li>
      <li class='jur'><a class="nav__link" href="#">Электронная очередь</a></li>
      <li class='jur'><a class="nav__link" href="#">Технологическое присоединение к централизованным сетям</a></li>
    `
    linksListMobile.innerHTML = `
      <li class='jur'><a class="nav__link" href="#">Электронные услуги</a></li>
      <hr class="menu__stripe--secondary">
      <li class='jur'><a class="nav__link" href="#">Перечень платных услуг</a></li>
      <hr class="menu__stripe--secondary">
      <li class='jur'><a class="nav__link" href="#">Электронная очередь</a></li>
      <hr class="menu__stripe--secondary">
      <li class='jur'><a class="nav__link" href="#">Технологическое присоединение к централизованным сетям</a></li>
      <hr class="menu__stripe--secondary">
    `
  }
})

userMobile.addEventListener("change", function() {
  if (this.value == 'individual') {
    userMobile.className = 'user-select--mobile fiz'
    linksListMobile.innerHTML = `
      <li><a class="nav__link" href="#">Оплатить услуги МУП “Водоканал”</a></li>
      <hr class="menu__stripe--secondary">
      <li><a class="nav__link" href="#">Часто задаваемые вопросы</a></li>
      <hr class="menu__stripe--secondary">
      <li><a class="nav__link" href="#">Электронные услуги</a></li>
      <hr class="menu__stripe--secondary">
      <li><a class="nav__link" href="#">Перечень платных услуг</a></li>
      <hr class="menu__stripe--secondary">
      <li><a class="nav__link" href="#">Технологическое присоединение к централизованным сетям</a></li>
      <hr class="menu__stripe--secondary">
    `
  } else if (this.value == 'juridical') {
    userMobile.className = 'user-select--mobile jur'
    linksListMobile.innerHTML = `
      <li class='jur'><a class="nav__link" href="#">Электронные услуги</a></li>
      <hr class="menu__stripe--secondary">
      <li class='jur'><a class="nav__link" href="#">Перечень платных услуг</a></li>
      <hr class="menu__stripe--secondary">
      <li class='jur'><a class="nav__link" href="#">Электронная очередь</a></li>
      <hr class="menu__stripe--secondary">
      <li class='jur'><a class="nav__link" href="#">Технологическое присоединение к централизованным сетям</a></li>
      <hr class="menu__stripe--secondary">
    `
  }
})

const timetable = document.querySelector('.info-timetable')
const adress = document.querySelector('.adress-select')

  adress.addEventListener("change", function(){
    if (this.value == 'Vorovskogo') {
      timetable.innerHTML = `<ul class="info-timetable--weekdays">
          <li>
              <span class="timetable__span weekday">Пн:</span>
              <p class="timetable__ph">8:00 - 18:00</p>
          </li>
          <li>
              <span class="timetable__span weekday">Вт:</span>
              <p class="timetable__ph">8:00 - 18:00</p>
          </li>
          <li>
              <span class="timetable__span weekday">Ср:</span>
              <p class="timetable__ph">8:00 - 16:30</p>
          </li>
          <li>
              <span class="timetable__span weekday">Чт:</span>
              <p class="timetable__ph">8:00 - 18:00</p>
          </li>
          <li>
              <span class="timetable__span weekday">Пт:</span>
              <p class="timetable__ph">8:00 - 17:00</p>
          </li>
      </ul>
      <ul class="info-timetable--weekends">
          <li>
              <span class="timetable__span weekend">Сб:</span>
              <p class="timetable__ph">Выходной</p>
          </li>
          <li>
              <span class="timetable__span weekend">Вс:</span>
              <p class="timetable__ph">Выходной</p>
          </li>
      </ul>
      `;
    } else if (this.value == 'Militseyskaya') {
      timetable.innerHTML = `
        <ul class="info-timetable--weekdays">
          <li>
              <span class="timetable__span weekday">Пн:</span>
              <p class="timetable__ph">Вставьте своё время</p>
          </li>
          <li>
              <span class="timetable__span weekday">Вт:</span>
              <p class="timetable__ph">8:00 - 18:00</p>
          </li>
          <li>
              <span class="timetable__span weekday">Ср:</span>
              <p class="timetable__ph">8:00 - 16:30</p>
          </li>
          <li>
              <span class="timetable__span weekday">Чт:</span>
              <p class="timetable__ph">8:00 - 18:00</p>
          </li>
          <li>
              <span class="timetable__span weekday">Пт:</span>
              <p class="timetable__ph">8:00 - 17:00</p>
          </li>
      </ul>
      <ul class="info-timetable--weekends">
          <li>
              <span class="timetable__span weekend">Сб:</span>
              <p class="timetable__ph">Выходной</p>
          </li>
          <li>
              <span class="timetable__span weekend">Вс:</span>
              <p class="timetable__ph">Выходной</p>
          </li>
      </ul>
      `
    }
  });

const list = document.querySelector('.mobile-upper-info')
list.addEventListener('click', () => {
  let li = event.target.closest('li')
  console.log(li)
  if (!li) return;
  if (!list.contains(li)) return;
  li.classList.toggle('_active')
})

const iconMobile = document.querySelector('.info__icon--mobile')
const headerMobile = document.querySelector('.header-mobile')
iconMobile.addEventListener('click', () => {
  headerMobile.classList.toggle('_active')
  iconMobile.classList.toggle('_active')
  document.body.classList.toggle('lock')
})

