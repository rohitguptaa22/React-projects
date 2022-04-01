THis project is a simple task adder app in which you can add tasks using form submission and delete the task by clicking on the task.

One of the most important part of creating this project is to understand the different ways of includin CSS components.
Generally there are 3 ways to include a CSS styling
1. make css file of corresponding component and simply add it to the js file. This method is not recommended as the same className
can be used by different components if the name si similar.
2. styled-components. In this method a seperate function is created in the componentand the styled syntax can replace the JSX syntax.
In this method, the styled components module creates a unique hashName for the components and uses it so that it cant be copied.
3. using CSS modules. Button.css => Button.module.css,  import styles from './Button.module.css',
   use <div className= " button " > => <div className = {styles.button}>.