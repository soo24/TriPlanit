from email.mime import image
from email.policy import default
from hashlib import blake2b
from django.db import models
from django.contrib.postgres.fields import ArrayField

def user_directory_path(instance, filename):
    return 'user_{0}/{1}'.format(instance.user.id, filename)

class UserList(models.Model):
    class Gender(models.IntegerChoices):
        Male = 1
        Female = 2

    name = models.CharField(max_length=200)
    date_birth = models.DateField(blank=True, null=True)
    gender = models.IntegerField(choices=Gender.choices)
    liked_plan = ArrayField(models.IntegerField(null=True, blank=True), null=True)
    email = models.CharField(max_length=200, blank=False)
    age = models.IntegerField(blank=True)
    profile_img = models.ImageField(upload_to = user_directory_path, blank=True, null=True)


class PlanList(models.Model):
    owner = models.CharField(max_length=200)
    plan_created_date = models.DateTimeField().auto_now
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    category = ArrayField(models.CharField(max_length=200), blank=True)
    day = ArrayField(models.IntegerField())

class DayEvent(models.Model):
    day_id = models.ForeignKey(PlanList, on_delete=models.CASCADE)
    place = models.CharField(max_length=200)
    time = models.DateTimeField()
    detailDescription = models.CharField(max_length=200)
    lng = models.FloatField()
    lat = models.FloatField()
