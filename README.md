# docker-start
A starting point for a multi-container Docker service using Nginx, Node and Rethinkdb

I haven't added rethinkdb yet, though.

## Running
From the root directory:
```docker-compose up```

That's it. You should now be able to view the page served by each node server by navigating to port 80 on whatever host the nginx container is listening on
