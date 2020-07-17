<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList :hotCity="hotCity" :cities="cities" :letter="letter"></CityList>
    <Initials @change="handInitial" :cities="cities"></Initials>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import Initials from "./components/Initials";
export default {
  name: "city",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Initials,
  },
  data() {
    return {
      hotCity: [],
      cities: {},
      letter: ""
    };
  },
  methods: {
    getInfoCity() {
      axios.get("/api/city.json").then(this.getCityInital);
    },
    getCityInital(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.hotCity = data.hotCities;
        this.cities = data.cities;
      }
    },
    handInitial(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getInfoCity();
  }
};
</script>

<style lang="stylus" scoped></style>