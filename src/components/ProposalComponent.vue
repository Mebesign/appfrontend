<template>
  <div>
    <h2>All proposals</h2>
    <div v-for="(proposal, index) in proposals"
     v-bind:key="proposal.id"
    v-bind:index="index"
    >
       <v-card
            class="mx-auto"
            max-width="70%"
            outlined
          >
          <h3> {{ proposal.t_firstname }} <small><span>{{ proposal.t_lastname }}</span></small></h3>
          <v-btn text small v-bind:to=" `/proposals/${proposal.id}` ">Détail</v-btn>&nbsp;
          <v-btn text small v-bind:to=" `/proposals/${proposal.id}/edit` ">Modifier</v-btn>&nbsp;
          <v-btn text small color="error" href="#" @click="remove(index, proposal.id)">Delete</v-btn>
      </v-card><br>
    </div>
  </div>
</template>

<script>

import axios from 'axios'


export default {
  name: 'ProposalComponent',
  data() {
    return {
      proposals: {
        t_firstname: '',
        t_lastname: '',
        t_email: '',
        e_firstname: '',
        e_lastname: '',
        e_email: '',
        body: ''
      },
      error: ''
    }
  },
  mounted() {
    /* eslint no-console: "off" */
    console.log(process.env.VUE_APP_URL)
    console.log(process.env.VUE_APP_TITLE)
    /* eslint no-console: "off" */
  axios
    .get(`${process.env.VUE_APP_URL}/proposals/`)
    .then(response => (this.proposals = response.data.proposal))
  },
  methods: {
    remove(index, key) {
      axios
      .delete(`${process.env.VUE_APP_URL}/proposals/${key}`)
      .then(this.proposals.splice(index, 1))
    }
  }
}
</script>
