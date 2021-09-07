import { generateId } from "../Utils/generateId.js"

export class Job {
  constructor(jobData) {
    this.id = jobData.id
    this.jobTitle = jobData.jobTitle
    this.description = jobData.description
    this.rate = jobData.rate
    this.hours = jobData.hours
    this.company = jobData.company
    
  }

  get CardTemplate() {
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <div>
          <h4>${this.jobTitle}</h4>
        </div>
        <div>
          <h4>${this.company}</h4>
        </div>
        <div>
          <h4>${this.rate}</h4>
        </div>
        <div>
          <h4>${this.hours}</h4>
        </div>
        <div>
          <h4>${this.description}</h4>
        </div>
      </div>
      <button onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
    </div>
    `
  }
    
}
