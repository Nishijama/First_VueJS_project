# Basic cheat-sheet:

## Into - random user generator



### Simple setup

We can use Vue without installing the CLI by including 
```
<script src="https://unpkg.com/vue@3"></script>
```

The basic setup is to include div with id="app" in the html template.



### Passing data

 In the app.js file we can use the following syntax to pass variables/data to the html template:

```
const app = Vue.createApp({
    data() {
        return {
            firstName: 'Felipe',
        }
    },
})
app.mount('#app')
```

In the html template (staying within the 'app' div) we can reference the variables by following syntax similar to React's, e.g.:
```
<h3>Email: {{email}}</h3>
```

To reference some variables, e.g., img src, we have to use 'v-bind:' (or just':' for short) prefix like so:
```
        <img v-bind:class="gender" v-bind:src="picture" :alt="`${firstName} ${lastName}`">
```


### Events and methods

To handle events we can use v-on: prefix, e.g., v-on.click="getUser()"

This will call a method getUser() that we have to define within our createApp() funciton.
We can use 'this' keyword to refer to data defined in the data function:

```
const app = Vue.createApp({
    data() {
        return {
            firstName: 'Felipe',
        }
    },
    methods: {
        getUser() {
            this.firstName = "Nala";
            console.log(this.firstName);
        }
    }
})
app.mount('#app')
```

### API integration with fetch

```
        async getUser() {

            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            
            this.firstName = results[0].name.first;
        }
```