<template lang="pug">
    .about
        img(src='../../../images/content/admin/about/about-bg.jpg').about-bg
        .header-container.container
            h1.header-title Блок "Обо мне"
            button.add-btn-header
                .add-btn
                .add-btn-desc Добавить группу
        .groups-container.container

            form.add(@submit.prevent="addNewCategory")
                .group-wrapper.group-wrapper-add
                    .new-group
                        .new-group-name
                            input(type="text" placeholder="Название новой группы" v-model="title").new-group-name-item
                        .new-group-btns
                            input(type="submit" value="").btn-confirm
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
                        .edit-group-name
                            input(type="text" placeholder="Workflow").group-name-item-active
                        .edit-group-btns
                            button.btn-confirm
                            button.btn-cancel
                    ul.edit-skills
                        li.skill-item
                            .edit-skill-name
                                input(type="text" placeholder="Git").edit-skill-name-item
                            .edit-skill-percent
                                input(type="text" placeholder="100").edit-skill-percent-item
                            .edit-group-btns
                                button.btn-edit
                                button.btn-remove
                        li.skill-item
                            .edit-skill-name
                                input(type="text" placeholder="Terminal").edit-skill-name-item
                            .edit-skill-percent
                                input(type="text" placeholder="90").edit-skill-percent-item
                            .edit-group-btns
                                button.btn-edit
                                button.btn-remove
                        li.skill-item
                            .edit-skill-name
                                input(type="text" placeholder="Gulp").edit-skill-name-item
                            .edit-skill-percent
                                input(type="text" placeholder="80").edit-skill-percent-item
                            .edit-group-btns
                                button.btn-edit
                                button.btn-remove
                        li.skill-item
                            .edit-skill-name
                                input(type="text" placeholder="Webpack").edit-skill-name-item
                            .edit-skill-percent
                                input(type="text" placeholder="85").edit-skill-percent-item
                            .edit-group-btns
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
                        .edit-group-name
                            input(type="text" placeholder="Frontend").group-name-item-active
                        .edit-group-btns
                            button.btn-confirm
                            button.btn-cancel
                    ul.edit-skills
                        li.skill-item
                            .edit-skill-name
                                input(type="text" placeholder="HTML5").edit-skill-name-item
                            .edit-skill-percent
                                input(type="text" placeholder="100").edit-skill-percent-item
                            .edit-group-btns
                                button.btn-edit
                                button.btn-remove
                        li.skill-item
                            .edit-skill-name
                                input(type="text" placeholder="CSS3").edit-skill-name-item
                            .edit-skill-percent
                                input(type="text" placeholder="90").edit-skill-percent-item
                            .edit-group-btns
                                button.btn-edit
                                button.btn-remove
                        li.skill-item
                            .edit-skill-name
                                input(type="text" placeholder="JavaScript").edit-skill-name-item
                            .edit-skill-percent
                                input(type="text" placeholder="80").edit-skill-percent-item
                            .edit-group-btns
                                button.btn-edit
                                button.btn-remove
                        li.skill-item
                            .edit-skill-name
                                input(type="text" placeholder="jQuery и Vue.js").edit-skill-name-item
                            .edit-skill-percent
                                input(type="text" placeholder="85").edit-skill-percent-item
                            .edit-group-btns
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
import { mapActions } from "vuex";
export default {
    data: () => ({
        title: ""
    }),
    methods: {
        ...mapActions("categories", ["addCategory"]),
        async addNewCategory() {
            try {
                await this.addCategory(this.title);

            } catch(error) {
                alert(error.message);
            }
        }
    }
};
</script>
