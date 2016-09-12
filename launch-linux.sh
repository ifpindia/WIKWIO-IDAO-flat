#!/bin/sh
#

    netstat -ntpl | grep 5000 -q ; 

    if [ $? -eq 1 ]
    then 
        echo yes 
    else 
        kill -9 $(lsof -i:5000 -t) 2> /dev/null
    fi
#

cd $(dirname "$0")
cd server

#
./node-linux server.js