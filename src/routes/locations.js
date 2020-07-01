const express = require('express')
const locationsServices = require('../services/locations')

const locationsRoutes = app => {
  const router = express.Router()
  app.use('/api/locations', router)

  // ? Lists all the zones
  router.get('/', async (req, res, next) => {
    try {
      const locations = await locationsServices.getLocations()

      res.status(200).json({
        data: locations,
        message: 'Zones listed'
      })
    } catch (error) {
      next(error)
    }
  })

  // ? Lists all the neighborhood in zone
  router.get('/:zone', async (req, res, next) => {
    const { locationId } = req.params
    try {
      const location = await locationsServices.getOneLocation({ locationId })
      res.status(200).json({
        data: location,
        message: 'Neighborhood listed'
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = locationsRoutes
