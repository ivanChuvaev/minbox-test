import { CreateTodoItem } from "@/components/CreateTodoItem";
import { StatusLine } from "@/components/StatusLine/StatusLine";
import { TodoList } from "@/components/TodoList/TodoList";
import { Paper } from "@/ui/Paper/Paper";
import classes from './Main.module.scss';
import { Typography } from "@/ui/Typography";

export function Main() {
  return (
    <div className={classes.main}>
      <Typography tag="h1" variant="h1" className={classes.main__title}>TODOS</Typography>
      <Paper className={classes.main__paper}>
        <CreateTodoItem />
        <TodoList />
        <StatusLine />
      </Paper>
    </div>
  )
}
