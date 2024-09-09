from django.shortcuts import render
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializer import UserSignupSerializer
# Create your views here.

class Signup(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        valid_data = request.data
        serializer = UserSignupSerializer(data=valid_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(valid_data)
            if user:
                token = Token.objects.create(user=user)
                return Response({"token": token.key, 'user': user.as_dict()}, status=status.HTTP_201_CREATED)