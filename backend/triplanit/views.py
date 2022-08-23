from django.views.decorators.csrf import csrf_exempt
from triplanit.models import UserList, PlanList, DayEvent
from triplanit.serializers import UserListSerializer
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.reverse import reverse

class UserList_List(generics.ListCreateAPIView):
        queryset = UserList.objects.all()
        serializer_class = UserListSerializer

@api_view(['GET', 'POST'])
def user(request, email, format=None):
        try:
                user = UserList.objects.get(email=email)
        except UserList.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)


        if request.method == 'GET':
                serializer = UserListSerializer(user)
                return Response(serializer.data)

        elif request.method == 'POST':
                serializer = UserListSerializer(data=request.data)
                if serializer.is_valid():
                        serializer.save()
                        return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def api_root(request, format=None):
        return Response({
                'user': reverse('user', request=request, format=format),
        })
