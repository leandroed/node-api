Execute unit test:
npm run test:unit

Execute integration test:
npm run test:integration

Execute all tests:
npm test

Check test coverage:
npm run test:ci

Generate distribution files:
npm run build

Use docker to test:
Check running containers:
docker ps
Check all containers:
docker ps -a
To remove an container, change the id to the container id:
docker container rm id
To remove all containers:
docker container prune
Show docker images:
docker images -a
To remove docker image, change the id to the image id
docker image rm id
To run docker compose:
docker-compose up
Or:
docker-compose up -d

To start a project:
npm run up

To stop the project:
npm run down