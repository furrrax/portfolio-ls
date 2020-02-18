<template lang="pug">
    .admin__nav
        .nav__container.container
            .nav
                ul.nav__list
                    li.nav__list-item(v-for="tab in tabs")
                        router-link(
                            :to="tab.href"
                        ).nav__link {{tab.title}}
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {title: "Обо мне", href: "/"},
                {title: "Работы", href: "/works"},
                {title: "Отзывы", href: "/comments"}
            ]
        }
    }
}
</script>