new Vue({
    el: '#container',
    data: {
            output1: '',
            output2: ''
    },
      methods: {
        showAlert() {
            alert('Alert Initialization Complete!')
        },
        setOutput1(event) {
            this.output1 = event.target.value
        },
        setOutput2(event) {
            this.output2 = event.target.value
        }
    }
})