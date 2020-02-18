<template lang="pug">
    .about
        .header-container.container
            h1.header-title Блок "Обо мне"
            button.add-btn-header
                .add-btn
                .add-btn-desc Добавить группу
        .groups-container.container
            form.add
                .group-wrapper
                    .new-group
                        .new-group-name
                            input(type="text" placeholder="Название новой группы").new-group-name-item
                        .new-group-btns
                            button.btn-confirm
                            button.btn-cancel
                    .new-skills
                        .add-skill
                            .add-new-skill
                                input(type="text" placeholder="Новый навык").add-new-skill-item
                            .add-new-percent
                                input(type="text" placeholder="50").add-new-percent-item
                            button.add-btn.add-btn-skill
            form.group
                .group-wrapper
                    .edit-group
                        input(type="text" placeholder="Workflow").group-name
                        button.group-btn-edit
                    .edit-skills
                        .skill-active
                            input(type="text" placeholder="Git").edit-skill-name
                            input(type="text" placeholder="100").edit-skill-percent
                            button.btn-edit
                            button.btn-remove
                        .skill-active
                            input(type="text" placeholder="Terminal").edit-skill-name
                            input(type="text" placeholder="90").edit-skill-percent
                            .new-group-btns
                                button.btn-confirm
                                button.btn-cancel
                        .skill-active
                            input(type="text" placeholder="Gulp").edit-skill-name
                            input(type="text" placeholder="80").edit-skill-percent
                            button.btn-edit
                            button.btn-remove
                        .skill-active
                            input(type="text" placeholder="Webpack").edit-skill-name
                            input(type="text" placeholder="85").edit-skill-percent
                            button.btn-edit
                            button.btn-remove
                    .new-skills
                        .add-skill
                            .add-new-skill
                                input(type="text" placeholder="Новый навык").add-new-skill-item
                            .add-new-percent
                                input(type="text" placeholder="50").add-new-percent-item
                            button.add-btn.add-btn-skill
            form.group
                .group-wrapper
                    .edit-group
                        input(type="text" placeholder="Frontend").group-name
                        button.group-btn-edit
                    .edit-skills
                        .skill-active
                            input(type="text" placeholder="HTML5").edit-skill-name
                            input(type="text" placeholder="100").edit-skill-percent
                            button.btn-edit
                            button.btn-remove
                        .skill-active
                            input(type="text" placeholder="CSS3").edit-skill-name
                            input(type="text" placeholder="90").edit-skill-percent
                            .new-group-btns
                                button.btn-confirm
                                button.btn-cancel
                        .skill-active
                            input(type="text" placeholder="JavaScript").edit-skill-name
                            input(type="text" placeholder="80").edit-skill-percent
                            button.btn-edit
                            button.btn-remove
                        .skill-active
                            input(type="text" placeholder="jQuery и Vue.js").edit-skill-name
                            input(type="text" placeholder="85").edit-skill-percent
                            button.btn-edit
                            button.btn-remove
                    .new-skills
                        .add-skill
                            .add-new-skill
                                input(type="text" placeholder="Новый навык").add-new-skill-item
                            .add-new-percent
                                input(type="text" placeholder="50").add-new-percent-item
                            button.add-btn.add-btn-skill

</template>

<script>
export default {
    
}
</script>
