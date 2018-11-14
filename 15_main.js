// beforeCreate
// created
// beforeMount
// mounted
// beforeUpdate
// updated
// activated
// deactivated
// beforeDestroy
// destroyed
var Test = {
	template: `
		<div>
			我是test组件{{myText}}
			<button @click="myText=myText+1">点我</button>
		</div>
	`,
	data: function() {
		return {
			myText: 'haha'
		};
	},
	beforeCreate: function() {
		//组件创建之前
		// console.log(this.myText);
		console.log('beforeCreate');
	},
	created: function() {
		//组件创建之后，应用：可以用于发起ajax请求
		// console.log(this.myText);
		console.log('created');
	},

	//小结：使用该组件（Test），就会触发以上事件函数（钩子函数）
	//created中可以操作数据 并且可以实现vue->页面的影响，应用：可以用于发起ajax请求
	
	beforeMount: function() {
		//装载数据到DOM之前被调用，
		//可以获取并输出vue启动前的DOM
		//console.log(document.body.innerHTML);
		console.log('beforeMount');
	},
	mounted: function() {
		//vue起作用，装载数据到DOM之后被调用，
		//vue启动并装载组件之后的DOM 只执行一次
		//console.log(document.body.innerHTML);
		console.log('mounted');
	},

	// 基于数据改变，影响页面的时候调用
	beforeUpdate: function() {
		console.log(document.body.innerHTML);
	},
	updated: function() {
		console.log(document.body.innerHTML);
	},
	//以上两个事件函数，是有数据更改才会触发
	//应用：beforeUpdate可以获取员DOM，
	//updated 获取新DOM

	// 销毁之前 对应父组件的v-if = false 就销毁当前组件
	beforeDestroy:function(){
		console.log('beforeDestroy');
	},
	//销毁之后
	destroyed:function(){
		console.log('destroyed');
	}
	// 销毁，最终都是做一些其他功能的释放，比如：保存数据到localStorage
};

var App = {
	components: {
		test: Test
	},
	data:function(){
		return {
			isExist:true
		}
	},
	template: `
		<div>
			<test v-if="isExist"></test>
			<button @click="isExist = !isExist">点我改变组件生死</button>
		</div>
	`
};
new Vue({
	el: '#app',
	components: {
		app: App
	},
	template: '<app/>'
});