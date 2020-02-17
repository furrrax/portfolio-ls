<template lang="pug">
    div
        h1 {{username}}
        h2 {{title}}
        p.description Внутреннее описание
        button.button Внутренняя кнопка
        input(type="text" v-model="username")
        input(
            v-bind="$attrs"
        )

    
</template>

<script>
export default {
    inheritAttrs: false,
    data() {
        return {
            title: 'Hi there!!!',
            username: ""
        };
    },
    methods: {
        handleclick() {
            console.log(this.$attrs);
        }
    }
};
</script>>