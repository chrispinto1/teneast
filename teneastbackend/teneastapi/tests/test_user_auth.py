import pytest
import logging

logger = logging.getLogger(__name__)

@pytest.mark.django_db
def test_signup(api_client):
    payload = {
        'username': 'r@g.com',
        'email': 'r@g.com',
        'password': '1234'
    }

    response = api_client.post('/api/signup', data=payload, format="json")
    assert "token" in response.data and len(response.data["token"]) == 40

@pytest.mark.django_db
def test_invalid_login(api_client):
    payload = {
        'email': 'e@eg.com',
        'password': '1234'
    }

    response = api_client.post('/api/login', data=payload, format="json")
    assert response.data["detail"].code == "not_found"

@pytest.mark.django_db
def test_login(api_client):
    payload = {
        'username': 's@s.com',
        'email': 's@s.com',
        'password': 'q'
    }
    user = signup(api_client, payload)

    response = api_client.post('/api/login', data=payload, format="json")
    assert "token" in response.data and len(response.data["token"]) == 40

@pytest.mark.django_db
def test_logout(api_client):
    payload = {
        'username': 's@s.com',
        'email': 's@s.com',
        'password': 'q'
    }
    user = signup(api_client, payload)
    login_response = api_client.post('/api/login', data=payload, format="json")
    response = api_client.post('/api/logout', HTTP_AUTHORIZATION='Token ' + login_response.data['token'], format="json")
    assert response.data["success"] == 'successfully logged user out'

@pytest.mark.django_db
def test_get_auth_token(api_client):
    payload = {
        'username': 's@s.com',
        'email': 's@s.com',
        'password': 'q'
    }
    user = signup(api_client, payload)
    login_response = api_client.post('/api/login', data=payload, format="json")
    auth_response = api_client.get('/api/get_auth_token', format="json")
    assert "token" in auth_response.data and len(auth_response.data["token"]) == 40

def signup(api_client, payload):
    response = api_client.post('/api/signup', data=payload, format="json")
    return response