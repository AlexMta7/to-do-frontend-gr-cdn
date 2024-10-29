import axios from 'axios'
import { routes } from '../utils/routes'

export function getTasks() {
  return new Promise((resolve, reject) => {
    axios
      .get(routes.backend.url + '/api/tasks')
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export function createTask(task) {
  return new Promise((resolve, reject) => {
    axios
      .post(routes.backend.url + '/api/tasks', task)
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export function updateTask(task) {
  return new Promise((resolve, reject) => {
    axios
      .put(routes.backend.url + `/api/tasks/${task.id}`, task)
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export function deleteTask(taskId) {
  return new Promise((resolve, reject) => {
    axios
      .delete(routes.backend.url + `/api/tasks/${taskId}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}
