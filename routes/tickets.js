const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets')


router.get(`/flights/:id/tickets/new`, ticketsCtrl.new);
router.post("/flights/:id/tickets" , ticketsCtrl.create);

//Route for making the new ticket. POST /flights/:id/tickets/new

module.exports = router