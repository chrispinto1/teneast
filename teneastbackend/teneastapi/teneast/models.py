from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class User(AbstractUser):
    phone_number = models.CharField(max_length=25) #25 just incase the app takes foreign phone numbers
    investment_type = models.CharField(max_length=50)
    exposure_types = ArrayField(models.CharField(max_length=50), size=1)
    investment_structure = models.CharField(max_length=200)
    duration = models.CharField(max_length=300)
    investment_goals = models.CharField(max_length=300)
    preferred_contact_method = models.CharField(max_length=50)

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
    subscription_deadline = models.DateField(max_length=50)
    estimated_term = models.CharField(max_length=100)
    overview = models.TextField()

    def __str__(self):
        return self.name

    def get_minimum_investment(self):
        return self.minimum_investment

class userInvestments(models.Model):
    investment = models.ForeignKey(Investment, on_delete=models.CASCADE)