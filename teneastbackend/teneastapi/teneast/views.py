from django.shortcuts import render
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .serializer import UserSerializer
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.
UserModel = get_user_model()

class Signup(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        valid_data = request.data
        serializer = UserSerializer(data=valid_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(valid_data)
            if user:
                token = Token.objects.create(user=user)
                serializer = UserSerializer(instance=user)
                response = Response(status=status.HTTP_201_CREATED)
                # response.set_cookie(key='token', value=token, httpOnly=True)
                response.data = {"token": token.key, 'user': serializer.dataS}
                return response
            
class Login(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        valid_data = request.data
        user = get_object_or_404(UserModel, username=valid_data["email"])
        if not user.check_password(valid_data['password']):
            return Response({"error": "Please check your email or password"}, status=status.HTTP_404_not_found)
        token, created = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(instance=user)
        request.session['token'] = token.key
        response = Response()
        # response.set_cookie(key='token', value=token.key, expires=3000, httponly=True)
        response.data = {'user': serializer.data, 'token': token.key}
        return response
    
class Logout(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        request.session['token'] = None
        return Response({'success': 'successfully logged user out'})
    
class GetUserToken(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        token = request.session['token']
        if not token:
            return Response({'token': None})
        user = Token.objects.get(key=token).user
        serializer = UserSerializer(instance=user)
        return Response({'token': token, 'user': serializer.data})

class Offerings(APIView):
    authentication_classes = [SessionAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]