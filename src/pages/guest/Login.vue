<template>
  <q-layout class="bg-blue-grey-1" view="lHh Lpr Lff">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pa-md">
            <q-card flat class="text-blue-grey-14">
              <div class="row items-center">
                <div class="col-md-6 col-sm-12-col-xs-12">
                  <div class="row q-pt-md q-pb-md">
                    <div class="col-md-8 offset-2">
                      <q-img src="statics/login.png"></q-img>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <q-card-section>
                    <div class="text-h4">Movie App</div>
                    <div>Login Akun Anda</div>
                  </q-card-section>
                  <q-form
                    @submit="login"
                  >
                    <q-card-section>
                      <q-input v-model="username" label="Username"/>
                      <q-input type="password" v-model="password" label="Password"/>
                      <q-file color="teal" filled v-model="image" label="Label">
                        <template v-slot:prepend>
                          <q-icon name="cloud_upload" />
                        </template>
                      </q-file>
                    </q-card-section>
                    <q-card-section>
                      <q-btn class="full-width" @click="login()" unelevated color="primary" label="Login"/>
                      <q-btn class="full-width q-mt-md" :to="{ name: 'registerPage' }" flat unelevated color="primary" label="Register"/>
                    </q-card-section>
                  </q-form>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      password: null,
      image: null
    }
  },
  methods: {
    login () {
      const data = {
        lt: 233,
        lg: 42,
        idUser: 8
      }
      const formData = new FormData()
      formData.append('data', JSON.stringify(data))
      formData.append('image', this.image)
      this.$axios.post('absen', formData).then(res => {
        console.log(res)
        // if (res.data.sukses) {
        //   this.$q.localStorage.set('dataUser', res.data.data)
        //   if (res.data.data.level === 1) {
        //     this.$router.push({ name: 'dashboardAdmin' })
        //   } else {
        //     this.$router.push({ name: 'homeUser' })
        //   }
        // } else {
        //   this.$showNotif(res.data.pesan, 'negative')
        // }
      })
    }
  }
}
</script>
