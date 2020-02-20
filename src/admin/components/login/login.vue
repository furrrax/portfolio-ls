<template lang="pug">
    .auth
        .auth-container
            form.auth-form
                .auth-form-container
                    .auth-title Авторизация
                    .auth-login
                        .auth-login-title Логин
                        input(type="text" placeholder="Terminator_2000").auth-login-input
                    .auth-password
                        .auth-password-title Пароль
                        input(type="password" placeholder="********").auth-password-input
                    button.auth-button Отправить

</template>

<script>
export default {
    
}
</script>