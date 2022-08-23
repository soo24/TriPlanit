from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from triplanit import views

urlpatterns = [
    path('triplanit/', views.api_root),
    path('triplaint/users/', views.UserList.as_view(), name='user'),

]

urlpatterns = format_suffix_patterns(urlpatterns)
