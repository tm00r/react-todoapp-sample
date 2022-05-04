export const TodoData = (): Promise<Array<TodoType>> => new Promise((res, rej) => {
  res([
    {
      id: "1",
      text: "Go shopping",
      complete: true,
      details: "Task 1.\n Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase a suitable selection of them."
    },
    {
      id: "2",
      text: "Job interview",
      complete: false,
      details: "Task 2.\n A job interview is an interview consisting of a conversation between a job applicant and a representative of an employer which is conducted to assess whether the applicant should be hired."
    },
    {
      id: "3",
      text: "Prepare homework",
      complete: true,
      details: "Task 3. \n Homework is a set of tasks assigned to students by their teachers to be completed outside the classroom. Common homework assignments may include required reading, a writing or typing project, mathematical exercises to be completed, information to be reviewed before a test, or other skills to be practiced."
    }
  ]);
  rej("Error");
});