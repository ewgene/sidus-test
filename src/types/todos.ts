//import { defineComponent, ref } from "vue"
import ToDo from "./todo"

defineProps({
    list: Array
})

export default interface ToDos {
    title: string
    todos: Array<ToDo>
    id: number
}

