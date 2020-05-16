<template>
    <div>
        <h2>{{ pageTitle }}</h2>
        <v-form @submit.prevent="login">
        <v-container>
            <v-row>
            <v-col
            cols="12"
            md="6"
            >
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Saisissez votre email"
            required
            ></v-text-field>
            </v-col>

            <v-col
            cols="12"
            md="6">
                <v-text-field
                v-model="password"
                type="password"
                :rules="passwordRules"
                :counter="10"
                label="Mot de passe"
                required
                ></v-text-field>
            </v-col>
            <button>Submit</button>
            </v-row>
        </v-container>
        </v-form>
    </div>

</template>

<script>

import axios from 'axios'
import EventBus from './EventBus'


export default {
    name: 'LoginComponent',
    data(){
    return {
        pageTitle: 'Connexion',
        valid: true,
        password: '',
        passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Passwd must be less than 10 characters',
        ],
        email: '',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        ],
        checkbox: false,

    }
    },
    methods: {
        login() {
            axios.post(`http://localhost:3000/users/login/`, {
                email: this.email,
                password: this.password
            })
            .then(res => {
                localStorage.setItem('usertoken', res.data)
                this.email= '',
                this.password=''

            })
            .catch(err => {
                /* eslint no-console: "off" */
                console.log(err)
                /* eslint no-console: "off" */
            })
            this.emitMethod()
        },
        emitMethod(){
            EventBus.$emit('logged-in', 'loggedin')
            this.router.push('http://localhost:3000/users/profile')
        },
        validate () {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
            },
            reset () {
            this.$refs.form.reset()
            },
            resetValidation () {
            this.$refs.form.resetValidation()
        },
    }

}
</script>