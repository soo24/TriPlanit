from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from triplanit import views

urlpatterns = [
    path('triplanit/', views.api_root),
    path('triplanit/user/', views.UserList_List.as_view(), name='user'),

]

urlpatterns = format_suffix_patterns(urlpatterns)
