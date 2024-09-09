from django.urls import path, include

from teneast import views

urlpatterns = [
    path('signup', views.Signup.as_view(), name='signup')
]