﻿import Vue from 'vue'

Vue.component("log-table", {
    template: "#logTableTmpl",
    props: {
        pr_logdata: { type: Array, required: true }
    }
});