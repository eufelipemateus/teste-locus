FROM python:3.8-slim-buster


WORKDIR /app

RUN apt update 
RUN apt install python3-dev default-libmysqlclient-dev build-essential -y

RUN python -m pip install --upgrade pip

#RUN soruce ./myvenv/bin/activate
COPY requirements.txt requirements.txt


RUN pip install -r requirements.txt


COPY src/ .


CMD ["python", "manage.py",  "runserver"]