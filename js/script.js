new Vue({

   el: "#app",
   data(){
      return {
      	taskList: [],
      	task: "",
      	color:""
      }
   },

   methods: {

   	/* Add-task function */

   	addTask: function() {
   		if(this.task != ""){
   		   this.taskList.push(this.task);
   		   this.task = "";
   		   this.color = "#fff";
   		}else{
   			this.color = "#e74c3c";
   		}
   	},

   	/* Remove function */

   	removeTask:function(index){
   		this.taskList.splice(index, 1);
   	}
   },
});