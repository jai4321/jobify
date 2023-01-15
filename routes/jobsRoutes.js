import express from 'express'
import { createJob, deleteJob, getAllJobs, updateJob, showStats } from '../controllers/jobsControllers.js'
const router = express.Router()

router.route('/').post(createJob).get(getAllJobs)
//remember about :id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router;