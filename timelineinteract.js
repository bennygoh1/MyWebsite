// Timeline Tabs
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('timelineActive')
        })
        target.classList.add('timelineActive')

        tab.forEach(tab =>{
            tab.classList.remove('timelineActive')
        })
        tab.classList.add('timelineActive')
    })
})