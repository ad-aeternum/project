var main = new Vue({
	el:'#main',
	data:{
		a: '',
		b: [],
		x: 0,
		c:[
		one = true,
		two = false,
		three = false,
		four = false,
		five = false,
		six = false],
	},
	methods:{
		move: function () {
		while(this.x!=6){
			this.c[this.x] = false,
			this.x++}
		this.c[0] = true
		this.x = 0
		},
		move2: function () {
		while(this.x!=6){
			this.c[this.x] = false,
			this.x++}
		this.c[1] = true
		this.x = 0
		},
		move3: function () {
			while(this.x!=6){
			this.c[this.x] = false,
			this.x++}
		this.c[2] = true
		this.x = 0
		},
		move4: function () {
			while(this.x!=6){
			this.c[this.x] = false,
			this.x++}
		this.c[3] = true
		this.x = 0
		},
		move5: function () {
			while(this.x!=6){
			this.c[this.x] = false,
			this.x++}
		this.c[4] = true
		this.x = 0
		},
		move6: function () {
			while(this.x!=6){
			this.c[this.x] = false,
			this.x++}
		this.c[5] = true
		this.x = 0
		},
		pozh: function () {
			this.b.push(this.a)
		}
	}
});