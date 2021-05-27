var app = new Vue(
    {
        el: "#root",
        data: {
            arrayEmails: [],
        },
        mounted: function() {
            for (i=0; i < 10; i++) {
                axios.
                get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((result) => {
                    console.log(result.data.response);
                    this.arrayEmails.push(result.data.response);
                    console.log(this.arrayEmails);
                })
            }
        }
    },
)




