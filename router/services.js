const express = require('express');
const { v4: uuid } = require('uuid');
const { service } = require('../data');
const Service = require('../models/service');
const mongoose = require('mongoose');

const serviceRouter = express.Router();


// GET ALL THE RECORDS
serviceRouter.get('/', async (req, res) => {
  try {
    const resp = await Service.find();
    res.status(200).send(resp);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET THE RECORDS BY ID
serviceRouter.get('/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const resp = await Service.findById(id);
    res.status(200).send(resp);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

// POST RECORDS IN DB
serviceRouter.post('/', async (req, res) => {
    try {
      const resp = await Service.create(req.body);
      res.status(201).send(resp);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  
// DELETE RECORDS BY ID
serviceRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await Service.findByIdAndDelete(id);
    if (!resp) {
      res.status(400).send('Already deleted');
      return;
    }
    res.status(200).send('successfully deleted');
  } catch (error) {
    res.status(404).send(error.message);
  }
});
  
serviceRouter.put('/:id', async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const resp = await Service.findByIdAndUpdate(id, data);
    if (!resp) {
      res.status(404).send('Service not found against given id.');
      return;
    }
    res.status(200).send({ ...data, id });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = serviceRouter;
