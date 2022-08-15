from django.db import models

class UserList(models.Model):
    name = models.CharField(max_length=200)
    date_birth = models.DateField()
    gender = 
    liked_plan

class PlanList(models.Model):
    owner = models.CharField(max_length=200)
    plan_created_date = models.DateTimeField().auto 
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    category
    day

class DayEvent(models.Model):
    place = models.CharField(max_length=200)
    time = models.DateTimeField()
    detailDescription = models.CharField(max_length=200)
    lng = models.FloatField()
    lat = models.FloatField()
