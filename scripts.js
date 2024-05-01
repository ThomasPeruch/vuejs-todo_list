var all_tasks = []

const todosApp = {
    data() {
        return {
            tasks : window.all_tasks,
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
            }
            else{
                alert("Preencha com uma nova tarefa")
            }

        }
    }
};

Vue.createApp(todosApp).mount('#app');