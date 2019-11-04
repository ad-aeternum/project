new Vue({
	el:'#reg',
	data:{
		message:"higay",
		a: '',
		b: '',
		login: [],
		password: []
	},
	methods:{
		close: function() {
			document.getElementById('reg').style.display="none"
		},
		registr: function () {
			this.login.push(this.a),
			this.password.push(this.b)
			
		}
	}
});