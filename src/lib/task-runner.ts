import * as ora from 'ora'

export default class TaskRunner {
  _tasks

  constructor(tasks: { title: string; task: (ctx: any) => Promise<void> }[]) {
    this._tasks = tasks
  }

  async run(): Promise<any> {
    const ctx = {}
    for (const task of this._tasks) {
      const spinner = ora(task.title).start()
      // eslint-disable-next-line no-await-in-loop
      await task
        .task(ctx)
        .then(() => spinner.succeed())
        .catch((error) => {
          spinner.fail()
          throw error
        })
    }

    return ctx
  }
}
