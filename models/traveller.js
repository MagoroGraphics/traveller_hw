const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let result = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
  
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let allDistances = this.journeys.map((journey) => {
    return journey.distance
  })
  
  let result = allDistances.reduce((runningTotal, distance) => {
    return runningTotal + distance
  })
  return result
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportList = this.journeys.map((journey) => {
    return journey.transport;
  })

  const filteredList = transportList.filter((transport, index) => {
    return transportList.indexOf(transport) === index
  }) 
    
  return filteredList;
};


module.exports = Traveller;
