from django.views.decorators.csrf import csrf_exempt
from triplanit.models import UserList, PlanList, DayEvent
from triplanit.serializers import UserListSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import mixins
from rest_framework import generics

class UserList_view(mixins.ListModelMixin,
mixins.CreateModelMixin,
generics.GenericAPIView):
        queryset = UserList.objects.all()
        serializer_class = UserListSerializer

        def get(self, request, *args, **kwargs):
                return self.list(request, *args, **kwargs)

        def post(self, request, *args, **kwargs):
                return self.list(request, *args, **kwargs)
                
