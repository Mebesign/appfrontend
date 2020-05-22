<template>
    <div>

        <form v-on:submit.prevent="register">
            <h1>Register</h1>


            <label for="first_name">first name</label>
            <input type="text"
            v-model="first_name"
            placeholder='Saisissez votre first name'
            >
            <label for="last_name">Last name</label>
            <input type="text"
            v-model="last_name"
            placeholder='Saisissez votre last name'
            >
            <label for="email">email</label>
            <input type="email"
            v-model="email"
            placeholder='Saisissez votre email'
            >
            <label for="password">Passwd</label>
            <input type="password"
            v-model="password"
            placeholder='Saisissez votre pass'
            >
            <button type="submit">Register</button>
        </form>

    </div>

</template>

<script>

import axios from 'axios'

export default {
    data(){
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            axios.post(`${process.env.VUE_APP_URL}/users/register/`, {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password
            })
            .then(res => {
                localStorage.setItem('usertoken', res.data)
                this.first_name='',
                this.last_name='',
                this.email='',
                this.password='',
                this.router.push('/login')
            })
            .catch(err => {
                /* eslint no-console: "off" */
                console.log(err)
                /* eslint no-console: "off" */
            })
        }
    }

}
</script>