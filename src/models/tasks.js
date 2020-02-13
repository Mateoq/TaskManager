import shortid from 'shortid';

function Tasks() {
  const date = new Date();
  date.setDate(date.getDate() + 3);

  const tasks = [
    {
      id: shortid.generate(),
      name: 'First task',
      expireIn: date.getTime(),
      done: true
    }
  ];

  return {
    get() {
      const sortedTasks = tasks.sort((a, b) => {
        if (a.expireIn < b.expireIn) {
          return -1;
        } else if (a.expireIn > b.expireIn) {
          return 1;
        }

        return 0;
      });
      return sortedTasks;
    },
    create(name, expireIn) {
      const task = {
        id: shortid.generate(),
        name,
        expireIn,
        done: false
      };
      tasks.push(task);
      return task;
    },
    toggle(id) {
      for (let tIndex = 0; tIndex < tasks.length; ++tIndex) {
        const task = tasks[tIndex];

        if (task.id === id) {
          tasks[tIndex].done = !task.done;
          return;
        }
      }
    }
  };
};

if (!process.tasks) {
  const tasks = Tasks();
  process.tasks = tasks;
}


export default process.tasks;
