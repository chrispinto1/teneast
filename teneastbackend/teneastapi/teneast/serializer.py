from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from .models import Investor

UserModel = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Investor
        fields = ['email', 'username', 'first_name', 'last_name']
    
    def create(self, valid_data):
        if Investor.objects.filter(email=valid_data["email"]).exists():
            raise serializers.ValidationError("User Already exists.")
        
        user_obj = Investor.objects.create_user(email=valid_data["email"], password=valid_data["password"])
        user_obj.save()
        return user_obj