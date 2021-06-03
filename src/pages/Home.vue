<template>
  <div id="home">
    <div v-if="!isResult">
      <div class="col-md-6 mx-auto mb-5">
        <div class="text-center fs-3 prototype mb-4" data-aos="fade-up">
          Pengumuman Kelulusan.
        </div>
        <div class="card bg-shadow" data-aos="fade-up" data-aos-duration="700">
          <div class="card-header">
            Masukkan NIS pada form input berikut!
          </div>
          <div class="card-body">
            <!-- <div class="alert alert-danger" v-if="!isNotFound">Error...</div> -->
            <form @submit.prevent="onPeriksa">
              <div class="input-group my-3">
                <input
                  v-model="NIS"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="contoh: 181910348"
                  autofocus
                  required
                />
                <button class="btn bg-red text-white btn-lg">PERIKSA</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-6 mx-auto p-4 my-5 bg-yellow rounded-3 bg-shadow" data-aos="fade-up" data-aos-duration="750">
        <div class="container-fluid">
          <h1 class="fs-3 fw-bold">PERINGATAN TEGAS!</h1>
          <div class="fs-5 text-grey">
            Dimohon untuk tidak melakukan vandalisme (corat-coret), konvoi
            menggunakan kendaraan, bertindak anarkis dan melakukan kegiatan yang
            melawan hukum lainnya. Apabila hal tersebut tidak di indahkan maka
            pihak sekolah tidak akan menerbitkan surat kelakuan baik.
            <p class="mt-4">Terimakasih atas perhatiannya</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isResult">
      <div class=" my-3 mt-5 py-5 text-center">
        <div class="display-3 fredoka-one" data-aos="zoom-in">SELAMAT</div>
        <div v-for="data in result" :key="data.id" data-aos="zoom-in" data-aos-duration="700" >
          <div class="display-3 mt-5 pt-5 fw-bold prototype">{{ data.Nama }}</div>
          <div class="fs-6 mb-5 text-grey">NIS: {{ data.NIS }} / NISN: {{ data.NISN }}</div>
          <span class="display-5 text-grey fredoka-one">dinyatakan</span>
          <span class="display-5 text-success fredoka-one"> {{ data.dinyatakan.toUpperCase() }}</span>
        </div>
      </div>
      <hr>
      <div class="my-5 pt-5 text-center" data-aos="zoom-in" data-aos-duration="900">
        <button class="btn btn-outline-danger" @click="reset">kembali</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      data: "",
      NIS: "",
      result: "",
      isResult: false,
    };
  },
  mounted() {
    this.onPeriksa();
  },
  methods: {
    async onPeriksa() {
      let url = "http://localhost/~purple/kelulusan"
      // let url2 = "http://smkn4-tsm.sch.id:2020"
      fetch(`${url}/api.php`)
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          this.result = this.data.filter((item) => item.NIS == this.NIS);
          if (this.result.length > 0) {
            this.isResult = true
          }
        });
    },
    reset() {
      // reset semua hasil
      this.isResult = false;
      this.result = "";
      this.NIS = "";
    },
  },
};
</script>
