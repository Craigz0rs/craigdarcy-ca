let vm = new Vue({
    el: '#nav-tabs',
    data: {

    },
    methods: {
        showProjects: function (event) {
            const target = event.target;
            console.log(target);
            if(!target.classList.contains('nav-active')) {
                target.classList.add('nav-active');
            }
            if (target === about_toggle) {
                about_me.style.display = "block"
                projects.style.display = "none"
            } else {
                about_me.style.display = "none"
                projects.style.display = "block"
            }
        }
    }
});