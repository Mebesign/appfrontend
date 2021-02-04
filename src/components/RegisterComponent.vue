<template>
    <div>

        <form v-on:submit.prevent="register">
            <h1>Register</h1>
            <v-container>
                <v-row>
                <v-col
                cols="12"
                md="6"
                >
                <v-text-field
                v-model="first_name"
                label="Last name"
                placeholder='Saisissez votre first name'
                required
                ></v-text-field>

                <v-text-field
                v-model="last_name"
                label="Last name"
                placeholder='Saisissez votre last name'
                required
                ></v-text-field>

                <v-text-field
                v-model="email"
                label="Email"
                type="email"
                placeholder='Saisissez votre email'
                required
                ></v-text-field>

                <v-text-field
                v-model="password"
                label="Password"
                type="password"
                placeholder='Saisissez votre password'
                required
                ></v-text-field>
                </v-col>
                </v-row>
                <button type="submit">Register</button>
            </v-container>
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
                this.password=''
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