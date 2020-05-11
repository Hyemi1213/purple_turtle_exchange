#!/bin/bash

#start server
forever start --uid "purple_turtle_exchange" --minUptime 5000 --spinSleepTime 5000 -a -c "node index.js" ./
