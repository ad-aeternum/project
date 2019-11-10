new Vue({
	el:'#reg',
	data:{
		a: '',
		b: '',
		login: ['admin',],
		password: ['admin',]
	},
	methods:{
		close: function () {
			document.getElementById('reg').style.display="none"
		},
		registr: function () {
			this.login.push(this.a),
			this.password.push(this.b)
			
		},
		lin: function () {
			if (this.login == this.a) {
					if (this.password == this.b) {
						window.location.href= 'cabinet.html'
				}else{ alert ("err log or pass not founded") }
			}else{ alert ("err log or pass not founded") }
		}
	}
});

/*
registr: function () {
			this.login.push(this.a),
			this.password.push(this.b)
			
		},


if (this.login == this.a) {
				alert("a")
			}


debug: function () {
			alert ('debug')
		}
*/