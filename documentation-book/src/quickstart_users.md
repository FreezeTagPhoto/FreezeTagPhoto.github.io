# Quickstart Guide for Users

## Installation/Building/Running

In the beta phase of our project, if you have been asked to participate in our user studies, then you should have received an archive of our project. Unzip the archive. You will also need to have [Docker Compose](https://docs.docker.com/compose/install) installed on your machine. You can use the linked guide which uses Docker Desktop on most platforms, but it is also possible to use Colima or some alternatives. As long as you have access to the `docker compose` commands, you should be good to go! In the main directory of the FreezeTag project, run

```
docker compose up
```

This may take a while the first time, it will build the frontend and backend docker images and then begin serving content. You can access the frontend using <http://localhost:3000>, and view the backend API documentation using <http://localhost:3824/swagger>. To kill the project, run

```
docker compose down
```

in this same directory. You can run the `up` command again in the future to start back up, and your data should be retained.

## Using the Software

TODO
