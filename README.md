#How to run

docker-compose build
docker-compose up -d

#Pytests

###Go to the teneastbackend/teneastapi/teneastapi/.env folder
###Switch the DB_HOST=db to DB_HOST=localhost
###In the terminal, cd to the teneast/teneastbackend/teneastapi folder
###run python -m .venv venv
if you're on a windows machine
###run source ../.venv/Scripts/activate
if you're on a mac machine
###run source ../.venv/bin/activate
###run pytest

#Future Development

###1. Add in the investments to the login landing page
###2. Add the pytest to the docker container to eliminate the need of any local machine setup
###3. A more efficient User Authentication and User token storage
###4. More model setup to add in more of the views seen in the frontend