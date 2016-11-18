#!/bin/bash
docker run -d -p $1:$1 -e NAME="$2" -e PORT=$1 simple-node
