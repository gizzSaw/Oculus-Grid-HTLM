'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item') //все кнопки
const tabContent = document.querySelectorAll('.tabs__content-item') //все контенты
//добавляем обработчик для переключения на каждую кнопку
tabItem.forEach(function(element) {
    element.addEventListener('click', switchTabsContent)
})

function switchTabsContent(e){ //функция open()
    //функция переключения табов
    const tabTarget = e.currentTarget
    const button = tabTarget.dataset.button
    //удаляем активный класс у кнопок и контента
    tabItem.forEach((item) => {
        item.classList.remove('tabs__btn-item--active')
    })
    tabContent.forEach((item) => {
        item.classList.remove('tabs__content-item--active')
    })
    //делаем нажатую кнопку активной 
    tabTarget.classList.add('tabs__btn-item--active')
    //по дата атрибуту показываем контент-таб  
    const targetContentItem = document.querySelector(`#${button}`)
    targetContentItem.classList.add('tabs__content-item--active')
}