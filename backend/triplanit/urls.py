from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from triplanit import views

urlpatterns = [
    path('triplanit/', views.UserList_view.as_view()),
]
