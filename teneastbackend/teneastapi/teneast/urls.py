from django.urls import path, include

from teneast import views

urlpatterns = [
    path('signup', views.Signup.as_view(), name='signup'),
    path('login', views.Login.as_view(), name='login'),
    path('logout', views.Logout.as_view(), name='logout'),
    path('get_auth_token', views.GetUserToken.as_view(), name='get_auth_token'),
    path('offerings_landing_page', views.OfferingsLanding.as_view(), name='offerings_landing_page')
]