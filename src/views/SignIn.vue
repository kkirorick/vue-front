<template>
  <div class="sign">
    <h1>This is a login</h1>
	<div class="container">
		<div class="col-md-6 offset-md-3">
			<h1 class="text-center mb-4">TODO application</h1>
			<input type="text" class="form-control" v-model="userInput" @keyup.enter="addNewTodo">

			<div class="list-group mt-4">
				<todo :active-todo-list="activeTodoList" @child="toggleTodoState" />
			</div>

			<div class="text-right">
				<button type="button" class="btn btn-sm" @click="changeCurrentState('active')">as is</button>
				<button type="button" class="btn btn-sm" @click="changeCurrentState('done')">to do</button>
				<button type="button" class="btn btn-sm" @click="changeCurrentState('all')">all</button>
			</div>


		</div>
	</div>
  </div>
</template>


