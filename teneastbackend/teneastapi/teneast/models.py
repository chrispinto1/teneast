from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.base_user import BaseUserManager

import uuid
# Create your models here.

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password):
        if not email:
            raise ValueError('Please provide an email')
        if not password:
            raise ValueError('Please provide a password')

        email = self.normalize_email(email)
        #not the ideal way of not using the username field
        user = self.model(email=email,username=email)
        user.set_password(password)
        user.save()
        return user

class Investor(AbstractUser):
    phone_number = models.CharField(max_length=25, blank=True) #25 just incase the app takes foreign phone numbers
    investment_type = models.CharField(max_length=50, blank=True)
    exposure_types = ArrayField(models.CharField(max_length=50, blank=True), default=[], size=1, blank=True)
    investment_structure = models.CharField(max_length=200, blank=True)
    duration = models.CharField(max_length=300, blank=True)
    investment_goals = models.CharField(max_length=300, blank=True)
    preferred_contact_method = models.CharField(max_length=50, blank=True)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    objects = CustomUserManager()

    def as_dict(self):
        return {"name": self.first_name, 'uuid': self.uuid}

    def get_formatted_number(self):
        return self.phone_number

# General Note: Possibly break down the class into smaller ones and inherit the main investment class

class Investment(models.Model):
    name = models.CharField(max_length=200)
    status = models.CharField(max_length=100)
    tags = ArrayField(models.CharField(max_length=100), size=1)
    investment_type = models.CharField(max_length=100)
    target_net_moic = models.CharField(max_length=50)
    target_net_irr = models.CharField(max_length=50)
    estimated_term = models.CharField(max_length=50)
    minimum_investment = models.CharField(max_length=50)
    # subscription_deadline = models.DateField(max_length=50)
    estimated_term = models.CharField(max_length=100)
    overview = models.TextField()

    def __str__(self):
        return self.name

    def get_minimum_investment(self):
        return self.minimum_investment

class UserInvestments(models.Model):
    investment = models.ForeignKey(Investment, on_delete=models.CASCADE)