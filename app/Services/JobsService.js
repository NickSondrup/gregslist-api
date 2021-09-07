import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";


// @ts-ignore
const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/jobs"
})
class JobsService {
  async deleteJob(jobId) {
    await api.delete(jobId)
    ProxyState.jobs = ProxyState.jobs.filter(c => c.id !== jobId)
  }

  async addJob(jobData){
    let res = await api.post('', jobData)
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data) ]
  }

  async getJobs(){
    let res = await api.get()

    ProxyState.jobs = res.data.map(j => new Job(j))
  }

}
 
export const jobsService = new JobsService();

