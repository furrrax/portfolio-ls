<template lang="pug">
    .comments
        .header-container.container
            h1.header-title Блок "Отзывы"
        .comments-container.container
            form.comments-edit
                .comments-edit-wrapper
                    h2.comments-edit-maintitle Новый отзыв
                    .comments-edit-maincontent
                        .comments-edit-photo-add
                            .comments-edit-photo-content
                                .comments-edit-photo
                                    .comments-edit-photo-icon
                                button.comments-edit-load-button.admin-button Добавить фото
                        .comments-edit-content
                            .comments-edit-content-container
                                .comments-edit-row-author
                                    .comments-edit-row-author-name
                                        p.comments-edit-title.comments-edit-title-name Имя автора
                                        input(type="text" placeholder="Ковальчук Дмитрий").comments-edit-input.comments-edit-input-name
                                    .comments-edit-row-author-occ
                                        p.comments-edit-title.comments-edit-title-link Титул автора
                                        input(type="text" placeholder="Основатель LoftSchool").comments-edit-input.comments-edit-input-link
                                .comments-edit-row.comments-edit-row-comment
                                    p.comments-edit-title.comments-edit-title-desc Отзыв
                                    textarea(placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!").comments-edit-input.comments-edit-input-desc                                
                    .comments-edit-btns
                        button.comments-edit-btn-cancel.admin-button Отмена
                        button.comments-edit-btn-save.admin-button Сохранить

            ul.comments-maincontent
                li.comments-bar.comments-bar-add
                    .comments-bar-add-content
                        button.comments-bar-add-button
                        p.comments-bar-add-desc
                            | Добавить
                            | отзыв
            
                li.comments-bar
                    .comments-bar-header
                        .comments-bar-ava
                            img(src='../../../images/content/comments/vladimir.jpg').comments-bar-ava-pic
                        .comments-bar-user
                            .comments-bar-user-name Владимир Сабанцев
                            .comments-bar-user-occ Преподаватель
                    .comments-bar-content
                        p.comments-bar-content-desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                        .comments-bar-btns
                            button.comments-bar-btn
                                .comments-bar-btn-text Править
                                .comments-bar-btn-edit
                            button.comments-bar-btn
                                .comments-bar-btn-text Удалить
                                .comments-bar-btn-delete

                li.comments-bar
                    .comments-bar-header
                        .comments-bar-ava
                            img(src='../../../images/content/comments/dima.jpg').comments-bar-ava-pic
                        .comments-bar-user
                            .comments-bar-user-name Ковальчук Дмитрий
                            .comments-bar-user-occ Основатель LoftSchool
                    .comments-bar-content
                        p.comments-bar-content-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        .comments-bar-btns
                            button.comments-bar-btn
                                .comments-bar-btn-text Править
                                .comments-bar-btn-edit
                            button.comments-bar-btn
                                .comments-bar-btn-text Удалить
                                .comments-bar-btn-delete

                li.comments-bar
                    .comments-bar-header
                        .comments-bar-ava
                            img(src='../../../images/content/comments/vladimir.jpg').comments-bar-ava-pic
                        .comments-bar-user
                            .comments-bar-user-name Владимир Сабанцев
                            .comments-bar-user-occ Преподаватель
                    .comments-bar-content
                        p.comments-bar-content-desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                        .comments-bar-btns
                            button.comments-bar-btn
                                .comments-bar-btn-text Править
                                .comments-bar-btn-edit
                            button.comments-bar-btn
                                .comments-bar-btn-text Удалить
                                .comments-bar-btn-delete

                li.comments-bar
                    .comments-bar-header
                        .comments-bar-ava
                            img(src='../../../images/content/comments/dima.jpg').comments-bar-ava-pic
                        .comments-bar-user
                            .comments-bar-user-name Ковальчук Дмитрий
                            .comments-bar-user-occ Основатель LoftSchool
                    .comments-bar-content
                        p.comments-bar-content-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                        .comments-bar-btns
                            button.comments-bar-btn
                                .comments-bar-btn-text Править
                                .comments-bar-btn-edit
                            button.comments-bar-btn
                                .comments-bar-btn-text Удалить
                                .comments-bar-btn-delete


</template>

<script>
export default {
    
}
</script>