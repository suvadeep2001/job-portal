<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <p class="title">
        
        Find your dream job today

        </p>
        <p class="subtitle">
        
        Apply for vacancies today
        
        </p>
      </div>
    </section>

<NewVacancy v-if="isAdmin" @save ="handleSubmit"/>
<Vacancy 
v-for="vacancy 
in vacancies" 
:key="vacancy.id"
:isAdmin="isAdmin" 
:vacancy="vacancy" 
@delete="handleDelete"/>

  </div>
</template>

<script>

import NewVacancy from '../components/NewVacancy.vue';

import Vacancy from '../components/Vacancy.vue';

import {vacancies} from '../../data';

export default {

    components: {
        NewVacancy,
        Vacancy
    },
    data(){

        return {
            vacancies,
            isAdmin: true
        }
    },
    methods:{
        handleSubmit(formData){
console.log('Form data',formData);

this.vacancies.unshift(formData);

        },

        handleDelete(vacancyID){
this.vacancies=this.vacancies.filter(vacancy => vacancy.id !==vacancyID)
        }
    }

}
</script>


<style>
</style>