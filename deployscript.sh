#!/bin/bash
npm run build && rsync -avz build/* $SRVR\:nodeSites/flps/