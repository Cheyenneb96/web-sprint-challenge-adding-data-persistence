// build your `/api/resources` router here
const express = require('express')
const helpers = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    helpers.getRecources()
        .then(recources => {
            res.status(200).json(recources)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const { resource_name } = req.body

    if (
        typeof resource_name !== 'string' ||
        !resource_name.trim().length
    ) {
        next({
            message: 'resource name is required'
        })
    } else {
        helpers.postRecource(req.body)
            .then(resource => {
                res.status(201).json(resource)
            })
            .catch(next)
    }

})

module.exports = router