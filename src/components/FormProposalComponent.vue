<template>
  <div v-if="isEditing">
    <v-form id="formProposalUpdate" @submit.prevent="updateProposal">
        <v-container>
          <h2>{{title}}</h2>
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  :placeholder="proposals[0].t_firstname"
                  v-model="t_firstname"
                  label="Prénom de l'emetteur"
                  required
                  ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  v-model="t_lastname"
                  :placeholder="proposals[0].t_lastname"
                  label="Nom de l'emetteur"
                  required
                  ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  v-model="t_email"
                  :placeholder="proposals[0].t_email"
                  label="email de l'emetteur"
                  required
                  ></v-text-field>

                </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  v-model="e_firstname"
                  :placeholder="proposals[0].e_firstname"
                  label="Prénom du destinataire"
                  required
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  v-model="e_lastname"
                  :placeholder="proposals[0].e_lastname"
                  label="Nom du destinataire"
                  required
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  v-model="e_email"
                  :placeholder="proposals[0].e_email"
                  label="Email du destinataire"
                  required
                  ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  v-model="body"
                  :placeholder="proposals[0].body"
                  label="Saisissez votre texte ici..."
                  type="text"
                  name="body"
                ></v-textarea>

              </v-col>
            </v-row>
        </v-container>
        <v-btn type="submit" text small form="formProposalUpdate">Mettre à jour</v-btn>
    </v-form>
  </div>

  <div v-else>
     <v-form id="formProposalCreate" @submit.prevent="addProposal">
        <v-container>
          <h2>{{title}}</h2>
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  v-model="t_firstname"
                  label="Prénom de l'emetteur"
                  required
                  ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  v-model="t_lastname"
                  label="Nom de l'emetteur"
                  required
                  ></v-text-field>
                </v-col>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  v-model="t_email"
                  label="email de l'emetteur"
                  required
                  ></v-text-field>

                </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  v-model="e_firstname"
                  label="Prénom du destinataire"
                  required
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  v-model="e_lastname"
                  label="Nom du destinataire"
                  required
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                  v-model="e_email"
                  label="Email du destinataire"
                  required
                  ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  v-model="body"
                  label="Saisissez votre texte ici..."
                  type="text"
                  name="body"
                ></v-textarea>

              </v-col>
            </v-row>
        </v-container>
       <v-btn type="submit" text small form="formProposalCreate">Créer</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'FormProposalComponent',

    data() {
      return {
        title: 'Création de propale',
        proposals: [{}],
        t_firstname: '',
        t_lastname: '',
        t_email:'',
        e_firstname:'',
        e_lastname:'',
        e_email:'',
        body:'',
        error: ''
      }
    },
    props: {
      isEditing: {
        type: Boolean,
      }
    },
    methods: {
      addProposal() {
        let currentObj = this
        /* eslint no-console: "off" */
        console.log(currentObj)
        /* eslint no-console: "off" */
        axios.post(`${process.env.VUE_APP_URL}/proposals/`, {
            t_firstname: this.t_firstname,
            t_lastname: this.t_lastname,
            t_email: this.t_email,
            e_firstname: this.e_firstname,
            e_lastname: this.e_lastname,
            e_email: this.e_email,
            body: this.body
        })
        .then(function (response) {
            currentObj.proposals = response.data;
        })
        .catch(function (error) {
            currentObj.proposals = error;
        });
        this.$router.push("/proposals");
      },
      getProposal () {
        axios
        .get(`${process.env.VUE_APP_URL}/proposals/${this.$route.params.id}`)
        .then(response => (this.proposals = response.data.proposal))
      },
      updateProposal () {
        let currentObj = this
        /* eslint no-console: "off" */
        console.log(currentObj)
        /* eslint no-console: "off" */

        axios.put(`${process.env.VUE_APP_URL}/proposals/${this.$route.params.id}`,{
            t_firstname: currentObj.t_firstname,
            t_lastname: currentObj.t_lastname,
            t_email: currentObj.t_email,
            e_firstname: currentObj.e_firstname,
            e_lastname: currentObj.e_lastname,
            e_email: currentObj.e_email,
            body: currentObj.body
        })
        .then(function (response) {
            currentObj.proposals = response.data;
        })
        .catch(function (error) {
            currentObj.proposals = error;
        })
        this.$router.push("/proposals");
      }
    },
    mounted(){
      if( this.isEditing === true ){
          this.getProposal(),
          this.title = 'Edition de propale'
      }
    }
  }

</script>

<style scoped>

</style>