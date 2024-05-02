const todosApp = {
    data() {
        return {
            tasks :[],
            task :{
                is_done : false
            }
        }
    },
    methods : {
        add_task(){
            if(this.task.task_name) {
                this.tasks.push(this.task)
                this.task = {
                    is_done : false
                }
                localStorage.setItem("tasks", JSON.stringify(this.tasks))
            }
            else{
                alert("Preencha com uma nova tarefa")
            }

        }
    },
    created() {
        if(localStorage.getItem("tasks")){
            this.tasks = JSON.parse(localStorage.getItem("tasks")) 
        }
    },
    updated() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
    }
};

Vue.createApp(todosApp).mount('#app');