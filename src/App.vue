<template>
  <div id="app">
     <v-app id="keep">
        <v-app-bar
          app
          clipped-left
          color="amber">
          <v-app-bar-nav-icon @click="proposals = !proposals" />
          <span class="title ml-3 mr-5">My first Project&nbsp;<span class="font-weight-light">Relativiz</span></span>
          <v-text-field
            solo-inverted
            flat
            hide-details
            label="Search"
            prepend-inner-icon="search"
          />

          <v-spacer />
        </v-app-bar>

        <v-navigation-drawer
          v-model="proposals"
          app
          clipped
          color="grey lighten-4">
          <v-list
            dense
            class="grey lighten-4"
          >
          <template v-for="(item, i) in items">
            <v-row
              v-if="item.heading"
              :key="i"
              align="center"
            >
              <v-col cols="6">
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-col>
              <v-col
                cols="6"
                class="text-right"
              >
                <v-btn
                  small
                  text
                >edit</v-btn>
              </v-col>
            </v-row>
            <v-divider
              v-else-if="item.divider"
              :key="i"
              dark
              class="my-4"
            />
            <v-list-item
              v-else
              :key="i"
              link
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="grey--text">
                  <router-link v-bind:to="item.link" @click.prevent="logout">{{ item.text }}</router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          </v-list>
        </v-navigation-drawer>

        <v-content>
          <v-container
            fluid
            class="grey lighten-4 fill-height"
          >
            <v-row
              justify="center"
              align="center"
            >
              <v-col class="grow">
                  <router-view></router-view>
              </v-col>
            </v-row>
          </v-container>
        </v-content>
        <v-footer>
        <v-spacer></v-spacer>
        <div>&copy; Mebdesign {{ new Date().getFullYear() }}</div>
        </v-footer>
     </v-app>
  </div>
</template>

<script>

  export default {
    props: {
      source: String,
      link: String
    },
    data: () => ({
      proposals: {
        t_firstname: '',
        t_lastname: '',
        t_email: '',
        e_firstname: '',
        e_lastname: '',
        e_email: '',
        body: ''
      },
      drawer: null,
      items: [
        { icon: 'lightbulb_outline', text: 'Logout', link:'/logout' },
        { icon: 'touch_app', text: 'Login', link:'/login' },
        { divider: true },
        { heading: 'Labels' },
        { icon: 'add', text: 'Create new Proposal', link:'/proposals/new' },
        { divider: true },
        { icon: 'archive', text: 'Archive - All proposals', link:'/proposals/' },
        { icon: 'delete', text: 'Trash',  link:'/trash' },
        { divider: true },
        { icon: 'settings', text: 'Settings',  link:'/settings' },
        { icon: 'chat_bubble', text: 'Trash',  link:'/trash' },
        { icon: 'help', text: 'Help',  link:'/help' },
        { icon: 'phonelink', text: 'App downloads',  link:'/downloads' },
        { icon: 'keyboard', text: 'Keyboard shortcuts',  link:'/keyboard' },
      ],
    }),
  }
</script>

