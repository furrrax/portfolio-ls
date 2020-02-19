<template lang="pug">
    .works
        .header-container.container
            h1.header-title Блок "Работы"
        .works-container.container
            form.works-edit
                .works-edit-wrapper
                    h2.works-edit-maintitle Редактирование работы
                    .works-edit-maincontent
                        .works-edit-dragndrop
                            .dragndrop-content
                                p.dragndrop-desc
                                    | Перетащите или загрузите
                                    | для загрузки изображения
                                button.dragndrop-load-button.admin-button загрузить
                        .works-edit-content
                            .works-edit-content-container
                                .works-edit-row.works-edit-row-name
                                    p.works-edit-title.works-edit-title-name Название
                                    input(type="text" placeholder="Дизайн сайта для автосалона Porsche").works-edit-input.works-edit-input-name
                                .works-edit-row.works-edit-row-link
                                    p.works-edit-title.works-edit-title-link Ссылка
                                    input(type="text" placeholder="https://www.porsche-pulkovo.ru").works-edit-input.works-edit-input-link
                                .works-edit-row.works-edit-row-desc
                                    p.works-edit-title.works-edit-title-desc Описание
                                    textarea(placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей").works-edit-input.works-edit-input-desc                                
                                .works-edit-row.works-edit-row-tags
                                    p.works-edit-title.works-edit-title-tags Добавление тэга
                                    input(type="text" placeholder="jQuery, HTML5, Vue.js").works-edit-input.works-edit-input-tags
                                .works-edit-row.works-edit-row-tags-block
                                    button.works-tag 
                                        .works-tag-text HTML5
                                        .works-tag-cross
                                    button.works-tag
                                        .works-tag-text CSS
                                        .works-tag-cross
                                    button.works-tag
                                        .works-tag-text JavaScript
                                        .works-tag-cross
                    .works-edit-btns
                        button.works-edit-btn-cancel.admin-button Отмена
                        button.works-edit-btn-save.admin-button Сохранить
                    
            ul.works-maincontent
                li.works-bar.works-bar-add
                    .works-bar-add-content
                        button.works-bar-add-button
                        p.works-bar-add-desc
                            | Добавить
                            | работу

                li.works-bar.works-bar-edit
                    .works-bar-header
                        img(src='../../../images/content/work/slides/slider-1.jpg').works-bar-header-image
                        .works-bar-tags
                            button.works-tag 
                                .works-tag-text HTML5
                            button.works-tag 
                                .works-tag-text CSS
                            button.works-tag 
                                .works-tag-text JavaScript
                    .works-bar-content
                        p.works-bar-content-title Сайт школы образования
                        p.works-bar-content-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        a(href="#").works-bar-content-link http://loftschool.ru
                        .works-bar-btns
                            button.works-bar-btn
                                .works-bar-btn-text Править
                                .works-bar-btn-edit
                            button.works-bar-btn
                                .works-bar-btn-text Удалить
                                .works-bar-btn-delete
                        
                li.works-bar
                    .works-bar-header
                        img(src='../../../images/content/work/slides/slider-2.jpg').works-bar-header-image
                        .works-bar-tags
                            button.works-tag 
                                .works-tag-text HTML5
                            button.works-tag 
                                .works-tag-text CSS
                            button.works-tag 
                                .works-tag-text JavaScript
                    .works-bar-content
                        p.works-bar-content-title Сайт школы образования
                        p.works-bar-content-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        a(href="#").works-bar-content-link http://loftschool.ru
                        .works-bar-btns
                            button.works-bar-btn
                                .works-bar-btn-text Править
                                .works-bar-btn-edit
                            button.works-bar-btn
                                .works-bar-btn-text Удалить
                                .works-bar-btn-delete

                li.works-bar
                    .works-bar-header
                        img(src='../../../images/content/work/slides/slider-3.jpg').works-bar-header-image
                        .works-bar-tags
                            button.works-tag 
                                .works-tag-text HTML5
                            button.works-tag 
                                .works-tag-text CSS
                            button.works-tag 
                                .works-tag-text JavaScript
                    .works-bar-content
                        p.works-bar-content-title Сайт школы образования
                        p.works-bar-content-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        a(href="#").works-bar-content-link http://loftschool.ru
                        .works-bar-btns
                            button.works-bar-btn
                                .works-bar-btn-text Править
                                .works-bar-btn-edit
                            button.works-bar-btn
                                .works-bar-btn-text Удалить
                                .works-bar-btn-delete

                li.works-bar
                    .works-bar-header
                        img(src='../../../images/content/work/slides/slider-4.jpg').works-bar-header-image
                        .works-bar-tags
                            button.works-tag 
                                .works-tag-text HTML5
                            button.works-tag 
                                .works-tag-text CSS
                            button.works-tag 
                                .works-tag-text JavaScript
                    .works-bar-content
                        p.works-bar-content-title Сайт школы образования
                        p.works-bar-content-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        a(href="#").works-bar-content-link http://loftschool.ru
                        .works-bar-btns
                            button.works-bar-btn
                                .works-bar-btn-text Править
                                .works-bar-btn-edit
                            button.works-bar-btn
                                .works-bar-btn-text Удалить
                                .works-bar-btn-delete
                        
</template>

<script>
export default {
    
}
</script>