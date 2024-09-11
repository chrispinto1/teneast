FROM python:3.12.5-alpine3.19
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY . .
WORKDIR /app/teneastapi
CMD python manage.py loaddata seed.json && python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000