<template>
    <div>
        <nav>
            <a href="/">Logo</a>
        </nav>
        <div>
            <form @submit.prevent='Signup' >
                <input type="email" name='email' id='auth-email' placeholder="Почта" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" >
                <input type="text" name='username' id='auth-username' placeholder="Имя пользователя" required pattern='.{5,30}' >
                <input type="password" name='password' id='auth-password' placeholder="Пароль" required >
                <div>
                    <button type='submit'>Зарегистрироваться</button>
                </div>
            </form>
            <nav>
                <p>Уже есть аккаунт?<a href="#">Войти</a> </p>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sign up',
    data() {
        return {

        }
    },
    methods: {

    },


}
</script>

<style>

</style>