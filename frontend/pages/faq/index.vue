<template>
  <div>
    <v-container
      class="justify-center text-center"
      style="margin-bottom: 20% !important"
    >
      <h1 class="display-3">
        <span class="font-weight-black">FAQ (Frequently Asked Questions) </span>
      </h1>
      <div class="mt-10">
        <v-expansion-panels>
          <v-expansion-panel v-for="item in faq" :key="item.question">
            <v-expansion-panel-header>
              <span class="font-weight-bold"> Q : {{ item.questions }} </span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <span class="font-weight-bold"> A : </span>{{ item.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          questions: "Where can I find the titles of the FAO staff?",
          answer:
            "The FAO staff titles and the FAO Structure are under the thematic collection denominated “FAO STRUCTURE”. However, please remember that the names of the officers are not given here and that titles such as “Chief, …. Service” have to be split when searching for them: 1) Chief and 2) The name of the Service.",
        },
        {
          questions: "How can I get a list of FAO names of countries?",
          answer:
            "Try the Download function under “Services” in the NOCS database. You can select as many combinations as you wish and export them in either Excel or pdf format.",
        },
        {
          questions:
            "I do not find abbreviations of two letters such as those of the FAO Departments. How come?",
          answer:
            "For abbreviations of less than 3 letters you have to select the option “Exact match” under the label “Options” of the Home page",
        },
        {
          questions: "I see many repeated records in the search results. Why?",
          answer: `There might be repetitions due to the joining of all the thematic collections together, but mainly the system retrieves as many occurrences of the term as are present in the database, in all languages. Thus if the English abbreviation “SIPAM” is used also in French and Spanish, you will get 3 SIPAM in the list of results: one for the English, one for the French and one for the Spanish language.

            Furthermore, different technical areas have different notions of the meaning of a term and we try to retrieve and store all of them.

            In the case of FAO Structure, full titles might appear identical, but the acronyms are different. For example: NRLD, TCID and AGSD are different organizational symbols, but they correspond to the same full English title: Office of Director. Thus you have to be careful when searching for them.`,
        },
        {
          questions: "Where can I find the titles of the FAO staff?",
          answer:
            "The FAO staff titles and the FAO Structure are under the thematic collection denominated “FAO STRUCTURE”. However, please remember that the names of the officers are not given here and that titles such as “Chief, …. Service” have to be split when searching for them: 1) Chief and 2) The name of the Service.",
        },
        {
          questions: "Can I get an extraction of terms from the Portal?",
          answer:
            "It is possible to get extractions of the database on demand, sending an appropriate request to the following address:  faoterm@fao.org.  However, we wish to remind users that a terminology database is quite dynamic and it changes more frequently than expected, because of the evolving nature of the languages and the new focus given to some areas of FAO activity. An online double checking of equivalents is always recommended after a while.",
        },
        {
          questions: "Where can I find the titles of the FAO staff?",
          answer:
            "The FAO staff titles and the FAO Structure are under the thematic collection denominated “FAO STRUCTURE”. However, please remember that the names of the officers are not given here and that titles such as “Chief, …. Service” have to be split when searching for them: 1) Chief and 2) The name of the Service.",
        },
        {
          questions: "Where can I find the titles of the FAO staff?",
          answer:
            "The FAO staff titles and the FAO Structure are under the thematic collection denominated “FAO STRUCTURE”. However, please remember that the names of the officers are not given here and that titles such as “Chief, …. Service” have to be split when searching for them: 1) Chief and 2) The name of the Service.",
        },
        {
          questions: "Where can I find the titles of the FAO staff?",
          answer:
            "The FAO staff titles and the FAO Structure are under the thematic collection denominated “FAO STRUCTURE”. However, please remember that the names of the officers are not given here and that titles such as “Chief, …. Service” have to be split when searching for them: 1) Chief and 2) The name of the Service.",
        },
      ],
    };
  },
};
</script>
